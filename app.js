const state = {
  categoryId: null,
  procedureId: null,
  search: '',
  favorites: JSON.parse(localStorage.getItem('qrh-favorites') || '[]')
};

const $app = document.getElementById('app');
const $search = document.getElementById('search');
const $crumbs = document.getElementById('breadcrumbs');
const $offline = document.getElementById('offlineBadge');

function saveFavorites() {
  localStorage.setItem('qrh-favorites', JSON.stringify(state.favorites));
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    state.favorites = state.favorites.filter(x => x !== id);
  } else {
    state.favorites.push(id);
  }
  saveFavorites();
  render();
}

function getCategories() {
  return window.QRH_DATA.categories;
}

function findCategory(id) {
  return getCategories().find(c => c.id === id);
}

function findProcedure(categoryId, procedureId) {
  const cat = findCategory(categoryId);
  return cat?.procedures.find(p => p.id === procedureId);
}

function severityLabel(sev) {
  const map = { warning: 'WARNING', caution: 'CAUTION', advisory: 'ADVISORY', info: 'INFO' };
  return map[sev] || 'INFO';
}

function updateBreadcrumbs() {
  const parts = ['Home'];
  if (state.categoryId) parts.push(findCategory(state.categoryId)?.title || 'Category');
  if (state.procedureId) parts.push(findProcedure(state.categoryId, state.procedureId)?.title || 'Procedure');
  $crumbs.textContent = parts.join(' / ');
}

function homeView() {

  const categories = getCategories();
  const search = state.search.trim().toLowerCase();

  let favoritesHtml = '';
  const favoriteProcedures = [];
  categories.forEach(cat => cat.procedures.forEach(proc => {
    if (isFavorite(proc.id)) favoriteProcedures.push({ cat, proc });
  }));

  if (favoriteProcedures.length) {
    favoritesHtml = `
      <section class="panel">
        <div class="panel-title">Quick Access</div>
        <div class="list">${favoriteProcedures.map(({cat, proc}) => `
          <button class="list-item" data-category="${cat.id}" data-procedure="${proc.id}">
            <span class="list-main">
              <span class="list-title">${proc.title}</span>
              <span class="list-sub">${cat.title}</span>
            </span>
            <span class="badge ${proc.severity}">${severityLabel(proc.severity)}</span>
          </button>
        `).join('')}</div>
      </section>`;
  }
let warningIndexHtml = '';

if (window.QRH_DATA.warningIndex && window.QRH_DATA.warningIndex.length) {
  warningIndexHtml = `
    <section class="panel">
      <div class="panel-title">WARNING LIGHTS / FIND PROCEDURE</div>
      <div class="lights-index">
        ${window.QRH_DATA.warningIndex.map(item => `
          <button class="light-card" data-category="${item.categoryId}" data-procedure="${item.procedureId}">
            <div class="lights">
              ${item.lights.map(l => `<span class="light">${l}</span>`).join('')}
            </div>
            <div class="light-title">${item.title}</div>
          </button>
        `).join('')}
      </div>
    </section>
  `;
}
  const filteredCategories = categories.map(cat => {
    const procedures = cat.procedures.filter(proc => {
      const hay = [cat.title, proc.title, proc.condition, ...(proc.actions||[]), ...(proc.followUp||[]), ...(proc.notes||[])].join(' ').toLowerCase();
      return !search || hay.includes(search);
    });
    return { ...cat, procedures };
  }).filter(cat => cat.procedures.length || !search);

  return `
    <section class="hero panel">
      <div>
        <div class="eyebrow">Offline-ready PWA</div>
        <h2>${window.QRH_DATA.meta.title}</h2>
        <p>${window.QRH_DATA.meta.subtitle}</p>
      </div>
      <div class="hero-meta">
        <div class="meta-box">${window.QRH_DATA.meta.version}</div>
        <div class="meta-box">${window.QRH_DATA.meta.offline ? 'Offline OK' : 'Online only'}</div>
      </div>
    </section>
    ${favoritesHtml}


${warningIndexHtml}
<section class="category-grid">
      ${filteredCategories.map(cat => `
        <button class="category-card" data-category="${cat.id}">
          <div class="category-icon">${cat.icon}</div>
          <div class="category-title">${cat.title}</div>
          <div class="category-count">${cat.procedures.length} procedure${cat.procedures.length === 1 ? '' : 's'}</div>
        </button>
      `).join('')}
    </section>
  `;
}

