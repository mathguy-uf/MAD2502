# MAD 2502 audit — October 24, 2026

Audit base: `a203747c63ed7c4c3805498e92453443d5956247` on `main`.

## Initial inventory and findings

The complete starting tree contained 40 files and 20 notebooks. All notebook JSON parsed. No AGENTS.md instructions were present. Six notebooks remained at the root; several example links still targeted names no longer present there. The lectures folder contained only an index. Previously uploaded lecture sources were recovered separately for comparison and restoration.

The review found unlabeled intentional errors; Python 2 `raw_input`; interactive input that prevents unattended execution; stale outputs/counts; an HTML parser using a literal string; mixed-date parsing that can silently lose valid dates; an incomplete Data Rescue reference; no first-run functions/indexing examples in the data introduction; JavaScript-only Applied Data buttons; inaccessible mobile navigation without JavaScript; and outdated placeholder cards.

Older material is preserved under `archive/`, at the instructor's request. Archived code is historical, not certified for execution. Canonical student material is separate.

## Batch 1 — Applied Data

Revised all five tutorials and their index. Added explicit vocabulary, small functions/filtering/missing-data examples, a safe optional eBird live path, empty-response handling, `sum(min_count=1)`, a labeled six-row Statistics Villains excerpt, modern `StringIO` parsing, schema-based table selection, a worked graph, symptom-based repair examples, explicit mixed-date formats, and checked joins. Added data provenance notes and a fake credential template. The five prior tutorials are preserved under `archive/pre_audit/applied_data/`.

Validation: all five revised notebooks passed structure validation and execution in separate fresh IPython processes. eBird empty-list, missing-count, and ordinary-response branches were exercised with mocked HTTP responses; this does not validate a live credentialed request. Jupyter kernel sockets are blocked by the audit environment, including IPC, so no claim of full Jupyter frontend or hosted execution is made. The included validator records this distinction and skips the local-GUI Turtle notebook.

This report is being extended as the remaining batches are completed.

## Batch 2 — Capstone

Extended the existing beginner pathway with the research-tree distinction, responsible interpretation, report writing, presentation guidance, and reproducibility/accessibility. Added a copyable per-session journal and an immediately runnable first-result example. Clarified group row counts versus known measurements in the starter notebook. Explained model baselines and metrics without making machine learning a requirement. Prior capstone files are preserved under `archive/pre_audit/capstone/`.

Validation: starter notebook structure and fresh-process execution checked; local Markdown links checked. Current Canvas requirements override planning scales on this durable resource.

## Batch 3 — Optional examples

Preserved all prior example notebooks under `archive/pre_audit/examples/`. Moved root `Lecture07.ipynb`, `Lecture08.ipynb`, `lecture15.ipynb`, and `exam2_review_python.ipynb` into `archive/legacy_root/` with lowercase names. Their current teaching material is in `examples/collections.ipynb`, `random_simulation.ipynb`, and `oop_models.ipynb`; TXT-file introductions are covered in Chapter 11. Split mixed Brownian/dynamics/dice content into distinct examples. Corrected displacement semantics, equilateral triangle geometry, parabola labels, odometer validation, empty IntSet means, and a confidence-interval label; replaced very long simulation runs with modest reproducible defaults. Kept intentional list-mutation and index-error demonstrations explicit. Turtle remains local-GUI only.

Examples validation: 10 notebooks executed successfully in independent IPython processes; Turtle passed static checks only. The expected IndexError in collections was verified by type. Links to moved root examples were repaired in the existing site and lecture index.
