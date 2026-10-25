# Build the Presentation: One Clean Path Through the Tree

[← Final Report](08_final_report.md) · [Next: Reproducibility & Accessibility →](10_reproducibility_accessibility.md)

The presentation has a different job from the report.

The **report** records the larger [research tree](06_research_tree.md), including meaningful mistakes, failed approaches, and decisions. The **presentation** follows one clean path through that tree so the audience can understand the question, method, evidence, and conclusion without seeing every notebook cell or detour.

## Current expectation

Unless Canvas gives a different current instruction, plan for a **10–12 minute group presentation**.

That time belongs to the whole group. Rehearse the full presentation, including transitions between speakers, so the project finishes within the limit.

## Plan the story before making slides

A useful presentation path is:

**question → data → method → strongest evidence → conclusion → limitation**

| Part | What the audience needs to understand |
|---|---|
| Question | The specific problem or comparison |
| Data | Where the data came from and what one row/record represents |
| Method | The few operations needed to understand the result |
| Evidence | The clearest plots, tables, or numerical results |
| Conclusion | The supported answer to the question |
| Limitation | What the evidence cannot establish |

Choose the main result first, then build the presentation around the evidence needed to understand it.

## What to do with failed branches

You do **not** need to present every error, source, or abandoned method.

Mention a failed branch when it helps the audience understand an important choice. For example:

> “Our first dataset did not contain the outcome variable, so we switched to this source.”

or

> “We first considered regression, but the scatter plot did not support a useful linear relationship, so we used grouped summaries instead.”

That is enough when the details are already documented in the report.

Do not imply that a failed method proves your preferred conclusion. State what failed, what evidence showed the problem, and what decision followed.

## Use only figures that help tell the story

A presentation usually benefits from a small number of strong figures rather than many weak ones.

For each important figure:

- make the title or caption informative;
- label axes and include units;
- make text large enough to read from the back of a classroom;
- explain what the audience should notice;
- avoid displaying unnecessary decimal places or clutter;
- use labels, markers, or line styles in addition to color;
- keep contrast high enough to remain readable on a projector.

Do not paste screenshots of entire notebook cells when a clean figure or short table would communicate the result better.

## Cite sources on the presentation

Give visible credit for data and important background sources. A short citation on the relevant slide plus a references slide is usually clearer than making the audience guess where the information came from.

If a figure comes from your own analysis, make that clear. If it is adapted from another source, cite that source.

## Explain the method at the right level

The audience does not need every line of code. They do need enough information to understand what was done.

For example:

- “We grouped observations by region and compared the median value.”
- “We plotted the two numeric variables and then calculated their correlation.”
- “We simulated 10,000 trials under this probability model.”

If a short code excerpt is truly necessary, make it readable and explain why that code matters.

## Every teammate should understand the central analysis

Do not divide the project into “coder,” “writer,” and “presenter” roles where only one person understands the result.

Every teammate should be able to explain:

- the main question;
- what one row/record means;
- the central calculation or analysis;
- the strongest result;
- one important limitation.

## Rehearse with a timer

Practice the actual 10–12 minute group presentation, not just individual sections separately.

Check:

- Is the question stated early?
- Does the audience know where the data came from?
- Can every figure be read quickly?
- Are transitions between speakers smooth?
- Does the conclusion answer the original question?
- Is at least one limitation stated clearly?
- Does the group finish within the time limit?

Have a static backup of any live demonstration.

## Accessibility check

Before presenting:

- use large, readable fonts;
- use strong contrast;
- do not communicate categories by color alone;
- provide meaningful labels for figures;
- avoid dense screenshots and tiny tables;
- describe the main visual pattern aloud;
- check that exported slides preserve readable text and figure quality.

These choices help everyone follow the presentation, including audience members who cannot distinguish some colors or read small projected text.

## Practice

Explain the entire project in three sentences without slides:

1. What question did we ask?
2. What evidence did we use?
3. What did we learn, and what can we not conclude?

Then ask a classmate to tell you what they think the project was about. If their answer differs from yours, simplify the presentation path.

Next: [Reproducibility and Accessibility](10_reproducibility_accessibility.md)
