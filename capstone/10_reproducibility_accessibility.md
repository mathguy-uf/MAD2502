# Make the Project Reproducible and Accessible

[← Presentation](09_presentation.md) · [Capstone home](README.md)

**Reproducible** means another person can follow your documented steps and obtain the main result from the same inputs.

A notebook that works only because of forgotten variables, hidden files, or an API key stored in the code is unfinished.

## Reproducibility checklist

Before submitting the project:

- Record source URLs, access dates, licenses, row meaning, units, and important request parameters.
- Explain how another person can obtain the data. If redistribution is allowed, include an appropriate snapshot; otherwise provide clear download/request instructions.
- Use relative paths when possible so the project does not depend on one student's computer.
- Provide a short README or equivalent run guide that states the file order and what each important file does.
- List the packages needed to run the project. Record versions when they materially affect reproducibility.
- Keep raw inputs unchanged when practical; save cleaned data and generated figures separately.
- Set and record random seeds for simulations or randomized methods when reproducibility requires them.
- Restart the kernel and run all normal notebook cells in order from a fresh session.
- Distinguish results produced from a live API/website from results produced from a saved data snapshot.
- Ask a teammate to follow the instructions from a fresh copy and fix anything that depends on unstated knowledge.

## Never submit API keys or secrets

**Do not include API keys, passwords, tokens, or other secrets in any submitted notebook, script, report, screenshot, data file, or repository.**

If your project needs a key, document the setup instead. For example:

> Create a local file named `my_api_info.py`, place your own API key there using the variable name described below, and do not commit that file.

An ignored file is still plain text on your computer, so protect it appropriately.

Before submission, search the project for your actual key or token and inspect notebook outputs as well as code cells. A secret can accidentally appear in printed output even when the code itself is clean.

If a key was accidentally published, removing it from the latest file is not enough protection; revoke/rotate the exposed credential according to the provider's instructions.

## Reproducible data instructions

A reader should not have to guess how the data appeared on your computer.

Document:

- dataset/API/webpage name;
- source URL or endpoint;
- access date;
- important query parameters;
- expected filename or folder;
- any cleaning step required before analysis;
- whether the source may change over time;
- what a reader should do if the live source is unavailable.

If your project uses restricted data, do not publish it merely for reproducibility. Explain the legitimate access procedure instead.

## Make figures understandable and accessible

For every important figure in the report or presentation:

- use a descriptive title or caption;
- label axes and units;
- make text large enough to read;
- use sufficient contrast;
- avoid relying only on color to distinguish groups;
- use markers, line styles, direct labels, or patterns when helpful;
- explain the main finding in nearby text or aloud during the presentation;
- provide text alternatives for essential visuals where the publishing format supports them.

A reader should not need to inspect your code to understand what a figure shows.

## Make reports and slides accessible

Use meaningful headings and a logical reading order. Tables should have clear header rows. Links should use descriptive text rather than vague labels such as “click here.” Avoid tiny screenshots of code or tables.

Check exported files, not only the editable originals. Confirm that:

- fonts remain readable;
- mathematical notation renders correctly;
- figures are not blurry;
- captions remain near their figures;
- contrast remains usable;
- slide content is not clipped;
- essential information is not conveyed by color alone.

These practices improve accessibility and usability; they are not a formal accessibility certification.

## Final handoff test

Give a teammate the project instructions and ask them to act like a new user.

They should be able to answer:

1. Where do I get the data?
2. Where would I place my own API key, if one is required?
3. Which file do I run first?
4. Which packages do I need?
5. What output should I expect?
6. Which result or figure answers the main question?

Then have them restart the environment and reproduce one important result using only the written instructions.

If they need information that exists only in your memory, add it to the documentation before submitting.

[← Capstone home](README.md)
