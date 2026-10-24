# MAD 2502 Teaching Pattern

Every new MAD 2502 lecture, tutorial, or worked example should use the same learning rhythm whenever the format allows it.

## The seven-stage pattern

### 1. Understand

Introduce one idea at a time. State what the object, command, algorithm, or concept does and why it matters.

Keep the first example small enough that a student can reason through it without a computer.

### 2. Predict

Before running important code, ask students to predict what will happen.

Good prediction prompts include:

- What will print?
- How many times will this loop run?
- What type of object will this expression return?
- Which rows will survive this filter?
- Will this value be exact on a computer?
- What shape will this DataFrame have?

Prediction should occur **before** execution whenever possible.

### 3. Run

Execute the example and compare the result with the prediction.

Do not treat the output as self-explanatory. Briefly identify what happened and why.

### 4. Change

Ask the student to make one small, controlled change.

Examples:

- change a loop bound;
- change one condition;
- change a species code;
- change a DataFrame filter;
- change a plot marker or scale;
- change an initial value;
- change one input and predict the new result first.

The goal is to separate understanding from copying.

### 5. Use

Apply the idea to a slightly more realistic problem. This is where several earlier ideas may be combined.

Examples should answer a question rather than merely demonstrate syntax.

### 6. Practice

Provide several short questions that students can complete independently. Mix conceptual questions with code modifications and interpretation.

Avoid making every practice problem a larger version of the worked example.

### 7. Connect

End by connecting the material to at least one of the following:

- another lecture;
- computational mathematics;
- numerical reliability;
- debugging;
- Applied Data;
- the capstone project;
- a real computational workflow.

Students should leave knowing **where this idea fits**.

---

## Standard notebook opening

New notebooks should begin with:

1. title and course;
2. one-sentence **Big idea**;
3. 3–6 learning goals;
4. the lesson rhythm:

> **Understand → Predict → Run → Change → Use → Practice → Connect**

## Standard notebook ending

End with:

- **Practice** — independent questions;
- **Connect** — why this matters and where it appears next;
- optional **Quick reference** for commands students are likely to return to later.

## Design principle

MAD 2502 notebooks are not code dumps and are not reference manuals disguised as lectures. The intended cycle is:

> **Think first. Run second. Change something. Then use it.**

Reference material such as the Data Rescue Kit may be organized by problem rather than lecture sequence, but each worked repair should still use the same small cycle: understand the problem, predict the issue, run a diagnosis, change/fix it, and verify the result.
