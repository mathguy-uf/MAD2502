# GitHub for a Group Project

GitHub can help your capstone group keep one shared copy of the code, see who changed what, and avoid emailing files named things like `final_v2_REAL_final.ipynb`.

This guide assumes you are new to Git and GitHub. You do **not** need to learn every Git feature.

[← Return to the capstone guide](README.md)

## The big idea

Your group has one shared project repository on GitHub.

Each group member has a copy on their own computer.

The basic cycle is:

**pull → work → check → commit → push**

- **pull**: get your teammates' newest changes;
- **work**: edit your files;
- **check**: make sure the project still runs;
- **commit**: save a labeled checkpoint;
- **push**: send your commits to GitHub.

The most important habit is simple:

> **Pull before you start working, and push when you finish a useful piece of work.**

---

# 1. One person creates the group repository

Choose one group member to create the repository on GitHub.

A good repository name might be:

```text
mad2502-capstone-bird-migration
```

When creating it:

- choose **Private** unless your group has a reason to make the project public;
- add a `README.md`;
- choose the Python `.gitignore` template if GitHub offers it.

Do **not** put passwords, API keys, private student information, or other secrets in the repository.

## Add your teammates

The repository owner should open:

**Settings → Collaborators → Add people**

Invite each teammate by GitHub username or email address. Each teammate must accept the invitation before they can push changes.

---

# 2. Everyone clones the repository once

Each group member opens the repository on GitHub, selects **Code**, and copies the repository URL.

Then, in Terminal, PowerShell, or another shell:

```bash
git clone REPOSITORY_URL
cd REPOSITORY_NAME
```

For example:

```bash
git clone https://github.com/example-user/mad2502-capstone-bird-migration.git
cd mad2502-capstone-bird-migration
```

You only clone the repository **once**.

After that, you return to the same folder and use `git pull` to get updates.

---

# 3. Give the project a simple structure

A group repository is easier to manage when everyone knows where things belong.

For example:

```text
mad2502-capstone-project/
├── README.md
├── notebooks/
│   ├── exploration.ipynb
│   └── final_analysis.ipynb
├── data/
│   └── README.md
├── figures/
├── report/
└── presentation/
```

The exact folders do not matter. Consistency does.

Your `README.md` should briefly state:

- the project question;
- the group members;
- where the data come from;
- how to run the project;
- any packages that must be installed;
- who is currently working on which part.

---

# 4. Before every work session: pull

Move into the project folder and run:

```bash
git pull
```

This downloads changes your teammates have already pushed.

Then check the repository:

```bash
git status
```

If Git says your working tree is clean, you are starting from a known state.

A good habit is:

```bash
git pull
git status
```

before you edit anything.

---

# 5. Work on a small, clearly defined task

Do not have everyone edit everything.

A group might divide work like this:

| Person | Current responsibility |
|---|---|
| A | acquire and document the data |
| B | clean the data |
| C | create figures |
| D | draft report sections |

The responsibilities can change later.

What matters is that the group knows **who is editing which file right now**.

## The Jupyter notebook rule

Jupyter notebooks are especially difficult to merge when two people edit the same notebook at the same time.

For a beginner group, use this rule:

> **Only one person should actively edit a particular `.ipynb` file at a time.**

If two students need to experiment independently, create separate notebooks such as:

```text
notebooks/alex_exploration.ipynb
notebooks/sam_exploration.ipynb
```

Later, move the best work into one clean final notebook.

This is much easier than trying to repair a complicated notebook merge conflict.

---

# 6. Save a useful checkpoint with a commit

When you finish a small piece of work, first see what changed:

```bash
git status
```

Add the files you want to save:

```bash
git add filename.py
```

or, if everything listed by `git status` belongs in this checkpoint:

```bash
git add .
```

Then create a commit:

```bash
git commit -m "Clean missing values in weather data"
```

A commit is a labeled checkpoint in the history of the project.

### Good commit messages

```text
Add first scatter plot
Clean date column
Document eBird data source
Fix empty API response
Revise introduction
```

### Less useful commit messages

```text
stuff
changes
final
asdf
```

Small, descriptive commits make the group history much easier to understand.

---

# 7. Push your work to GitHub

After committing:

```bash
git push
```

Now your teammates can receive your work with `git pull`.

Before you stop for the day, check:

```bash
git status
```

Ideally, Git should report that the working tree is clean and that your branch is up to date.

---

# 8. The normal group workflow

At the beginning of a work session:

```bash
git pull
git status
```

After making one useful change:

```bash
git status
git add .
git commit -m "Describe what you changed"
git push
```

Then repeat as needed.

Do not wait until the night before the deadline to make one enormous commit containing the entire project.

---

# 9. What if `git push` is rejected?

A common message means that someone else pushed work after your last pull.

Do **not** panic and do not start deleting files.

First try:

```bash
git pull
```

If Git can combine the changes automatically, it will do so. Then run the project, check the result, and push again:

```bash
git push
```

If Git reports a **merge conflict**, stop and read which file is conflicted.

For a text file, Git will mark the competing versions so you can decide what the final version should contain.

For a Jupyter notebook, resolving the conflict by hand can be unpleasant. This is why the group should avoid editing the same notebook simultaneously.

If the conflict is not obvious, ask a teammate before forcing, deleting, or overwriting anything.

---

# 10. Never solve a conflict with `--force` unless you understand why

Commands such as:

```text
git push --force
```

can overwrite shared history.

For this course, you almost never need them.

If Git refuses a normal push, find out **why** before using a force option.

---

# 11. What should not go on GitHub?

Do not commit:

- API keys;
- passwords or access tokens;
- private student information;
- confidential records;
- enormous raw datasets that can be downloaded from the original source;
- temporary files that can be recreated automatically.

For a large dataset, it is often better to put a small `README.md` in the `data/` folder explaining where the data came from and how to download it.

If an API key is needed, keep it in a local file that is listed in `.gitignore`.

---

# 12. A good end-of-project repository

Before submitting, another person should be able to open the repository and answer:

1. What question did this group investigate?
2. Where did the data come from?
3. Which file should I run first?
4. What packages do I need?
5. Can I reproduce the main figures or results?
6. Can I tell how the project developed from the commit history?

Your GitHub repository is not just storage. It can become part of the record of your research process.

---

# Optional: branches and pull requests

GitHub also supports **branches** and **pull requests**. These are extremely useful on larger software projects because people can work independently and review changes before merging them into `main`.

For a first Python/data-science capstone, they are optional. A small group can work successfully with the simpler workflow in this guide if the group:

- pulls before working;
- commits small changes;
- pushes regularly;
- communicates about file ownership;
- avoids simultaneous edits to the same notebook.

If your group already knows Git, you are welcome to use feature branches and pull requests.

---

# Five commands to remember

```bash
git pull
git status
git add .
git commit -m "Describe the change"
git push
```

If you remember the purpose of those five commands, you know enough Git to collaborate on a MAD 2502 capstone project.

[← Return to the capstone guide](README.md)
