# Applied Data

This section connects the Python ideas from lecture to data that come from files, APIs, and the web.

[← Return to the course website](../)

## Learning path

### 1. eBird API

Learn how a program requests data from an API:

**API key → endpoint → HTTP request → JSON → DataFrame → analysis**

Topics include API keys, headers, parameters, species codes, region codes, JSON responses, missing counts, and basic summaries.

### 2. pandas Basics

Learn pandas independently of the web so you can focus on the DataFrame itself.

Topics include:

- `pd.read_csv()`;
- `head()`, `shape`, `columns`, and `dtypes`;
- selecting rows and columns;
- filtering and sorting;
- missing values;
- creating new columns;
- `value_counts()`;
- grouped summaries with `groupby()`;
- means, medians, counts, and sums;
- exporting a cleaned CSV.

### 3. Statistics Villains

Apply pandas to an HTML table from the course Statistics Villains page.

**website → HTML → table → DataFrame → cleaning → questions**

This tutorial introduces responsible web scraping, `robots.txt`, HTML tables, `pd.read_html()`, cleaning text-formatted numbers, and asking useful questions of the resulting data.

### 4. Data Rescue Kit

A reference notebook for the problems that appear once you start working with your own data.

Planned topics include:

- Python cannot find my file;
- numbers are stored as strings;
- dollar signs and commas are breaking numeric conversion;
- missing values;
- dates are not recognized as dates;
- duplicate rows;
- bad column names;
- combining multiple CSV files;
- nested JSON;
- empty DataFrames;
- checking types;
- quick diagnostic plots.

The goal is not to memorize every pandas command. The goal is to learn how to diagnose what kind of problem you have and find the appropriate tool.

[← Return to the course website](../)
