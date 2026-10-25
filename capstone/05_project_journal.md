# Keep a project journal

[Capstone home](README.md)

Write a short entry **each time you work**, even when the code fails. A journal preserves sources, reasoning, and decisions while they are fresh. Later it becomes evidence for the final report: you can explain why the project changed instead of reconstructing a story from memory.

[Copy the reusable journal template](../templates/project_journal.md).

```text
Date:

Who worked today:

Goal for this session:

What we tried:

Code/data/source used:

What happened:

Error or unexpected result:

What we learned:

Decision made:

Next step:
```

## A fictional example

- **Goal:** compare the mean attendance of indoor and outdoor events.
- **What we tried:** loaded the teaching CSV and grouped by location type.
- **What happened:** one group had several missing attendance values.
- **Error or unexpected result:** the total number of rows differed from the number used in the mean.
- **What we learned:** `size()` counts rows, while `count()` counts known measurements.
- **Decision:** show both numbers and describe the missing values; do not replace them with zero.
- **Next step:** compare the medians and inspect whether one large event drives the difference.

Record the code filename/cell, source URL, access date, and any parameters needed to reproduce the result. A useful failed approach belongs in the [research tree](06_research_tree.md). You do not need to record every typo in the report.

At the end of a session, every teammate should be able to name the next small Python action. “Do more research” is too vague; “load 20 rows and check whether the date column exists” is actionable.
