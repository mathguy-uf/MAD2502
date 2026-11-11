# Last-Minute Capstone Tips

[Capstone home](README.md) · [Final submission checklist](12_final_checklist.md)

Use the tips that fit your project. These are practical tools, not a requirement to add machine learning or a statistical test to every capstone.

## 1. Check the data before trusting a result

Inspect units, missing values, duplicates, and impossible values. Explain what one row represents and record how many rows cleaning removes. Missing does not automatically mean zero.

With your data loaded into a pandas DataFrame named `df`:

```python
df.info()
print(df.describe())
print(df.isna().sum())
print(df.head())
print(df.tail())
print(df.shape)
```

## 2. For prediction, use 80/20 as a starting point

Reserve about **20% for a final test** and use the other **80% for training and model selection**. This is a starting point, not a universal rule. Descriptive projects that summarize a dataset do not automatically need a train/test split.

Define `X` as your predictor columns and `y` as your target. Keep the target out of `X`. For independent observations that can reasonably be shuffled:

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42
)
```

Split before fitting preprocessing steps. Learn scaling, imputation, and feature selection from training data only; apply the learned transformations to test data. Tune using validation data or cross-validation within the 80%, leaving the final test set untouched until the end.

Choose a split that matches the observations:

- **Classification:** consider `stratify=y` when class counts and split sizes allow it.
- **Forecasting:** train on earlier observations and test on later observations.
- **Repeated people/subjects:** keep all observations from the same subject in one split.

See [train_test_split](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html) and [avoiding data leakage](https://scikit-learn.org/stable/common_pitfalls.html).

## 3. Compare with a simple baseline

| Task | Simple comparison | Useful evidence |
|---|---|---|
| Regression/prediction | Predict the training-set mean for every test observation. | Test MAE or RMSE and a residual plot. |
| Classification | Predict the most common training-set class. | A confusion matrix and per-class performance; accuracy alone can hide a weak rare-class result. |
| Numerical computation | Compare with an analytic answer or trusted implementation. | Error and behavior as step size or tolerance changes. |
| Simulation | Compare with a known small case or theoretical expectation. | Variation over seeds or trial counts. |

Use the same evaluation cases for competing methods. Very high training performance with much lower test performance suggests overfitting. A complicated method should earn its complexity with evidence.

## 4. Compare several columns automatically

**Seaborn's `pairplot`** makes a grid of pairwise plots. A **correlation heatmap** summarizes linear relationships. Choose three to six meaningful numeric columns and exclude identifier columns.

If needed, install the optional packages in your Python environment:

```bash
python -m pip install seaborn scikit-learn
```

For descriptive exploration, use `df` below. For prediction, use **training rows only**, such as `X_train`, so these plots do not influence model choices using test data. Replace `x1`, `x2`, and `x3` with actual numeric column names.

```python
import matplotlib.pyplot as plt
import seaborn as sns

num = df[["x1", "x2", "x3"]]
sns.pairplot(num, corner=True, diag_kind="hist")
plt.show()

plt.figure()
sns.heatmap(
    num.corr(), annot=True, vmin=-1, vmax=1,
    center=0, cmap="vlag"
)
plt.show()
```

Without Seaborn, use pandas: `pd.plotting.scatter_matrix(num)` after `import pandas as pd`.

These are exploratory graphs, **not significance tests**. Pearson correlation can miss curved relationships, and correlation does not establish causation. Inspect outliers and missing values; pandas correlations use the available paired observations, so different pairs may use different rows. Avoid choosing a conclusion merely because one of many comparisons looks impressive.

Official references: [pairplot](https://seaborn.pydata.org/generated/seaborn.pairplot.html), [heatmap](https://seaborn.pydata.org/generated/seaborn.heatmap.html), [DataFrame.corr](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.corr.html).

## 5. Test something you can verify

Check a small known-answer case and an edge case such as empty input. Decide what the program should do before running it, then record the actual result. Compare numerical output with an independent method when possible.

For floating-point arrays, check shape and use tolerances suited to the scale and accuracy of your problem:

```python
import numpy as np

# Replace these with your computed and independently verified results.
actual = np.array([1.0, 2.0, 3.0])
expected = np.array([1.0, 2.0, 3.0])
assert actual.shape == expected.shape
assert np.allclose(actual, expected, rtol=1e-7, atol=1e-9)
```

The tolerances are examples, not universal settings. Shape checking matters because NumPy can broadcast differently shaped arrays. See [numpy.allclose](https://numpy.org/doc/stable/reference/generated/numpy.allclose.html).

## 6. Make the result reproducible

Restart the kernel and **Run All**. Record the source URL, download date, package versions, random seed, and any cleaning decisions. Use relative paths and include permitted data or clear acquisition instructions. Have a teammate follow the README from a fresh copy.

Your final explanation should connect **one working result, one check supporting it, and one limitation**. Put meaningful failed attempts in the paper. Label plot axes and units, and explain what each figure supports.
