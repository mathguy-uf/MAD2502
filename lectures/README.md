# MAD 2502 Lectures

[← Return to the course website](../)

The lecture notebooks are the main path through the Python and computational mathematics portion of the course. They are meant to be **run and changed**, not just read.

A useful habit for every example is:

1. predict what the code will do;
2. run it;
3. explain the output;
4. change one thing;
5. run it again.

## Course learning map

### Functions

A function packages a calculation or procedure so it can be reused.

Questions to keep asking:

- What information goes into the function?
- What value comes back?
- Which variables are local?
- What happens when arguments are given in a different order?

Representative examples:

```python
def my_max(a, b):
    if a > b:
        return a
    return b
```

```python
def distance(x1, y1, x2, y2):
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
```

The current repository contains an older Functions notebook that is still useful:

| View | Colab | Binder |
|---|---|---|
| [GitHub](../Lecture03.ipynb) | [Run in Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/Lecture03.ipynb) | [Launch Binder](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/Lecture03.ipynb) |

---

### Branching

Programs make decisions with Boolean expressions and `if`, `elif`, and `else`.

Start with small questions:

```python
temperature = 91

if temperature >= 90:
    print("hot")
elif temperature >= 70:
    print("warm")
else:
    print("cool")
```

Then ask:

- Which conditions are tested?
- In what order?
- Can more than one branch run?
- What happens exactly at a boundary value?

Good examples for this unit include interval membership, grade cutoffs, checking whether a number is even, and validating user input.

---

### Iteration

Loops repeat a computation.

```python
total = 0

for value in [4, 7, 2, 9]:
    total += value

print(total)
```

The important idea is not just syntax. Trace the state of the variables after every iteration.

Questions to practice:

- What is the loop variable?
- What changes each time?
- What stays fixed?
- When does a `while` loop stop?
- Could the loop fail to terminate?

Useful applications include sums, searching, repeated approximation, counting, simulation, and processing rows of data.

---

### Recursion

A recursive function solves a problem using a smaller version of the same problem.

Every recursive algorithm needs:

1. a **base case** that stops the process;
2. a **recursive step** that moves toward the base case.

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

Do not just look at the final answer. Trace the calls:

```text
factorial(4)
4 * factorial(3)
4 * 3 * factorial(2)
4 * 3 * 2 * factorial(1)
4 * 3 * 2 * 1 * factorial(0)
```

The repository also contains a palindrome example that is useful for seeing recursive calls unfold:

[Palindrome notebook](../palindrome.ipynb)

---

### Objects and Classes

A class lets you define a new kind of object with its own data and behavior.

```python
class Counter:
    def __init__(self):
        self.value = 0

    def increment(self):
        self.value += 1

    def __str__(self):
        return f"Counter({self.value})"
```

Focus on the relationship between:

- the class;
- an instance;
- attributes such as `self.value`;
- methods;
- constructors with `__init__`;
- readable representations with `__str__`;
- inheritance.

An older integer-set example is available here:

[IntSet example](../IntSetExample.ipynb)

---

### Computer Arithmetic and IEEE-754

Computers store a finite approximation to many real numbers. That means ordinary algebra and floating-point computation are not always interchangeable.

A useful first experiment is:

```python
print(0.1 + 0.2)
print((0.1 + 0.2) == 0.3)
```

Then investigate:

- binary representation;
- chopping and rounding;
- significant digits;
- absolute and relative error;
- IEEE-754 binary64 sign, characteristic, and fraction;
- cancellation and loss of significance;
- why equivalent formulas can produce different numerical results.

The goal is not to fear floating-point arithmetic. The goal is to understand its model and limitations.

---

### Working with Files

Programs become much more useful when data can persist outside the running Python session.

The current course covers several formats:

| Format | Best mental model | Typical use |
|---|---|---|
| TXT | plain text | notes, logs, simple data |
| CSV | table | portable rows and columns |
| Pickle | Python object | convenient Python-only storage |
| JSON | lists/dictionaries | APIs and structured text data |
| HDF5 | hierarchical binary data | large or structured numerical datasets |

Questions to ask about any file format:

- Is it human-readable?
- Is it portable between languages?
- Does it preserve Python-specific objects?
- Is it designed for large data?
- What does the resulting Python object look like after loading?

---

### Graphics and Visualization

A graph is part of the mathematical argument, not decoration.

Students should be able to create and interpret:

- line plots;
- scatter plots;
- bar charts;
- histograms;
- multiple curves on one axes;
- labeled figures;
- simple interactive or animated figures.

The basic Matplotlib pattern is:

```python
import matplotlib.pyplot as plt

x = [0, 1, 2, 3]
y = [0, 1, 4, 9]

fig, ax = plt.subplots()
ax.plot(x, y, marker="o")
ax.set(
    xlabel="x",
    ylabel="y",
    title="A simple quadratic pattern",
)
plt.show()
```

Before making a graph, ask:

> What question should this figure help the reader answer?

Use labels and units when applicable. Do not rely on color alone to distinguish important information.

---

## From lectures to the capstone

The later parts of MAD 2502 deliberately combine earlier ideas:

```text
functions
   +
iteration
   +
files / APIs
   +
pandas
   +
graphics
   ↓
capstone project
```

When your project becomes complicated, break it back into these smaller pieces. A good project is usually a collection of understandable functions and data transformations, not one giant block of code.

[← Return to the course website](../)
