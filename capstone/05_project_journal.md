# Keep a Project Journal

[← Analysis Menu](04_analysis_menu.md) · [Next: Research Tree →](06_research_tree.md)

Write a short journal entry **every time your team works**, including sessions where the code fails.

The journal is not busywork. It prevents you from having to reconstruct the project from memory when you write the final report.

## Copy this template for every work session

```text
Date:

Who worked today:

Goal:

What we tried:

Code/data/source used:

What happened:

Error or unexpected result:

What we learned:

Decision:

Next step:
```

Keep the labels exactly this simple. Short entries are fine.

## Fictional example

```text
Date:
October 12

Who worked today:
Team members A and B

Goal:
Compare indoor and outdoor event attendance.

What we tried:
Loaded the CSV and grouped attendance by location type.

Code/data/source used:
analysis.ipynb, attendance.csv, groupby() with mean()

What happened:
The outdoor mean was larger.

Error or unexpected result:
Some attendance values were missing, so the number of rows was larger than the number used in the mean.

What we learned:
size() counts rows, while count() counts non-missing values.

Decision:
Show both group size and known attendance count. Do not replace missing attendance with zero.

Next step:
Compare medians and inspect the distribution for unusually large events.
```

## What counts as a useful failed attempt?

Record a failed attempt when it changes what you understand or what you decide.

Examples:

- the source does not contain the variable you need;
- an API returns no records for the requested parameters;
- dates are stored in an unexpected format;
- a graph reveals one extreme value;
- a model is inappropriate for the amount or type of data;
- a cleaning step accidentally removes too many rows;
- your first question cannot be answered with the available evidence.

You do **not** need to narrate every typo.

## Record reproducibility details while they are fresh

When relevant, include:

- source URL;
- date accessed;
- filename;
- notebook cell/section;
- API endpoint and parameters;
- cleaning decision;
- random seed;
- package or function that mattered.

## End every session with one concrete next step

Weak:

> Do more research.

Better:

> Load 20 rows from the second source and check whether it contains the event date and attendance columns.

The next step should be small enough that another teammate knows what to do.

## Beginner checkpoint

Before ending a work session, make sure the journal explains:

**what we tried → what happened → what we learned → what we decided → what comes next**

Next: [Handling Mistakes with the Research Tree](06_research_tree.md)
