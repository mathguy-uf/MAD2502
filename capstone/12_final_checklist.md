# Final Capstone Submission — Fall 2026

[Capstone home](README.md) · [Last-minute tips](13_last_minute_tips.md)

**All final capstone materials are due December 2, 2026.** Check Canvas for the submission location, exact cutoff time, presentation arrangements, and any later instructor updates.

## Submit one ZIP per group

Include these four parts in one ZIP file:

| Part | What to include |
|---|---|
| Python code | The notebooks and/or scripts that produce your results. |
| README | Project overview, required packages, data/setup instructions, run order, and expected output. |
| Necessary ancillary files | Files needed to run the project, including data you are permitted to redistribute. If data cannot be included, document how to obtain it. |
| Paper as a PDF | One coherent group report, roughly **5 pages per student**. |

A repository or shared-drive link does not replace the ZIP submission. Remove API keys, passwords, tokens, and private information from code, notebook outputs, screenshots, and the ZIP itself. A file ignored by Git can still be accidentally included in a ZIP.

Use the [project README template](../templates/project_readme.md) and [reproducibility checklist](10_reproducibility_accessibility.md) to prepare the handoff.

## Paper and presentation: different jobs

| Written paper | Group presentation |
|---|---|
| Tell the complete research story: question, background, sources, methods, results, and limits. | Show the research question, main source, working result, supporting check, and conclusion. |
| Explain meaningful failed approaches, bugs, changes of direction, and what you learned. | Follow one clear path through the strongest functioning parts of the project. |
| Record decisions, contributions, and reproducibility details. | Demonstrate and explain evidence the audience can understand. |
| Roughly **5 pages per student**, combined into one report. | **10–12 minutes for the entire group**. |

Discuss limitations that affect your conclusion in both products. A failed experiment can still be valuable when you explain the method, evidence, and what the result does and does not establish.

**If your group presented in class:** post a note on the Canvas discussion board saying that you presented in class and attach your PowerPoint exported as a PDF. Follow Canvas instructions for other presentation arrangements. All final materials are due December 2.

## Convince me that your research works

For the central result, explain four things:

1. **Claim:** What exactly does the program or analysis do?
2. **Check:** What known answer, independent calculation, trusted method, or simple baseline did you compare against?
3. **Evidence:** What actual output, plot, table, or metric supports the claim?
4. **Limit:** Where does that conclusion stop?

For example, a function computing an arithmetic mean should return `4` for `[2, 4, 6]`, because `(2 + 4 + 6) / 3 = 4`. Show the actual computed result alongside this independently calculated answer, then test how the function handles empty or invalid input. This is a small code check; your project also needs evidence supporting its research conclusion.

For numerical work, compare with a known solution or examine error as the step size or tolerance changes. For data analysis, verify a small count or summary by hand. For prediction, evaluate on held-out data and compare with a simple baseline. Choose checks that fit your question; machine learning is not required.

## Sources, research notes, and AI assistance

- Identify an **anchor source**: the original dataset, research paper, or documentation central to your work. Record its author/provider, title, URL or DOI, and access date where appropriate. API documentation explains an interface; also cite the origin and meaning of the data.
- Keep brief research-log entries: **question → action → evidence → next step**. Preserve important failed attempts and decisions for the paper.
- Verify important facts, calculations, and citations using original sources and independent checks. Repeated claims in an AI answer or social-media feed are not verification. Look for counterexamples and evidence that could change your conclusion.
- Follow the course AI-use rules and document assistance as required. You must be able to explain and verify the code and results you submit.
- Use public or synthetic data when possible. For sensitive or restricted information, UF's NaviGator guidance permits only approved models deployed on HiPerGator, identified as **LOCAL**, with the appropriate permissions and data classification. **CLOUD** models are not approved for that information. Check [UF's current usage guidance](https://docs.ai.it.ufl.edu/docs/navigator_chat/intro/) and [model classifications](https://docs.ai.it.ufl.edu/docs/navigator_models/) before uploading. A LOCAL label does not grant permission to use someone else's data.

## Before you submit

- [ ] Cite the main source and any outside methods or code used.
- [ ] Show one working result, one independent check supporting it, and one limitation.
- [ ] Include meaningful failed attempts and team contributions in the paper.
- [ ] Restart the kernel and **Run All**, or run scripts in the documented order.
- [ ] Have a teammate unzip a fresh copy and reproduce the central result using only the README.
- [ ] Check that figures have labels, units, readable text, and captions; do not rely on color alone.
- [ ] Check the exported paper and slide PDFs for readable text and logical reading order.
- [ ] Rehearse the full 10–12 minute group presentation and keep a backup of demonstration output.
- [ ] Confirm the ZIP contains code, README, necessary ancillary files, and the paper PDF, with no secrets.
- [ ] Complete the applicable presentation/discussion submission in Canvas by December 2.

[Final report guide](08_final_report.md) · [Presentation guide](09_presentation.md) · [GitHub group workflow](11_github_group_projects.md)
