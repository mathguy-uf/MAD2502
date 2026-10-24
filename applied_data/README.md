# Applied Data — Introduction to Data Science

This section is the **data-science on-ramp** for MAD 2502. It assumes this may be your first experience with Python, Jupyter, pandas, APIs, and web data.

Every notebook is designed to be **standalone**. You can open one without completing all the earlier notebooks first, although the order below is recommended for beginners.

[← Return to the course website](../)

## Recommended learning path

| Step | Tutorial | Best for |
|---|---|---|
| **0** | [Data Science Start Here](00_data_science_start_here.ipynb) | First exposure to Jupyter, Python types, lists, dictionaries, DataFrames, rows/columns, and debugging. |
| **1** | [pandas Basics](02_pandas_basics.ipynb) | Learning how to inspect, filter, summarize, graph, and save tabular data. |
| **2** | [eBird API](01_ebird_api.ipynb) | Learning how Python requests data from an API and turns JSON into a DataFrame. |
| **3** | [Statistics Villains](03_statistics_villains.ipynb) | Learning how an HTML table becomes a DataFrame through web scraping. |
| **4** | [Data Rescue Kit](04_data_rescue_kit.ipynb) | Fixing common file, type, missing-value, date, duplicate, JSON, and DataFrame problems. |

## Three ways to use each notebook

### View on GitHub
Read the notebook and saved code without running it.

### Run in Colab
Usually the easiest option for one notebook. The tutorials are written so they do not require a local clone whenever possible.

### Launch Binder/JupyterLab
Open the repository in a temporary browser-based JupyterLab environment.

For repeated local work, clone the repository and use `git pull` to get updates.

---

# 0. Data Science Start Here

Start here if Python is new.

This notebook explains:

- Markdown cells vs. code cells;
- Shift + Enter;
- the Jupyter kernel;
- variables;
- `int`, `float`, `str`, and `bool`;
- lists;
- dictionaries;
- why APIs often return lists of dictionaries;
- DataFrames;
- rows and columns;
- `head()`, `shape`, `columns`, and `dtypes`;
- a first grouped summary;
- how to read an error without panicking.

The main idea is that you do **not** need to learn all of Python before doing data science. You learn Python by using it to answer questions.

# 1. pandas Basics

This is the first full tabular-data tutorial.

It includes a small fictional campus-events dataset and covers:

- loading CSV data locally or directly from GitHub;
- reading data in Colab without requiring the full repository;
- inspecting rows, columns, types, and missing values;
- selecting columns;
- Boolean filtering;
- sorting;
- `value_counts()`;
- grouped summaries;
- mean and median;
- missing-value decisions;
- one labeled Matplotlib graph;
- exporting a summary CSV.

The beginner workflow is:

**inspect → ask → select → compute → check → communicate**

# 2. eBird API

Learn the path:

**API key → request → JSON → DataFrame → question → result**

The notebook includes a small offline response so students can understand the objects before a live API key works.

Important beginner ideas include:

- what an endpoint is;
- headers vs. parameters;
- species and region codes;
- JSON as Python lists/dictionaries;
- one API record vs. one bird;
- missing `howMany` values;
- why API data are not automatically a census or population estimate;
- writing a reusable request function.

# 3. Statistics Villains

This tutorial adds one new challenge: the table begins on a webpage.

The workflow is:

**website → HTML → table → DataFrame → cleaning → analysis**

It introduces:

- `robots.txt`;
- `requests.get()`;
- raw HTML;
- `pd.read_html()`;
- why a webpage can contain several tables;
- cleaning column names;
- converting text-formatted numeric values;
- summaries and sorting;
- deciding when an API or downloadable file is preferable to scraping.

# 4. Data Rescue Kit

Use this notebook when your own project data behave strangely.

It contains worked repairs for:

- Python cannot find my file;
- numbers are stored as text;
- `$` and commas break numeric conversion;
- missing values;
- bad column names;
- duplicate rows;
- dates are not recognized as dates;
- combining tables;
- nested JSON;
- empty DataFrames;
- object and column types.

The goal is diagnosis, not memorization.

---

# The MAD 2502 data-science workflow

Most projects in the course eventually use some version of this cycle:

```text
question
   ↓
get data
   ↓
inspect
   ↓
clean
   ↓
analyze
   ↓
visualize
   ↓
interpret
   ↓
revise question
```

A beginner should be able to explain each arrow in plain English before adding more complicated methods.

# Connection to the capstone

When using a new data source, write down:

1. Where did the data come from?
2. What does one row or record represent?
3. Which columns matter for the question?
4. What values are missing?
5. What cleaning decisions did you make?
6. What can the data actually support you saying?
7. What is the next concrete Python result you want?

See the [Capstone Start Here guide](../capstone/00_start_here.md) when you are ready to apply the workflow to your own project.

[← Return to the course website](../)
