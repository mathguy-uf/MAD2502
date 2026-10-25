# MAD 2502 Capstone Project

The capstone is where you begin using Python as a data-science tool on a question your team chooses.

This section is designed to be **standalone and beginner friendly**. It assumes this may be your first semester programming in Python.

You do not need to know advanced machine learning to complete a strong project.

[← Return to the course website](../)

## Start here

If you are unsure what to do next, follow these pages in order:

| Step | Resource | Purpose |
|---|---|---|
| **0** | [Capstone Start Here](00_start_here.md) | Understand what the project is and what a reasonable first milestone looks like. |
| **1** | [Choosing a Question and Scope](01_question_and_scope.md) | Turn a broad idea into something your data can actually answer. |
| **2** | [Finding and Evaluating Data](02_finding_data.md) | Learn what makes a usable source and how to inspect it. |
| **3** | [Getting Your First Python Result](03_first_python_result.md) | Load the data, inspect it, compute one result, and explain it. |
| **4** | [Analysis Menu](04_analysis_menu.md) | Choose a method appropriate for an introductory project. |
| **5** | [Project Journal Template](05_project_journal.md) | Keep track of work, mistakes, decisions, and next steps. |
| **6** | [The Research Tree](06_research_tree.md) | Preserve detours in the report; choose a clear presentation path. |
| **7** | [Responsible Interpretation](07_interpreting_results.md) | Match claims to evidence and explain limitations. |
| **8** | [Final Report](08_final_report.md) | Turn the journal and results into a documented account. |
| **9** | [Presentation](09_presentation.md) | Explain one coherent path within the time limit. |
| **10** | [Reproducibility and Accessibility](10_reproducibility_accessibility.md) | Make the work runnable and understandable by others. |

## Copyable starter notebook

Use the [Capstone Starter Notebook](capstone_starter.ipynb) if a blank notebook feels too open-ended.

[View on GitHub](capstone_starter.ipynb) · [Run in Google Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/capstone/capstone_starter.ipynb) · [Launch Binder/JupyterLab](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/capstone/capstone_starter.ipynb)

It already contains places for:

- project question;
- source information;
- imports;
- loading data;
- inspecting rows, columns, types, and missing values;
- cleaning notes;
- first result;
- first graph;
- interpretation;
- limitations;
- next question;
- project-journal update.

The example data inside it are intentionally tiny so the notebook runs before you replace them with your own data.

## The project path

Choose a question → find data → load and inspect → compute a result → interpret → revise → report and present.

Real projects branch as well as moving backward and forward. The [research tree](06_research_tree.md) shows how the report records the broader process while the presentation selects one clear path.

## What counts as enough Python?

The commands below are a vocabulary list; they are methods/attributes used on an existing table, such as `data.head()` and `data.shape`. See the runnable starter for complete examples.

A project does **not** need to use the most complicated method in the course.

For many projects, the core analysis may be built from:

```python
head()
shape
isna()
value_counts()
groupby()
mean()
median()
sort_values()
```

plus several carefully chosen graphs.

A more advanced model is useful only when it helps answer the question and your team can explain what it is doing.

## The first milestone matters most

Before building an app, training several models, or designing the final presentation, get one complete result working:

1. Python can access the data.
2. You know what one row represents.
3. You can identify the important columns.
4. You can compute one useful summary or comparison.
5. You can make one appropriate graph when useful.
6. You can explain the result in plain English.

That proves the project is feasible.

## Keep a project journal

Each work session should leave behind a short record of:

- what you tried;
- what worked;
- what failed;
- what changed;
- important sources or code you found;
- one result worth keeping;
- questions you still have;
- the next concrete step.

Your final report should reflect the **real computational process**, including important detours and decisions.

Canvas remains authoritative for current lengths, time limits, dates, deadlines, grading, and submission instructions. This site teaches the durable project workflow.

## Final report

Use Canvas for the required report length. Use the journal and research tree to decide what evidence and reasoning the report needs.

The report should explain:

- question and motivation;
- background and references;
- data source;
- what one row represents;
- cleaning and transformations;
- computational methods;
- mistakes, detours, or changes that affected the project;
- results and visualizations;
- limitations;
- conclusion and possible next steps.

## Presentation

Use the presentation time limit posted in Canvas.

The research process may be messy. The presentation should make the final path easy to follow:

**question → data → method → important result → conclusion**

Do not attempt to show every line of code or every dead end.

## Using AI tools productively

AI tools can help with:

- finding possible sources to investigate;
- explaining an error message;
- making code more readable;
- understanding an unfamiliar Python object;
- generating useful search terms;
- organizing project-journal notes;
- identifying questions to ask about your data.

You remain responsible for checking sources, understanding your code, verifying results, and accurately representing what your team did.

## Technical help

If Python or data science is still new, begin with:

[Data Science Start Here](../applied_data/00_data_science_start_here.ipynb)

Then use:

- [pandas Basics](../applied_data/02_pandas_basics.ipynb)
- [eBird API](../applied_data/01_ebird_api.ipynb)
- [Statistics Villains](../applied_data/03_statistics_villains.ipynb)
- [Data Rescue Kit](../applied_data/04_data_rescue_kit.ipynb)

The goal is not to memorize commands. The goal is to learn a repeatable process for turning data into evidence.

[← Return to the course website](../)

