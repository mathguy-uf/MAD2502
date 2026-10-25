# Analysis Menu for Beginner Projects

[← Capstone Start Here](00_start_here.md)

You do **not** need to use every technique on this page. Choose the simplest method that answers your question.

## Start with summaries

Before modeling anything, calculate basic summaries.

Useful examples:

```python
# How many rows?
len(data)
```

```python
# Typical values
data["value"].mean()
data["value"].median()
```

```python
# Categories
data["category"].value_counts()
```

```python
# Compare groups
data.groupby("group")["value"].mean()
```

A strong project can include several careful descriptive analyses without using advanced machine learning.

## Common question types

### 1. What is typical?

Use:

- mean;
- median;
- minimum and maximum;
- quartiles;
- histogram.

### 2. Which categories are most common?

Use:

- `value_counts()`;
- counts or percentages;
- bar chart.

### 3. How do two groups compare?

Use:

- group counts;
- group means or medians;
- side-by-side summaries;
- boxplots or bar charts when appropriate.

Be careful not to claim that a difference proves one group **caused** the other result.

### 4. How does something change over time?

Use:

- convert the date column with `pd.to_datetime()`;
- sort by date;
- group by day, month, season, or year;
- line plot.

### 5. Are two numeric variables related?

Use:

- scatter plot;
- correlation as a summary;
- simple linear regression if appropriate.

Remember: correlation does not prove causation.

### 6. Can we predict a numeric value?

A simple regression model may be reasonable if:

- the outcome is numeric;
- you have enough observations;
- the predictors are meaningful;
- your team can explain what the model is doing.

Start with a baseline and a small number of predictors.

### 7. Can we predict a category?

A simple classification model may be reasonable if your outcome is categorical.

For an introductory project, begin with an interpretable method such as logistic regression before reaching for a complicated model.

## Do not choose a model because it sounds advanced

Bad reason:

> We want to use XGBoost because it is powerful.

Better reason:

> Our outcome is categorical, and after establishing a simple baseline we want to compare whether a more flexible model improves prediction.

The method should serve the question.

## Train/test language for beginners

If you build a predictive model, separate data used to **fit** the model from data used to **evaluate** it.

The basic idea is:

```text
available data
     ↓
train set → fit model
     ↓
test set  → evaluate on unseen observations
```

Do not evaluate a model only on the same data used to fit it.

## Good beginner metrics

Depending on the problem:

- regression: MAE, RMSE, or $R^2$;
- classification: accuracy, precision, recall, confusion matrix;
- ranking/survival/specialized projects: use a metric appropriate to that domain and explain it in plain language.

You do not need many metrics. Choose a few that you understand.

## Visualization checklist

Before keeping a graph, ask:

- What question does this graph answer?
- Are the axes labeled?
- Are units shown when needed?
- Is the title informative?
- Can someone understand the figure without reading the code?
- Am I relying only on color to communicate categories?

## A reasonable project progression

```text
1. inspect data
2. clean data
3. descriptive summaries
4. visualization
5. comparison or model if useful
6. evaluate result
7. interpret limitations
```

Skipping directly to step 5 usually makes the project harder, not better.

## When to stop adding methods

Your project probably has enough methods when:

- the main question has been answered;
- additional models are not changing the story;
- you can explain every major step;
- you have enough material for the report and 10–12 minute presentation.

Depth is better than a long list of disconnected techniques.

