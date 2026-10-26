# MAD 2502 — Computational Mathematics with Python

This repository contains student-facing course resources for **MAD 2502: Computational Mathematics** at the University of Florida.

The repository is organized around the way the course is used:

- **[Lectures](lectures/README.md)** — reviewed Python and computational mathematics notebooks.
- **[Applied Data](applied_data/README.md)** — APIs, pandas, web data, and practical data workflows.
- **[Capstone](capstone/README.md)** — project planning, research process, analysis, report, and presentation guidance.
- **[GitHub for Group Projects](capstone/11_github_group_projects.md)** — a beginner workflow for sharing code and notebooks without overwriting teammates' work.
- **[Examples](examples/)** — additional computational demonstrations and simulations.

## Course website

The primary student interface is the GitHub Pages course site:

**https://mathguy-uf.github.io/MAD2502/**

Students should normally begin there rather than browsing the repository file tree.

## Start here

New to Git, GitHub, Jupyter, Colab, or Binder?

See **[START_HERE.md](START_HERE.md)** for:

- the three ways to use each notebook;
- `git clone` and `git pull`;
- useful terminal commands;
- Jupyter basics;
- package installation;
- file-path troubleshooting;
- API-key safety.

Working on a capstone with teammates? See **[GitHub for a Group Project](capstone/11_github_group_projects.md)** for the shared `pull → work → commit → push` workflow.

## Three ways to use notebooks

Student-facing notebooks use the same three options as MAD 4401:

1. **View on GitHub** — read the notebook structure and code.
2. **Run in Colab** — execute and change a notebook in Google Colab.
3. **Launch Binder** — open the repository in a temporary JupyterLab environment.

For repeated local use, clone the repository once:

```bash
cd Documents
git clone https://github.com/mathguy-uf/MAD2502.git
cd MAD2502
python -m pip install -r requirements.txt
jupyter lab
```

Later:

```bash
cd Documents/MAD2502
git pull
jupyter lab
```

## Important

Never commit API keys, passwords, tokens, private student information, or other credentials to this public repository. Local API-key files such as `my_api_info.py` are ignored by Git.

---

**Department of Mathematics — University of Florida**  
Course materials by Jason Harrington.
