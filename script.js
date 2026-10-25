const menuButton = document.getElementById('menuButton');
const siteNav = document.getElementById('siteNav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// The short list under the hero buttons describes course topics, not controls.
const heroTags = document.querySelector('.hero-tags');
if (heroTags) {
  const topics = Array.from(heroTags.querySelectorAll('span')).map((item) => item.textContent.trim());
  heroTags.innerHTML = `<strong style="color:#5e687b;font-size:.78rem;font-weight:850">Course topics:</strong>`;
  heroTags.style.alignItems = 'center';
  heroTags.style.columnGap = '8px';
  heroTags.style.rowGap = '4px';

  topics.forEach((topic, index) => {
    if (index > 0) {
      const separator = document.createElement('span');
      separator.textContent = '•';
      separator.setAttribute('aria-hidden', 'true');
      separator.style.cssText = 'padding:0;border:0;background:transparent;color:#9aa4b5';
      heroTags.appendChild(separator);
    }
    const item = document.createElement('span');
    item.textContent = topic;
    item.style.cssText = 'padding:0;border:0;border-radius:0;background:transparent;color:#42506a;font-size:.78rem;font-weight:700';
    heroTags.appendChild(item);
  });
}

function notebookUrls(path) {
  const encodedPath = path.split('/').map(encodeURIComponent).join('/');
  return {
    github: `https://github.com/mathguy-uf/MAD2502/blob/main/${encodedPath}`,
    colab: `https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/${encodedPath}`,
    binder: `https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/${encodedPath}`,
  };
}

function notebookActions(path) {
  const urls = notebookUrls(path);
  const wrapper = document.createElement('div');
  wrapper.className = 'notebook-actions';
  wrapper.innerHTML = `
    <a href="${urls.github}">View on GitHub</a>
    <a href="${urls.colab}">Run in Colab</a>
    <a href="${urls.binder}">Launch Binder</a>`;
  return wrapper;
}

// Current class: Chapter 12 is now live.
const currentActions = document.querySelector('#current .current-actions');
if (currentActions) {
  const urls = notebookUrls('lectures/12_graphics.ipynb');
  currentActions.innerHTML = `
    <span class="status-pill">Current unit</span>
    <a class="button button-primary" href="${urls.github}">View Chapter 12</a>
    <a class="button button-secondary" href="${urls.colab}">Run in Colab</a>
    <a class="button button-secondary" href="${urls.binder}">Launch Binder</a>`;
}

// Canonical reviewed lecture set. Chapter numbers follow the course textbook.
const lectureGroups = [
  {
    label: 'Getting started',
    items: [
      ['01', 'Python Basics', 'Python, Jupyter, scalar types, operators, input, modules, and first errors.', 'lectures/01_python_basics.ipynb'],
      ['02', 'Variables & Data Structures', 'Variables, strings, lists, tuples, sets, and dictionaries.', 'lectures/02_variables_data_structures.ipynb'],
      ['2.7', 'NumPy Basics', 'Arrays, shape, dtype, vectorization, slicing, filtering, and summaries.', 'lectures/02_numpy_basics.ipynb'],
      ['03', 'Functions', 'Parameters, arguments, return values, defaults, scope, and reusable computations.', 'lectures/03_functions.ipynb'],
    ],
  },
  {
    label: 'Core Python',
    items: [
      ['04', 'Branching', 'Boolean conditions, if/elif/else, boundaries, validation, and tolerances.', 'lectures/04_branching.ipynb'],
      ['05', 'Iteration', 'for and while loops, range, accumulators, counters, zip, and repeated approximation.', 'lectures/05_iteration.ipynb'],
      ['06', 'Recursion', 'Base cases, recursive steps, tracing, factorial, Fibonacci, and palindromes.', 'lectures/06_recursion.ipynb'],
      ['07', 'Object-Oriented Programming', 'Classes, objects, attributes, methods, self, constructors, and inheritance.', 'lectures/07_oop.ipynb'],
    ],
  },
  {
    label: 'Computational tools',
    items: [
      ['09', 'Floating-Point Arithmetic', 'Binary, IEEE-754, finite precision, error, cancellation, and tolerant comparisons.', 'lectures/09_floating_point.ipynb'],
      ['10', 'Errors & Debugging', 'Syntax/runtime/logical errors, exceptions, tests, and a repeatable debugging routine.', 'lectures/10_errors.ipynb'],
      ['11', 'Working with Files', 'TXT, CSV, JSON, Pickle, HDF5, paths, modules, and file safety.', 'lectures/11_files.ipynb'],
      ['12', 'Graphics', 'Matplotlib, Figure/Axes, plot layers, accessibility, 3-D, maps, and animation.', 'lectures/12_graphics.ipynb'],
    ],
  },
  {
    label: 'Mathematical applications',
    items: [
      ['16', 'Least-Squares Regression', 'Residuals, SSE, linear fits, R², residual plots, nonlinear fits, and model caution.', 'lectures/16_regression.ipynb'],
      ['19', 'Root Finding', 'Bisection, Newton’s method, convergence, failure cases, and verification.', 'lectures/19_root_finding.ipynb'],
    ],
  },
];

const lectureShell = document.querySelector('#lectures .page-shell');
if (lectureShell) {
  lectureShell.innerHTML = `
    <div class="section-heading split-heading">
      <div>
        <p class="section-kicker">LEARN</p>
        <h2 id="lectures-title">Lectures</h2>
        <p>Reviewed notebooks for the Python and computational-mathematics path. Chapter numbers follow the textbook.</p>
      </div>
      <a class="text-link" href="https://github.com/mathguy-uf/MAD2502/blob/main/lectures/README.md">Full lecture index →</a>
    </div>`;

  lectureGroups.forEach((group) => {
    const heading = document.createElement('div');
    heading.className = 'unit-label';
    heading.innerHTML = `<span>${group.label}</span>`;
    lectureShell.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'resource-grid';

    group.items.forEach(([chapter, title, description, path]) => {
      const card = document.createElement('article');
      card.className = 'resource-card available';
      card.innerHTML = `
        <div class="resource-top"><span class="chapter">${chapter}</span><span class="available-label">Reviewed</span></div>
        <h3>${title}</h3>
        <p>${description}</p>`;
      card.appendChild(notebookActions(path));
      grid.appendChild(card);
    });

    lectureShell.appendChild(grid);
  });
}

// Applied Data uses the same three access choices.
const appliedDataNotebooks = {
  'eBird API': 'applied_data/01_ebird_api.ipynb',
  'pandas Basics': 'applied_data/02_pandas_basics.ipynb',
  'Statistics Villains': 'applied_data/03_statistics_villains.ipynb',
  'Data Rescue Kit': 'applied_data/04_data_rescue_kit.ipynb',
};

document.querySelectorAll('#applied-data .tutorial-card').forEach((card) => {
  const title = card.querySelector('h3')?.textContent.trim();
  const path = appliedDataNotebooks[title];
  if (!path) return;
  card.querySelector('.button-disabled')?.remove();
  card.appendChild(notebookActions(path));
});

// Keep the course learning rhythm visible on the homepage.
const pathways = document.querySelector('.pathways');
if (pathways && !document.getElementById('learning-pattern')) {
  const learningPattern = document.createElement('section');
  learningPattern.className = 'content-section light-section';
  learningPattern.id = 'learning-pattern';
  learningPattern.setAttribute('aria-labelledby', 'learning-pattern-title');
  learningPattern.innerHTML = `
    <div class="page-shell">
      <div class="section-heading centered-heading">
        <p class="section-kicker">HOW MAD 2502 LESSONS WORK</p>
        <h2 id="learning-pattern-title">Think first. Run second. Then make it yours.</h2>
        <p>New lectures and tutorials use the same learning rhythm so you always know what comes next.</p>
      </div>
      <div class="pipeline" aria-label="MAD 2502 learning pattern">
        <span>Understand</span><b>→</b><span>Predict</span><b>→</b><span>Run</span><b>→</b>
        <span>Change</span><b>→</b><span>Use</span><b>→</b><span>Practice</span><b>→</b><span>Connect</span>
      </div>
      <p style="max-width:850px;margin:18px auto 0;text-align:center;color:#56616f;line-height:1.7">
        The goal is not to copy working code. Predict what the code should do, compare that prediction with what actually happens, change one piece, and then use the idea to answer a real question.
      </p>
    </div>`;
  pathways.insertAdjacentElement('afterend', learningPattern);
}
