# Project Journal Template

[← Capstone Start Here](00_start_here.md)

Keep this journal while your team works. The goal is not formal writing. The goal is to preserve the actual project process so you do not have to reconstruct it at the end.

You can keep one Markdown file, shared document, or notebook section for the whole team.

## Entry template

Copy this block each time your team works:

```text
Date:
Who worked today:

Goal for today:

What we tried:

What worked:

What failed or confused us:

What we changed:

New source/data/code discovered:

One result worth keeping:

Questions we still have:

Next concrete step:
```

## Example beginner entry

```text
Date: October 24
Who worked today: Alex, Sam, Jordan

Goal for today:
Load the CSV and see whether it contains the columns we expected.

What we tried:
Used pandas.read_csv() and displayed the first five rows.

What worked:
The file loaded. We have 12,842 rows and 14 columns.

What failed or confused us:
The column called "rating" came in as text instead of numbers.

What we changed:
Removed percent signs and used pd.to_numeric(..., errors="coerce").

New source/data/code discovered:
The dataset documentation says missing ratings are stored as "N/A".

One result worth keeping:
Median rating is 7.4 after cleaning.

Questions we still have:
Should rows with missing ratings be removed for every analysis?

Next concrete step:
Compare ratings across the three main categories and make one graph.
```

## Why failed attempts belong in the journal

A failed approach can explain:

- why you changed datasets;
- why you changed the research question;
- why one model was abandoned;
- why you changed how a variable was cleaned;
- why an API or website was not usable.

That history belongs in the final report when it materially affected the project.

## Record code decisions too

You do not need to paste every line of code, but record important choices such as:

- why a filter was used;
- why missing values were dropped or filled;
- why a date range changed;
- why a variable was transformed;
- why a model or metric was selected.

## Weekly project check

At least once per week, your team should be able to answer:

1. What is our current question?
2. What data are we using?
3. What does one row represent?
4. What is our best result so far?
5. What is the biggest unresolved problem?
6. What is the next thing we will do in Python?

If you cannot answer #6, the project may be stuck at the planning stage.
