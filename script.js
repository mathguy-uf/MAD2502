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

// Keep notebook access consistent with MAD 4401: students can read the
// notebook on GitHub, run one notebook in Colab, or launch the repository
// in Binder/JupyterLab.
const appliedDataNotebooks = {
  'eBird API': 'applied_data/01_ebird_api.ipynb',
  'pandas Basics': 'applied_data/02_pandas_basics.ipynb',
  'Statistics Villains': 'applied_data/03_statistics_villains.ipynb',
  'Data Rescue Kit': 'applied_data/04_data_rescue_kit.ipynb',
};

function notebookActions(path) {
  const encodedPath = path.split('/').map(encodeURIComponent).join('/');
  const github = `https://github.com/mathguy-uf/MAD2502/blob/main/${encodedPath}`;
  const colab = `https://colab.research.google.com/github/mathguy-uf/MAD2502/blob/main/${encodedPath}`;
  const binder = `https://mybinder.org/v2/gh/mathguy-uf/MAD2502/main?urlpath=lab/tree/${encodedPath}`;

  const wrapper = document.createElement('div');
  wrapper.className = 'notebook-actions';
  wrapper.innerHTML = `
    <a href="${github}">View on GitHub</a>
    <a href="${colab}">Run in Colab</a>
    <a href="${binder}">Launch Binder</a>
  `;
  return wrapper;
}

document.querySelectorAll('#applied-data .tutorial-card').forEach((card) => {
  const title = card.querySelector('h3')?.textContent.trim();
  const path = appliedDataNotebooks[title];
  if (!path) return;

  card.querySelector('.button-disabled')?.remove();
  card.appendChild(notebookActions(path));
});

// The learning rhythm is intentionally repeated across the course. Keeping it
// visible on the homepage helps students recognize what each notebook expects
// them to do before they begin clicking through code cells.
const pathways = document.querySelector('.pathways');

if (pathways) {
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
        <span>Understand</span><b>→</b>
        <span>Predict</span><b>→</b>
        <span>Run</span><b>→</b>
        <span>Change</span><b>→</b>
        <span>Use</span><b>→</b>
        <span>Practice</span><b>→</b>
        <span>Connect</span>
      </div>
      <p style="max-width:850px;margin:18px auto 0;text-align:center;color:#56616f;line-height:1.7">
        The goal is not to copy working code. Predict what the code should do, compare that prediction with what actually happens, change one piece, and then use the idea to answer a real question.
      </p>
    </div>`;

  pathways.insertAdjacentElement('afterend', learningPattern);
}