function categoryView(category) {
  const search = state.search.trim().toLowerCase();
  const procedures = category.procedures.filter(proc => {
    const hay = [proc.title, proc.condition, ...(proc.actions||[]), ...(proc.followUp||[]), ...(proc.notes||[])].join(' ').toLowerCase();
    return !search || hay.includes(search);
  });

  return `
    <section class="panel category-header">
      <div class="category-icon large">${category.icon}</div>
      <div>
        <div class="eyebrow">Category</div>
        <h2>${category.title}</h2>
        <p>${procedures.length} procedure${procedures.length === 1 ? '' : 's'}</p>
      </div>
    </section>
    <section class="panel">
      <div class="list">
        ${procedures.map(proc => `
          <button class="list-item" data-category="${category.id}" data-procedure="${proc.id}">
            <span class="list-main">
              <span class="list-title">${proc.title}</span>
              <span class="list-sub">${proc.condition}</span>
            </span>
            <span class="row-right">
              <span class="badge ${proc.severity}">${severityLabel(proc.severity)}</span>
              <span class="star ${isFavorite(proc.id) ? 'active' : ''}" data-favorite="${proc.id}" title="Favorite">★</span>
            </span>
          </button>
        `).join('')}
      </div>
    </section>
  `;
}

function block(title, items, kind = 'plain') {
  if (!items || !items.length) return '';
  return `
    <section class="panel proc-block ${kind}">
      <div class="panel-title">${title}</div>
      <ul class="checklist">
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </section>
  `;
}

function procedureView(category, procedure) {
  return `
    <section class="panel procedure-header">
      <div>
        <div class="eyebrow">${category.title}</div>
        <h2>${procedure.title}</h2>
        <p>${procedure.condition}</p>
      </div>
      <div class="header-side">
        <span class="badge big ${procedure.severity}">${severityLabel(procedure.severity)}</span>
        <button class="fav-btn ${isFavorite(procedure.id) ? 'active' : ''}" data-favorite="${procedure.id}">${isFavorite(procedure.id) ? '★ Saved' : '☆ Save'}</button>
        </div>
      </section>
      ${procedure.image ? `
<section class="panel">
  <div class="panel-title">REFERENCE IMAGE</div>
  <img src="${procedure.image}" alt="${procedure.title}" class="procedure-image">
</section>
` : ''}
      
    



${block('Immediate Actions', procedure.actions, 'actions')}
${block('Follow-up / Decision', procedure.followUp, 'follow')}
${block('Crew Calls', procedure.crew, 'crew')}
${block('Critical Notes', procedure.notes, 'notes')}
${procedure.lights ? `
<section class="panel">
  <div class="panel-title">WARNING LIGHTS</div>
  <div class="lights">
    ${procedure.lights.map(l => `<span class="light">${l}</span>`).join('')}
  </div>
</section>
` : ''}
`;
}

function render() {
  updateBreadcrumbs();
  if (!state.categoryId) {
    $app.innerHTML = homeView();
  } else if (!state.procedureId) {
    $app.innerHTML = categoryView(findCategory(state.categoryId));
  } else {
    $app.innerHTML = procedureView(findCategory(state.categoryId), findProcedure(state.categoryId, state.procedureId));
  }
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-category]').forEach(el => {
    el.addEventListener('click', e => {
      const cat = e.currentTarget.dataset.category;
      const proc = e.currentTarget.dataset.procedure;
      state.categoryId = cat;
      state.procedureId = proc || null;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-favorite]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(e.currentTarget.dataset.favorite);
    });
  });
}

function goHome() {
  state.categoryId = null;
  state.procedureId = null;
  render();
}

function goBack() {
  if (state.procedureId) {
    state.procedureId = null;
  } else if (state.categoryId) {
    state.categoryId = null;
  }
  render();
}

window.goHome = goHome;
window.goBack = goBack;

$search.addEventListener('input', e => {
  state.search = e.target.value;
  if (state.procedureId) state.procedureId = null;
  render();
});

window.addEventListener('online', () => { $offline.textContent = 'Online'; });
window.addEventListener('offline', () => { $offline.textContent = 'Offline'; });
$offline.textContent = navigator.onLine ? 'Online' : 'Offline';

render();

// image support enabled
