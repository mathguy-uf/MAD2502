# MAD 2502 — Start Here

Welcome to the MAD 2502 course repository. You do **not** need to be a GitHub expert to use this material.

The course website is the easiest place to navigate the material. GitHub stores the notebooks behind the site.

## Three ways to use a notebook

Every current notebook will provide the same three choices used in MAD 4401:

| Choice | Best for | What happens |
|---|---|---|
| **View on GitHub** | Reading quickly | Opens the notebook as a rendered page. You can read code and saved output, but you cannot execute cells. |
| **Run in Colab** | Easiest way to experiment | Opens a copy in Google Colab. Python runs in your browser; no local Jupyter installation is required. |
| **Launch Binder / JupyterLab** | Browser-based Jupyter experience | Builds the repository in a temporary hosted JupyterLab session. Startup can take longer than Colab. |

If you already have Python and JupyterLab installed on your computer, cloning the repository is usually the best option for repeated course use.

---

# Using Git and GitHub for this course

## What is GitHub?

GitHub stores the course files online. **Git** is the tool that keeps your local copy synchronized with the online repository.

For this course, students usually need only two Git operations:

1. `git clone` — make your first local copy.
2. `git pull` — update that copy later.

You normally do **not** need `git push` for the instructor's course repository.

## First time only

Open Terminal on macOS/Linux or PowerShell/Terminal on Windows.

Choose where you want the course folder to live. For example:

```bash
cd Documents
git clone https://github.com/mathguy-uf/MAD2502.git
cd MAD2502
python -m pip install -r requirements.txt
jupyter lab
```

The `git clone` command creates a new folder named `MAD2502` containing the course materials.

## Later course sessions

Once you have cloned the repository, do **not** clone it again. Move into the existing folder and pull the newest version:

```bash
cd Documents/MAD2502
git pull
jupyter lab
```

## Useful terminal commands

| Command | What it does |
|---|---|
| `pwd` | Shows the folder you are currently in. |
| `ls` | Lists files and folders. |
| `cd folder_name` | Moves into a folder. |
| `cd ..` | Moves up one folder. |
| `git clone URL` | Makes the first local copy of a repository. |
| `git pull` | Downloads new course changes into your existing copy. |
| `git status` | Shows files you have changed locally. |
| `jupyter lab` | Opens JupyterLab. |
| `python -m pip install package_name` | Installs a Python package into the selected Python environment. |

## A common Git problem: you changed the instructor notebook

Suppose you edit `lecture_12_graphics.ipynb` and later run:

```bash
git pull
```

Git may warn you that your local changes conflict with the updated course file.

The easiest student workflow is:

1. Make a personal copy before changing a course notebook.
2. Give the copy a different filename, such as `lecture_12_graphics_jason_work.ipynb`.
3. Keep the original course notebook unchanged when possible.

You can always check what Git sees with:

```bash
git status
```

## If you only want one notebook

Use **Run in Colab** from the course website. This is often the quickest option if you do not need the whole repository.

## If Binder takes a while

Binder creates a temporary environment for the repository. It can take a few minutes to start, particularly the first time after course files change. Colab is usually faster for a single notebook.

---

# Jupyter basics

## Run a cell

- **Shift + Enter** — run the current cell and move to the next cell.
- **Ctrl + Enter** — run the current cell and remain in that cell.

## If a notebook becomes confused

Variables live in the running Python kernel, not permanently in the notebook cells. If results do not make sense:

1. Restart the kernel.
2. Choose **Run All**.
3. Read the first error rather than only the last one.

## Check which Python is running

```python
import sys
print(sys.executable)
```

This is useful when you installed a package but the notebook still says it cannot find it.

## Check your current folder

```python
from pathlib import Path
print(Path.cwd())
```

Many file errors happen because Python is looking in a different folder than you expected.

---

# API keys and private information

Some course examples use APIs such as eBird.

**Never upload a personal API key, password, token, or private student information to GitHub.**

For course examples, API keys should be stored in a local file such as:

```text
my_api_info.py
```

That file should remain ignored by Git and should not be committed to a public repository.

---

[Return to the MAD 2502 course website](./)
