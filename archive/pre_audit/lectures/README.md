# MAD 2502 Lectures

[← Return to the course website](../)

The lecture notebooks are the main path through the Python and computational mathematics portion of the course. They are meant to be **predicted, run, changed, and used**, not just read.

## How every lecture works

Every new lecture follows the same rhythm:

**Understand → Predict → Run → Change → Use → Practice → Connect**

1. **Understand** — introduce one idea and why it matters.
2. **Predict** — decide what should happen before executing the important example.
3. **Run** — execute it and compare the output with the prediction.
4. **Change** — modify one controlled piece and predict again.
5. **Use** — apply the idea to a more meaningful problem.
6. **Practice** — work independently without simply copying the example.
7. **Connect** — identify where the idea appears later in the course or capstone.

The guiding rule is:

> **Think first. Run second. Change something. Then use it.**

See [`TEACHING_PATTERN.md`](../TEACHING_PATTERN.md) for the full course pattern and [`templates/mad2502_notebook_template.ipynb`](../templates/mad2502_notebook_template.ipynb) for the standard notebook structure.

---

## Course learning map

### Functions

**Understand:** A function packages a calculation or procedure so it can be reused.

```python
def my_max(a, b):
    if a > b:
        return a
    return b
```

**Predict:** What does `my_max(4, 9)` return? What about `my_max(9, 4)`?

**Change:** Replace `>` with `>=`. Does any returned value change? Does the logic change?

**Use:** Build a function such as distance, average, or a reusable data-cleaning step.

Questions to keep asking:

- What information goes into the function?
- What value comes back?
- Which variables are local?
- What happens when arguments are supplied in a different order?

| View | Colab | Binder |
|---|---|---|
| [GitHub](../Lecture03.ipynb) | [Run in Colab](https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/Lecture03.ipynb) | [Launch Binder](https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/Lecture03.ipynb) |

---

### Branching

**Understand:** Programs make decisions with Boolean expressions and `if`, `elif`, and `else`.

**Predict:** How many lines print?

```python
x = 7

if x > 5:
    print("A")

if x > 3:
    print("B")
else:
    print("C")
```

Now compare with:

```python
if x > 5:
    print("A")
elif x > 3:
    print("B")
else:
    print("C")
```

**Change:** Test boundary values such as `x = 5` and `x = 3`.

**Use:** Interval membership, grade cutoffs, validation, parity, and deciding which computational method should run.

---

### Iteration

**Understand:** Loops repeat a computation while state changes.

```python
total = 0

for value in [4, 7, 2, 9]:
    total += value

print(total)
```

**Predict:** Write the value of `total` after every iteration before running it.

**Change:** Replace the list, change the initial value, or count instead of sum.

**Use:** Searching, repeated approximation, simulations, counting, processing data rows, and numerical algorithms.

For every loop ask:

- What changes each time?
- What stays fixed?
- When does it stop?
- Could it fail to terminate?

---

### Recursion

**Understand:** A recursive function solves a problem using a smaller version of the same problem. It needs a base case and a recursive step.

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

**Predict:** Trace `factorial(4)` by hand before running it.

```text
factorial(4)
4 * factorial(3)
4 * 3 * factorial(2)
4 * 3 * 2 * factorial(1)
4 * 3 * 2 * 1 * factorial(0)
```

**Change:** Move the base case or remove the `- 1`. Predict the failure before testing it.

**Use:** Palindrome testing, recursively defined mathematics, and divide-and-conquer ideas.

[Palindrome example](../palindrome.ipynb)

---

### Objects and Classes

**Understand:** A class defines a new kind of object with its own data and behavior.

```python
class Counter:
    def __init__(self):
        self.value = 0

    def increment(self):
        self.value += 1

    def __str__(self):
        return f"Counter({self.value})"
```

**Predict:** After two calls to `increment()`, what does `print(counter)` display?

**Change:** Give the constructor a starting value.

**Use:** Model objects whose data and operations belong together. Focus on instances, attributes, methods, `__init__`, `__str__`, and inheritance.

[IntSet example](../IntSetExample.ipynb)

---

### Computer Arithmetic and IEEE-754

**Understand:** Computers store finite representations, so exact real-number algebra and floating-point computation are not always interchangeable.

**Predict:** What do you expect from this comparison?

```python
print(0.1 + 0.2)
print((0.1 + 0.2) == 0.3)
```

**Run:** Compare expectation with actual output.

**Change:** Try other decimal fractions and algebraically equivalent expressions.

**Use:** Study binary representation, chopping and rounding, absolute/relative error, IEEE-754 binary64, cancellation, and failure of familiar algebraic identities under finite precision.

The point is not to fear floating-point arithmetic. The point is to understand its model and limitations.

---

### Working with Files

**Understand:** Files let data persist outside one Python session.

| Format | Mental model | Typical use |
|---|---|---|
| TXT | plain text | notes, logs, simple data |
| CSV | table | portable rows and columns |
| Pickle | Python object | convenient Python-only storage |
| JSON | lists/dictionaries | APIs and structured text |
| HDF5 | hierarchical binary data | large or structured numerical datasets |

**Predict:** Before loading a file, predict what kind of Python object you expect back.

**Change:** Save the same information in two formats and compare readability and structure.

**Use:** Connect file formats directly to Applied Data and capstone workflows.

---

### Graphics and Visualization

**Understand:** A graph is part of the computational argument, not decoration.

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

**Predict:** What are the four plotted coordinates? What shape should the curve suggest?

**Change:** Change markers, line style, axis scale, or one data value and predict the visual effect.

**Use:** Line plots, scatter plots, bar charts, histograms, multiple curves, interactive figures, and animation.

Before making any graph, ask:

> **What question should this figure help the reader answer?**

Use labels and units when applicable, and do not rely on color alone to communicate important distinctions.

---

## From lectures to the capstone

The later course deliberately combines earlier ideas:

```text
functions
   +
branching / iteration
   +
files / APIs
   +
pandas
   +
graphics
   ↓
capstone project
```

When a project becomes complicated, break it back into these smaller pieces. A good project is usually a collection of understandable functions and data transformations, not one giant block of code.

[← Return to the course website](../)

