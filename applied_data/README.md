# Applied Data

This section connects the Python ideas from lecture to data that come from files, APIs, and the web.

[← Return to the course website](../)

## Start here

Work through the first three tutorials in order if these tools are new to you. The **Data Rescue Kit** is a reference notebook: jump to the section that matches the problem you are having.

| Step | Tutorial | View | Run in Colab | Launch JupyterLab |
|---|---|---|---|---|
| **1** | eBird API | [View notebook](01_ebird_api.ipynb) | [Run in Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/applied_data/01_ebird_api.ipynb) | [Launch Binder](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/applied_data/01_ebird_api.ipynb) |
| **2** | pandas Basics | [View notebook](02_pandas_basics.ipynb) | [Run in Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/applied_data/02_pandas_basics.ipynb) | [Launch Binder](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/applied_data/02_pandas_basics.ipynb) |
| **3** | Statistics Villains | [View notebook](03_statistics_villains.ipynb) | [Run in Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/applied_data/03_statistics_villains.ipynb) | [Launch Binder](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/applied_data/03_statistics_villains.ipynb) |
| **4** | Data Rescue Kit | [View notebook](04_data_rescue_kit.ipynb) | [Run in Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/applied_data/04_data_rescue_kit.ipynb) | [Launch Binder](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/applied_data/04_data_rescue_kit.ipynb) |

## How every MAD 2502 tutorial works

The examples change, but the learning rhythm stays the same:

**Understand → Predict → Run → Change → Use → Practice → Connect**

1. **Understand** — learn one new idea and why it matters.
2. **Predict** — decide what you think the code or data operation will do before executing it.
3. **Run** — execute the example and compare the actual result with your prediction.
4. **Change** — modify one controlled piece and predict the new result.
5. **Use** — apply the idea to answer a slightly more realistic question.
6. **Practice** — complete short problems without simply copying the worked example.
7. **Connect** — identify where the idea appears elsewhere in the course or in your capstone.

The goal is not to copy working code. The goal is to understand it well enough to **predict it, modify it, and reuse it**.

The complete instructor pattern is documented in [`TEACHING_PATTERN.md`](../TEACHING_PATTERN.md).

## 1. eBird API

Learn how a program requests data from an API:

**API key → endpoint → HTTP request → JSON → DataFrame → question → result**

The notebook includes both live eBird requests and an offline practice response, so you can understand JSON and DataFrames even before your API key works.

Topics include:

- keeping API keys out of GitHub;
- endpoints, headers, and parameters;
- `requests.get()` and `raise_for_status()`;
- lists of dictionaries and JSON;
- turning JSON into a DataFrame;
- the difference between returned records and bird counts;
- missing `howMany` values;
- reusable API functions;
- questions to ask before using an API in a capstone project.

## 2. pandas Basics

Learn pandas independently of the web so you can focus on the DataFrame itself. A small fictional campus-events CSV is included in `data/campus_events.csv`.

Topics include:

- `pd.read_csv()`;
- `head()`, `shape`, `columns`, `info()`, and `dtypes`;
- selecting rows and columns;
- Boolean filtering with multiple conditions;
- sorting;
- missing values;
- creating new columns;
- `value_counts()`;
- grouped summaries with `groupby()` and `agg()`;
- means, medians, counts, and sums;
- a labeled Matplotlib graph;
- exporting a cleaned summary CSV;
- six practice questions.

The data-analysis workflow inside the larger teaching pattern is:

**inspect → ask → select → compute → check → communicate**

## 3. Statistics Villains

Apply pandas to an HTML table from the course Statistics Villains page.

**website → HTML → table → DataFrame → cleaning → questions**

The notebook walks through:

- checking `robots.txt`;
- requesting the page with `requests`;
- looking at raw HTML;
- understanding that `pd.read_html()` returns a list of tables;
- inspecting a table before cleaning it;
- cleaning column names;
- converting text-formatted money to numeric data;
- descriptive summaries and sorting;
- saving a cleaned CSV;
- deciding when an API or downloadable file is preferable to scraping.

## 4. Data Rescue Kit

This is the notebook to open when your own project data start behaving strangely.

It contains worked examples for:

- Python cannot find my file;
- numbers are stored as strings;
- dollar signs and commas break numeric conversion;
- missing values;
- bad column names;
- duplicate rows;
- dates are not recognized as dates;
- combining several tables;
- nested JSON;
- unexpectedly empty DataFrames;
- checking object types and column types;
- a repeatable debugging routine.

Because this notebook is a reference rather than a linear lecture, each repair uses a smaller version of the same pattern:

**Understand the problem → Predict the cause → Run a diagnosis → Change/fix it → Verify the result**

## A capstone habit

When you use a new data source, write down four things in your project journal:

1. **Where did the data come from?** Include the URL, API, dataset, or citation.
2. **What does one row or record represent?**
3. **What cleaning or assumptions did you make?**
4. **What question can this data actually answer?**

Those notes make the final report much easier to write and help you avoid overstating what the data mean.

[← Return to the course website](../)
