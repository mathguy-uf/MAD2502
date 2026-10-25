# Finding and Evaluating Data

[← Capstone Start Here](00_start_here.md)

A project question is only useful if you can obtain data that actually help answer it.

## Common source types

### 1. CSV or Excel file

This is usually the easiest source for a first project.

Typical workflow:

```python
import pandas as pd

data = pd.read_csv("my_file.csv")
data.head()
```

### 2. API

An API lets Python request structured data from another service.

Typical workflow:

```text
URL + parameters + optional key
          ↓
       request
          ↓
        JSON
          ↓
      DataFrame
```

Use the eBird tutorial in Applied Data for a full beginner example.

### 3. Webpage table

If a website contains a real HTML table, pandas may be able to read it directly with `pd.read_html()`.

Use the Statistics Villains tutorial for an example.

### 4. Database or specialized scientific archive

These can be excellent sources, but begin by finding documentation and a very small working query before designing a large analysis.

## Evaluate a source before committing to it

Ask:

- Who created the data?
- Why were the data collected?
- Is there documentation?
- What does one row or record represent?
- What time period is covered?
- What population is included?
- Are important variables missing?
- Are there usage limits or access rules?
- Can your team reproduce the download later?

## Do not confuse “large” with “good”

A dataset with millions of rows is not automatically better.

For this course, a smaller dataset with clear variables and a good question is often much more useful than a giant dataset your team does not understand.

## First inspection checklist

As soon as you can load the data, run something like:

```python
print(data.shape)
print(data.columns)
print(data.dtypes)
print(data.isna().sum())
display(data.head())
```

Then answer in plain English:

- What does one row represent?
- Which columns are numbers?
- Which columns are categories or text?
- Which columns contain missing values?
- Which columns seem directly relevant to our question?

## Save the source information immediately

In your project journal, record:

- dataset title;
- organization or author;
- URL;
- date accessed;
- license or usage notes when available;
- short description of what the dataset contains.

Do not rely on remembering this at the end of the semester.

## Beginner warning: downloaded data can change

If an API or website changes over time, record enough information that someone can understand what you requested.

For an API, save the important parameters such as:

- region;
- date range;
- species or category code;
- number of results requested;
- endpoint used.

## Practice

For one candidate source, write a short source evaluation with:

1. where it comes from;
2. what one row means;
3. approximate number of rows and columns;
4. the columns you expect to use;
5. one limitation you already see;
6. one Python command or request that proves you can access it.


## Does this source actually support the question?

Before committing to a source, map each part of the question to a real column. Record the variable name, units, missingness, time coverage, and what is measured versus merely approximated. If the question asks about posting time but the file contains only a collection date, revise the question or find a better source. A relevant-looking title is not enough.

Keep sensitive records in approved private systems. Use the public course repository only for fictional or appropriately public teaching data.


## Try a data-fit check now

For the practice question “How do indoor and outdoor event attendance values compare?”, check the actual columns before choosing a method:

| Needed idea | Column to find | Check | If absent |
|---|---|---|---|
| One event | Event identifier or documented row definition | Can the same event appear twice? | Resolve the row meaning first. |
| Attendance | A numeric attendee count | Is it measured, estimated, or missing? | Revise the outcome or find another source. |
| Indoor/outdoor group | Location type | Are labels consistent? | Do not infer it from a vague venue name. |
| Comparable period | Event date | Do both groups cover comparable dates? | Narrow the claim or document the mismatch. |

Make the same table for your question. Use the [data dictionary template](../templates/data_dictionary.md) to keep your findings. A filename or dataset title alone does not show that the needed variables are present.
