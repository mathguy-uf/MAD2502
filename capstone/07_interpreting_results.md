# Interpret results responsibly

[Capstone home](README.md)

A computed number is evidence only after you explain what it measures and which observations support it.

## Write a result with its scope

Use: “Among **[records included]**, we found **[summary or comparison]**, using **[method]**. This suggests **[limited interpretation]**. It does not establish **[claim the data cannot support]**.”

Example with invented data: “Among the ten events with recorded attendance, outdoor events had a higher mean attendance. This describes this sample; it does not show that moving an event outdoors causes more people to attend.”

## Check the result before telling the story

1. Check units, dates, row counts, missing values, and duplicate identities.
2. Compare group sizes. A mean based on two observations is different evidence from a mean based on two hundred.
3. Show the distribution or inspect large values. One unusual point can change a mean or correlation.
4. Check a reasonable alternative: median instead of mean, a justified time window, or a documented missing-data policy.
5. State whom the data leave out. A large convenience sample can still be biased.

A correlation measures association, not causation. Two variables may move together because of a third variable or a shared time trend. An API count may reflect reporting effort and response limits. A missing field is not automatically zero.

## If you build a predictive model

A **baseline** is a simple comparison, such as predicting the training-set mean or the most common training category. **Training data** fit the model; **test data** evaluate it on observations withheld from fitting and method choices. Split before learning imputation or scaling. Keep repeated records from the same person/entity together; respect time order for future prediction. Otherwise information can leak into the evaluation.

Use a model only when your team can explain its inputs, output, fit, evaluation, and limitations. A clear descriptive analysis is a complete and worthwhile approach.

## Practice

Take one project graph. Write one supported claim, one tempting unsupported claim, and one additional check. Put all three in the journal.
