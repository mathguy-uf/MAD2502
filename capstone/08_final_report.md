# Write the Final Report from the Research Tree

[← Responsible Interpretation](07_interpreting_results.md) · [Next: Presentation →](09_presentation.md)

The final report documents the **larger research tree**: the question you asked, the data you investigated, the analyses you tried, the decisions you made, the evidence you kept, and the limitations you discovered.

The goal is not to pretend the project followed a perfect straight line. The goal is to explain the important path honestly and clearly enough that another reader can understand how the project developed.

## Current expectation

Unless Canvas gives a different current instruction, submit **one coherent group report** of roughly **5 pages per student**.

For example, a three-person group should think in terms of roughly fifteen pages total, not three disconnected five-page mini-reports. The exact length may vary with figures, tables, references, and the nature of the project.

The report should read as one unified project with consistent terminology, notation, figure style, and conclusions.

## A useful structure

1. **Question and motivation** — What did you investigate, and why is the question worth asking?
2. **Background and cited sources** — Explain unfamiliar ideas and cite the sources you actually checked.
3. **Data** — Give the source, access date, population/time period, row meaning, important variables, units, and missingness.
4. **Research tree and methods** — Explain how the project changed: sources tried, important mistakes, failed approaches, cleaning decisions, revised questions, and why the final analysis was chosen.
5. **Results** — Present selected tables and figures with captions and plain-language interpretation.
6. **Limitations** — Explain what the evidence cannot establish, including limitations caused by data quality, sampling, missingness, modeling assumptions, or abandoned approaches.
7. **Conclusion and next steps** — Answer the question at the scale supported by the evidence.
8. **Reproducibility notes and references** — Explain how to obtain the data, run the code, and reproduce the main results; include complete citations.

Do not pad the report with unexplained code, repeated graphs, or a chronological list of every small debugging mistake.

## Meaningful failures belong in the report

A failed experiment, dataset, computation, or analysis may strengthen the report when it affected an important decision.

Use this structure:

**What we tried → What happened → Evidence → What we learned → What changed**

Example:

> Our initial API source did not contain attendance, which the original question required. We verified this by inspecting the returned fields and the source documentation. We therefore switched to a documented CSV that included attendance and event location. Because the new source covered a different time period, we narrowed the claim accordingly.

A strong report does not claim that a failed approach proves the opposite result. It explains what the failure reveals and how the team responded.

## Figures should communicate evidence

Every important figure should have:

- a descriptive title or caption;
- labeled axes;
- units when applicable;
- readable text;
- a legend or direct labels when needed;
- enough surrounding explanation that the reader knows why the figure is present.

Do not rely only on color to distinguish groups. Use labels, markers, line styles, patterns, or other cues when appropriate.

A figure is not complete until the report explains its main takeaway and its limitations.

## Cite sources where they are used

Cite:

- datasets and APIs;
- documentation used to interpret variables or endpoints;
- background sources;
- outside methods or code that materially influenced the project;
- any source required by the current course policy.

Keep enough source information that another reader can locate the material later.

## Reproducibility belongs in the report

Include concise instructions that tell another person:

- which files matter;
- how to obtain the data;
- which packages are required;
- what order to run notebooks/scripts;
- which outputs should be produced;
- which live data requests may change over time.

If the project uses an API key, explain **where the user should place their own key**, but never include the actual key in the report, notebook, code submission, screenshots, or repository.

See [Reproducibility and Accessibility](10_reproducibility_accessibility.md) for the final checklist.

## Accessibility and responsible assistance

Use real heading styles, readable tables with header rows, meaningful link text, and figure captions that summarize the finding. Include text alternatives for essential visuals where the submission format supports them. Check exported documents for readable fonts, usable contrast, correct reading order, and legible mathematical notation.

Check the current course policy before using AI assistance. Verify citations, code, calculations, and claims yourself, and disclose assistance as required. Do not upload private student records or restricted data to an AI tool.

## Final report check

Before submitting, a teammate should be able to answer yes to all of these:

- Does the report read like one coherent group project?
- Is the main question clear?
- Are the data and sources cited?
- Does the report include meaningful branches of the research tree?
- Are failed approaches explained with evidence rather than excuses?
- Are conclusions limited to what the evidence supports?
- Are figures readable and accessible?
- Could another person reproduce the main results from the instructions?
- Have all API keys, passwords, and secrets been removed?

Next: [Build the Presentation](09_presentation.md)
