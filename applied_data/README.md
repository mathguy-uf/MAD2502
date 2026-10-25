# Applied Data — Introduction to Data Science

Every tutorial is standalone and designed for students who are new to Python and data science. Start at 00 if Python is new. The lessons use small examples, predictions, controlled changes, practice, and connections to larger projects.

**Understand → Predict → Run → Change → Use → Practice → Connect**

Recommended beginner path:

1. **Data Science Start Here** — notebooks, variables, lists, dictionaries, DataFrames, filtering, missing values, and simple summaries.
2. **eBird API** — API vocabulary, requests/responses, JSON, headers, parameters, API-key safety, and the difference between observation records and reported bird counts.
3. **pandas Basics** — DataFrames in more depth: rows/columns, `head()`, `shape`, `columns`, `dtypes`, filtering, missing values, summaries, grouping, and a simple graph.

No API key is needed for the sample lessons. The eBird notebook makes live requests only when you explicitly enable them and provide your own key. **Never commit an API key.**

The pandas notebook uses the repository CSV when available and the same raw GitHub CSV when running in a fresh Colab session.

| Tutorial | What you learn | Open |
|---|---|---|
| Data Science Start Here | What data science is; variables, lists, dictionaries, DataFrames, filtering, missing values, and basic summaries | [View on GitHub](https://github.com/mathguy-uf/MAD2502/blob/main/applied_data/00_data_science_start_here.ipynb) · [Run in Google Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/applied_data/00_data_science_start_here.ipynb) · [Launch Binder/JupyterLab](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/applied_data/00_data_science_start_here.ipynb) |
| eBird API | API, endpoint, request, response, JSON, lists/dictionaries, headers, parameters, API-key safety, and interpreting observation records versus `howMany` counts | [View on GitHub](https://github.com/mathguy-uf/MAD2502/blob/main/applied_data/01_ebird_api.ipynb) · [Run in Google Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/applied_data/01_ebird_api.ipynb) · [Launch Binder/JupyterLab](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/applied_data/01_ebird_api.ipynb) |
| pandas Basics | Rows, columns, `head()`, `shape`, `columns`, `dtypes`, filtering, missing values, summaries, grouping, and a simple graph | [View on GitHub](https://github.com/mathguy-uf/MAD2502/blob/main/applied_data/02_pandas_basics.ipynb) · [Run in Google Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/applied_data/02_pandas_basics.ipynb) · [Launch Binder/JupyterLab](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/applied_data/02_pandas_basics.ipynb) |
| Statistics Villains: Web Scraping with pandas | Basic HTML, `robots.txt`, `requests.get()`, status codes, `pd.read_html()`, selecting a table, cleaning values, filtering, sorting, and summaries | [View on GitHub](https://github.com/mathguy-uf/MAD2502/blob/main/applied_data/03_statistics_villains.ipynb) · [Run in Google Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/applied_data/03_statistics_villains.ipynb) · [Launch Binder/JupyterLab](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/applied_data/03_statistics_villains.ipynb) |
| Data Rescue Kit | Beginner troubleshooting by symptom: diagnose the problem, make a small fix, and verify the result | [View on GitHub](https://github.com/mathguy-uf/MAD2502/blob/main/applied_data/04_data_rescue_kit.ipynb) · [Run in Google Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/applied_data/04_data_rescue_kit.ipynb) · [Launch Binder/JupyterLab](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/applied_data/04_data_rescue_kit.ipynb) |

The web-scraping lesson uses a built-in sample by default, so it is reproducible without network access. Live scraping is optional. When a CSV download or API is available, prefer it over scraping HTML because those formats are designed for data access and are usually more stable.

The **Data Rescue Kit** is organized around recognizable beginner problems such as missing files, wrong working directories, numbers stored as text, missing values, dates stored as text, duplicate rows, strange column names, empty results, nested JSON, and wrong Python object types. Each repair follows **symptom → diagnose → fix → verify**.

Across the applied-data lessons, use **inspect → ask → select → compute → check → communicate**. State what one row represents before computing a result, check for missing values, and record important cleaning decisions in your project journal.

Read the [data notes](data/README.md) to distinguish teaching samples from live data.

[Course home](https://mathguy-uf.github.io/MAD2502/) · [Capstone](../capstone/README.md) · [Setup and troubleshooting](../START_HERE.md)
