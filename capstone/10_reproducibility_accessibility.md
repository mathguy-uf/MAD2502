# Make the project reproducible and accessible

[Capstone home](README.md)

**Reproducible** means another person can follow your documented steps and obtain the result from the same inputs. Begin with a fresh session; a notebook that works only because of forgotten variables is unfinished.

## Before handing your project to someone else

- Record source URLs, access dates, licenses, row meaning, units, and request parameters. Preserve a permitted data snapshot or document how to obtain restricted data.
- Use relative paths and a short README with run order. List the packages and versions you actually used. Explain optional steps and expected errors.
- Keep raw inputs unchanged; write cleaned data and figures into a separate `outputs/` folder.
- Set and record random seeds for simulations. Explain that a seed repeats a computation; it does not prove the model is realistic.
- Restart the kernel and run all normal cells in order. Remove stale outputs and anything private before sharing. An API may change, so distinguish a live run from a saved sample.
- Keep API keys in ignored local files or an appropriate secret store. An ignored file is still plain text. Do not publish keys, passwords, student work, names/grades, or restricted data.
- Ask a teammate to follow the README from a fresh copy. Record what failed and repair the instructions.

## Make results understandable without relying on vision alone

Use a descriptive notebook title and ordered headings. Introduce each table and explain what each row/column means. Label axes and units. Use markers, line styles, or direct labels in addition to color. Write a short textual finding beside each important graph and supply image alt text where the publishing format supports it. Check exported reports and slides for reading order, readable fonts, table headers, and usable contrast.

These checks improve usability; they are not a formal accessibility certification.

## A small final check

Have a teammate explain one figure using only its caption and nearby text. Then have them reproduce it using the documented instructions. Fix either explanation if it depends on information that exists only in your memory.
