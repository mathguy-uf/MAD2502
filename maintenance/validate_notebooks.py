"""Validate notebook structure and execute cells in fresh IPython processes.

Run from the repository root: python maintenance/validate_notebooks.py
Archives are preserved, not certified. Turtle requires a desktop GUI.
This is execution QA, not a hosted Colab/Binder or browser-widget test.
"""
from __future__ import annotations

import argparse
import ast
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import time

import nbformat

ROOT = Path(__file__).resolve().parents[1]


def execute_worker(path: Path) -> None:
    from IPython.core.interactiveshell import InteractiveShell

    shell = InteractiveShell.instance()
    notebook = nbformat.read(path, as_version=4)
    for index, cell in enumerate(notebook.cells):
        if cell.cell_type != "code" or not cell.source.strip():
            continue
        result = shell.run_cell(cell.source, store_history=False)
        error = result.error_before_exec or result.error_in_exec
        expected = cell.metadata.get("expected_error")
        if expected:
            if error is None or type(error).__name__ != expected:
                raise RuntimeError(f"Cell {index}: expected {expected}, got {error!r}")
        elif error is not None:
            raise RuntimeError(f"Cell {index}: unexpected {type(error).__name__}: {error}")


def validate(path: Path) -> dict:
    start = time.monotonic()
    relative = path.relative_to(ROOT)
    notebook = nbformat.read(path, as_version=4)
    nbformat.validate(notebook)
    from IPython.core.inputtransformer2 import TransformerManager

    transformer = TransformerManager()
    expected = []
    for index, cell in enumerate(notebook.cells):
        if cell.cell_type != "code":
            continue
        if cell.metadata.get("expected_error"):
            expected.append(index)
        try:
            ast.parse(transformer.transform_cell(cell.source))
        except SyntaxError:
            if cell.metadata.get("expected_error") != "SyntaxError":
                raise
    if relative.as_posix() == "examples/turtle_graphics.ipynb":
        return {"path": str(relative), "status": "STATIC_ONLY", "reason": "Local GUI required"}
    with tempfile.TemporaryDirectory(prefix="mad2502_check_") as directory:
        copy = Path(directory) / "course"
        shutil.copytree(ROOT, copy, ignore=shutil.ignore_patterns(".git", "archive", "__pycache__", ".ipynb_checkpoints", "outputs"))
        target = copy / relative
        environment = dict(os.environ, MPLBACKEND="Agg", PYTHONHASHSEED="0")
        result = subprocess.run(
            [sys.executable, str(Path(__file__).resolve()), "--worker", str(target)],
            cwd=target.parent, env=environment, text=True, capture_output=True, timeout=90,
        )
    report = {"path": str(relative), "status": "PASS" if result.returncode == 0 else "FAIL", "expected_error_cells": expected, "seconds": round(time.monotonic() - start, 2)}
    if result.returncode:
        report["error"] = (result.stdout + result.stderr)[-4000:]
    return report


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--worker", type=Path)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    if args.worker:
        execute_worker(args.worker)
        return
    paths = [ROOT / p for p in args.paths] if args.paths else sorted(p for p in ROOT.rglob("*.ipynb") if "archive" not in p.relative_to(ROOT).parts)
    reports = []
    for path in paths:
        try:
            report = validate(path)
        except Exception as error:
            report = {"path": str(path.relative_to(ROOT)), "status": "FAIL", "error": str(error)}
        reports.append(report)
        print(json.dumps(report), flush=True)
    if args.output:
        args.output.write_text(json.dumps(reports, indent=2) + "\n")
    raise SystemExit(any(report["status"] == "FAIL" for report in reports))


if __name__ == "__main__":
    main()
