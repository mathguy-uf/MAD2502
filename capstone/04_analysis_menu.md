# Analysis Menu for Beginner Projects

[← First Python Result](03_first_python_result.md) · [Next: Project Journal →](05_project_journal.md)

You do **not** need to use every technique on this page.

Choose the **simplest analysis that answers your question and that your team can explain**.

Advanced machine learning is not required for a strong project.

## Start with descriptive work

Before fitting a model, understand the data.

Useful first commands include:

```python
len(data)
data["value"].mean()
data["value"].median()
data["category"].value_counts()
data.groupby("group")["value"].mean()
```

A strong project can be built from careful summaries and visualizations.

## Match the question to the analysis

| If your question asks... | Reasonable beginner analysis |
|---|---|
| How many? | counts |
| What fraction/percent? | percentages with a clear denominator |
| What is typical? | mean and median |
| How do groups differ? | grouped summaries and comparisons |
| Which are largest/smallest? | rankings |
| What values are common? | distributions, histogram |
| Are two numeric variables related? | scatter plot; correlation with caveats |
| How does something change over time? | grouped time summaries and line plot |
| Can a straight-line relationship summarize the pattern? | simple regression when justified |
| What happens under a stated probability model? | simulation |

## Counts and percentages

Counts are often the cleanest first result.

```python
counts = data["category"].value_counts(dropna=False)
display(counts)
```

For percentages, always state the denominator.

```python
if len(data) > 0:
    percentages = 100 * counts / len(data)
    display(percentages)
```

Ask whether missing categories should be included in that denominator.

## Mean and median

Use both when large or unusual values may affect the mean.

```python
print("mean:", data["value"].mean())
print("median:", data["value"].median())
```

Neither statistic is automatically “better.” Explain why the chosen summary fits the data.

## Grouped summaries and comparisons

```python
summary = data.groupby("group")["value"].agg(["count", "mean", "median"])

display(summary)
```

Always look at group sizes. A difference based on two observations is different evidence from a difference based on two hundred.

## Rankings

```python
top_10 = data.sort_values("value", ascending=False).head(10)
display(top_10)
```

A ranking describes the records in your dataset. It does not automatically establish a universal “best” or “worst.”

## Distributions

A histogram helps show shape, spread, and unusual values.

```python
ax = data["value"].plot(kind="hist", bins=10)
ax.set(
    xlabel="Value",
    ylabel="Number of observations",
    title="Distribution of values",
)
```

## Scatter plots and correlation

Use a scatter plot before reducing a relationship to one number.

```python
ax = data.plot(
    x="x",
    y="y",
    kind="scatter",
)
```

Correlation summarizes **linear association**. It does not prove that one variable causes the other. A third variable, time trend, sampling process, or unusual observation may explain part of the pattern.

## Time trends

Convert and inspect dates before grouping them.

```python
data["date"] = pd.to_datetime(data["date"], errors="coerce")
```

Then decide whether day, month, season, or year is the meaningful scale.

## Simple regression

Simple regression can be appropriate when:

- the response is numeric;
- a roughly linear relationship makes sense;
- you have enough observations;
- you have examined the scatter plot;
- your team can explain the fitted line and residuals;
- the model helps answer the question.

Do not fit regression only because it sounds more advanced.

## Simulation

Simulation is a valid capstone direction when the question is about a probability model or process.

Clearly state:

- the assumptions;
- what is randomized;
- the number of repetitions;
- the random seed when used;
- which conclusions apply to the model rather than the real world.

More simulations do not repair unrealistic assumptions.

## Visualization checklist

Before keeping a graph, ask:

- What question does this graph answer?
- Are axes labeled?
- Are units shown?
- Is the title informative?
- Can someone understand the figure without reading the code?
- Am I using something besides color alone to distinguish important groups?

## When should you stop adding methods?

You probably have enough when:

- the main question has been answered;
- another method would not change the story;
- you can explain every major step;
- your evidence fits the Canvas report/presentation requirements.

Depth is better than a long list of disconnected techniques.

## Beginner checkpoint

Write one sentence:

> We chose **[method]** because our question asks **[what the method answers]**.

If you cannot finish that sentence clearly, choose a simpler method.

Next: [Project Journal](05_project_journal.md)
