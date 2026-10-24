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

## Copyable starter notebook

Use the [Capstone Starter Notebook](capstone_starter.ipynb) if a blank notebook feels too open-ended.

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

```text
question
   ↓
source
   ↓
load data in Python
   ↓
inspect and clean
   ↓
first result
   ↓
visualize / compare / model
   ↓
interpret
   ↓
revise question
   ↓
report + presentation
```

Real projects move backward and forward through this path. That is normal.

## What counts as enough Python?

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

## Final report

As a general scale, plan for approximately **five pages per team member**. A three-person team should therefore expect roughly fifteen pages, although clarity is more important than hitting an exact page count.

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

Plan for a **10–12 minute presentation**.

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
