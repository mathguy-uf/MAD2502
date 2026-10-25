# Finding and Evaluating Data

[← Question and Scope](01_question_and_scope.md) · [Next: First Python Result →](03_first_python_result.md)

A project question is only useful if you can obtain data that actually help answer it.

This step has **two separate jobs**:

1. decide whether the source is reliable enough for your purpose;
2. decide whether the actual fields/columns can answer your question.

A source can be trustworthy and still be the wrong dataset for your question.

## 1. Find a source you can document

Prefer sources where you can identify:

- the organization, researcher, or author;
- why the data were collected;
- documentation or a data dictionary;
- the time period and population covered;
- how values were measured or reported;
- known limitations;
- access rules or a license when relevant.

Government agencies, universities, scientific organizations, and well-documented public APIs are often easier to evaluate than an unexplained file reposted on a random website. That does **not** mean every official dataset is automatically suitable; read the documentation.

## Common source types

### CSV or Excel file

Usually the easiest source for a first project.

```python
import pandas as pd

data = pd.read_csv("my_file.csv")
data.head()
```

### API

An API lets Python request structured data from another service.

Typical flow:

```text
endpoint + parameters + optional key
                ↓
             request
                ↓
             response
                ↓
               JSON
                ↓
            DataFrame
```

Use the Applied Data eBird notebook for a beginner example.

### Webpage table

If a page contains a real HTML table, pandas may be able to read it with `pd.read_html()`.

When a CSV or documented API is available, prefer it because structured access is usually more reproducible than scraping a page layout.

### Database or scientific archive

These can be excellent sources. Start with the documentation and make one small working query before planning a large analysis.

## 2. Inspect the data before committing to it

As soon as you can load a candidate dataset, run:

```python
print(data.shape)
print(data.columns)
print(data.dtypes)
print(data.isna().sum())
display(data.head())
```

Then answer:

- What does one row represent?
- Which columns are numeric?
- Which are categories, text, or dates?
- Which columns have missing values?
- Which columns are directly relevant to the question?
- Are the units documented?
- Does the time period match the question?

## 3. Perform the data-fit check

Map every important idea in your question to a real field.

| Needed idea | Actual column/field | What to verify |
|---|---|---|
| Population/unit | ... | What does one row represent? |
| Main outcome | ... | Numeric/category? Units? Missing values? |
| Comparison/group | ... | Are labels documented and consistent? |
| Time | ... | Does coverage match the question? |
| Other needed variable | ... | Measured directly or only a proxy? |

If a required idea has **no real column/field**, do not invent it from a vague substitute. Revise the question or find another source.

Example: if you want to study posting time but the data contain only the date when a researcher collected the record, those are not the same thing.

## 4. Get one small access test

Before fully committing to the source, prove that Python can access it.

Examples:

- load the CSV and show five rows;
- make one API request;
- load one webpage table;
- query a small date range;
- read one local data file.

Do this before building the final analysis.

## Save source information immediately

Record in the project journal:

- dataset/source title;
- organization or author;
- URL;
- date accessed;
- license or usage notes when available;
- what one row represents;
- important request parameters;
- known limitations.

For a live API, also record things such as region, date range, endpoint, category/species code, and result limits.

## Data quality is not the same as data size

A million rows do not make a dataset useful if the variables are unclear.

For this course, a smaller documented dataset that clearly answers a focused question is often much better.

## Beginner checkpoint

Before moving on, your team should be able to say:

> We can access the source in Python, explain what one row means, and point to the actual fields needed for our question.

If you cannot say that yet, do **not** start modeling. Fix the source/question first.

Next: [Getting Your First Python Result](03_first_python_result.md)
