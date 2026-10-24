# Getting Your First Python Result

[← Capstone Start Here](00_start_here.md)

Your first Python result should be **small, interpretable, and reproducible**.

Do not begin with your final model. Begin by proving that Python can read your data and answer one meaningful question.

## Step 1: load the data

For a CSV file:

```python
import pandas as pd

data = pd.read_csv("my_data.csv")
```

For an API, first make one small request and convert the returned records into a DataFrame.

## Step 2: inspect before changing anything

Run:

```python
print(data.shape)
print(data.columns)
print(data.dtypes)
print(data.isna().sum())
display(data.head())
```

Write down what one row represents.

## Step 3: choose one simple question

Examples:

- Which category occurs most often?
- What is the median value of this variable?
- Which group has the larger average?
- How does the value change over time?
- Which observations have the largest values?
- Are two numeric variables visibly related?

## Step 4: compute one result

Examples:

```python
# Count categories
data["category"].value_counts()
```

```python
# Mean by group
data.groupby("group")["value"].mean()
```

```python
# Largest observations
data.sort_values("value", ascending=False).head(10)
```

## Step 5: make one useful graph

Choose a graph based on the question, not because it looks interesting.

| Question | Good first graph |
|---|---|
| Compare categories | bar chart |
| Show a distribution | histogram |
| Compare two numeric variables | scatter plot |
| Show change over time | line plot |
| Compare a numeric variable across groups | boxplot or grouped summary |

Every graph should have a title and meaningful axis labels.

## Step 6: explain the result in words

Write 2–4 sentences answering:

- What did you compute?
- What pattern do you see?
- Does it answer the question?
- What should you investigate next?

A result is not complete until you can explain it.

## A first result is allowed to be boring

You might discover that:

- the groups are very similar;
- a variable has many missing values;
- the dataset does not contain what you expected;
- an apparent pattern disappears after cleaning;
- the original question needs to change.

Those are useful findings.

## What to bring to the next project update

Ideally, your team should be able to show:

1. the code that loads the data;
2. `head()` and `shape`;
3. a short explanation of what one row means;
4. one table, summary, or computed result;
5. one graph when appropriate;
6. one paragraph explaining what you learned;
7. the next question you plan to investigate.

That is enough to demonstrate real progress.
