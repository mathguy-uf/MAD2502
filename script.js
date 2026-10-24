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
