"""Check network/data boundaries without credentials or live services.

Run: python -m unittest discover -s maintenance -p 'test_*.py'
These checks simulate a Colab folder without the course CSV; they do not
claim to launch the Colab or Binder frontend.
"""
import contextlib
import io
import json
import os
from pathlib import Path
import tempfile
import unittest
from unittest.mock import Mock, patch

import pandas as pd
import requests

ROOT = Path(__file__).resolve().parents[1]


def code_cell(path, contains):
    notebook = json.loads((ROOT / path).read_text())
    return next("".join(c["source"]) for c in notebook["cells"]
                if c["cell_type"] == "code" and contains in "".join(c["source"]))


class DataBoundaries(unittest.TestCase):
    def setUp(self):
        self.namespace = {"pd": pd, "requests": requests}
        exec(code_cell("applied_data/01_ebird_api.ipynb", "def get_ebird_data"), self.namespace)
        self.get_birds = self.namespace["get_ebird_data"]

    def test_ebird_empty_and_missing_counts(self):
        for records, expected_rows in [([], 0), ([{"speciesCode": "norcar"}], 1),
                                       ([{"howMany": 2}, {"howMany": 5}, {}], 3)]:
            response = Mock()
            response.json.return_value = records
            with patch.object(requests, "get", return_value=response) as get:
                frame = self.get_birds("FAKE_TEST_KEY", "US-FL", "norcar")
            self.assertEqual(len(frame), expected_rows)
            self.assertTrue({"howMany", "speciesCode", "locName"}.issubset(frame.columns))
            response.raise_for_status.assert_called_once()
            self.assertEqual(get.call_args.kwargs["params"]["back"], 7)
            self.assertEqual(get.call_args.kwargs["timeout"], 30)
            if expected_rows == 3:
                self.assertEqual(frame.howMany.sum(min_count=1), 7)
                self.assertEqual(frame.howMany.isna().sum(), 1)
            else:
                self.assertTrue(pd.isna(frame.howMany.sum(min_count=1)))

    def test_ebird_rejects_bad_shape_and_http_failure(self):
        for records in [{"error": "bad response"}, [1, 2]]:
            response = Mock()
            response.json.return_value = records
            with patch.object(requests, "get", return_value=response):
                with self.assertRaises(ValueError):
                    self.get_birds("FAKE_TEST_KEY", "US-FL", "norcar")
        response = Mock()
        response.raise_for_status.side_effect = requests.HTTPError("403")
        with patch.object(requests, "get", return_value=response):
            with self.assertRaises(requests.HTTPError):
                self.get_birds("FAKE_TEST_KEY", "US-FL", "norcar")
        response.json.assert_not_called()

    def test_ebird_placeholder_never_requests(self):
        with patch.object(requests, "get") as get:
            with self.assertRaises(ValueError):
                self.get_birds("YOUR_KEY_HERE", "US-FL", "norcar")
        get.assert_not_called()

    def test_pandas_local_and_no_local_file(self):
        loader = code_cell("applied_data/02_pandas_basics.ipynb", "LOCAL_PATHS")
        expected = pd.read_csv(ROOT / "applied_data/data/campus_events.csv")
        previous = Path.cwd()
        try:
            for folder in [ROOT, ROOT / "applied_data"]:
                os.chdir(folder)
                namespace = {}
                with patch.object(requests, "get") as get, contextlib.redirect_stdout(io.StringIO()):
                    exec(loader, namespace)
                get.assert_not_called()
                pd.testing.assert_frame_equal(namespace["events"], expected)
            with tempfile.TemporaryDirectory() as folder:
                os.chdir(folder)
                response = Mock(text=(ROOT / "applied_data/data/campus_events.csv").read_text())
                namespace = {}
                with patch.object(requests, "get", return_value=response) as get, contextlib.redirect_stdout(io.StringIO()):
                    exec(loader, namespace)
                self.assertEqual(get.call_args.args[0], "https://raw.githubusercontent.com/mathguy-uf/MAD2502/main/applied_data/data/campus_events.csv")
                response.raise_for_status.assert_called_once()
                pd.testing.assert_frame_equal(namespace["events"], expected)
        finally:
            os.chdir(previous)

    def test_villains_embedded_sample_matches_file(self):
        namespace = {}
        exec(code_cell("applied_data/03_statistics_villains.ipynb", "SAMPLE_HTML ="), namespace)
        embedded = pd.read_html(io.StringIO(namespace["SAMPLE_HTML"]))[0]
        saved = pd.read_html(ROOT / "applied_data/data/statistics_villains_sample.html")[0]
        pd.testing.assert_frame_equal(embedded, saved)


if __name__ == "__main__":
    unittest.main()
