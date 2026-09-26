function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '');
}

const $ = (id) => document.getElementById(id);
let currentTab = 'all';
let selectedCategory = '';
let sortMode = 'rank';

function getAllProviders() {
  return SITE_DATA.tabs.flatMap((tab) => (tab.providers || []).map((provider) => ({ ...provider, _tabId: tab.id })));
}

function getTab() {
  if (currentTab === 'all') return { id: 'all', name: 'All Providers', description: 'A full leaderboard covering every provider across all tabs.', providers: getAllProviders() };
  return SITE_DATA.tabs.find((tab) => tab.id === currentTab) || SITE_DATA.tabs[0];
}

function getProviders() {
  return currentTab === 'all' ? getAllProviders() : (getTab().providers || []);
}

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function tierFor(provider) {
  if (provider.tier) return provider.tier;
  if (provider.score >= 9.5) return 'S';
  if (provider.score >= 9) return 'A';
  if (provider.score >= 8) return 'B';
  return 'C';
}

function rankingData() {
  return getProviders()
    .map((provider, index) => ({ ...provider, _i: index }))
    .sort((a, b) => b.score - a.score);
}

const CATEGORY_ORDER = ['Premium', 'Valorant', 'Spoofers', 'Value', 'Others'];
function categories() {
  const present = [...new Set(getProviders().map((provider) => provider.category).filter(Boolean))];
  return present.sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a);
    const ib = CATEGORY_ORDER.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

function renderTabs() {
  const tabs = SITE_DATA.tabs.map((tab) => `
    <button class="menu-tab ${tab.id === currentTab ? 'active' : ''}" onclick="switchTab('${tab.id}')">
      <span>${esc(tab.name)}</span>
      <span class="menu-tab-count">${tab.providers.length}</span>
    </button>
  `).join('');

  $('menuTabs').innerHTML = tabs;
  const bar = $('tabbar');
  if (bar) {
    bar.innerHTML = SITE_DATA.tabs.map((tab) => `
      <button class="${tab.id === currentTab ? 'active' : ''}" onclick="switchTab('${tab.id}')">
        ${esc(tab.name)}<span class="n">${tab.providers.length}</span>
      </button>
    `).join('');
  }
}

function renderCategories() {
  const cats = categories();
  const list = $('catList');
  if (list) {
    list.innerHTML = '<button type="button" data-value="" class="' + (selectedCategory === '' ? 'selected' : '') + '">All categories</button>' + cats.map((c) => '<button type="button" data-value="' + esc(c) + '" class="' + (selectedCategory === c ? 'selected' : '') + '">' + esc(c) + '</button>').join('');
    list.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => {
      selectedCategory = b.getAttribute('data-value');
      $('catLabel').textContent = selectedCategory || 'All categories';
      list.querySelectorAll('button').forEach((x) => x.classList.toggle('selected', x === b));
      closeCselects();
      render();
    }));
  }
  if ($('catLabel')) $('catLabel').textContent = selectedCategory || 'All categories';
  $('count').textContent = String(getProviders().length);
  $('cats').textContent = String(categories().length);
  $('date').textContent = SITE_DATA.lastUpdated;
}

function toggleCselect(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const was = el.classList.contains('open');
  closeCselects();
  if (!was) el.classList.add('open');
}
function closeCselects() {
  document.querySelectorAll('.cselect.open').forEach((el) => el.classList.remove('open'));
}
function setSort(mode, label) {
  sortMode = mode;
  if ($('sortLabel')) $('sortLabel').textContent = label;
  document.querySelectorAll('#sortList button').forEach((b) => b.classList.toggle('selected', b.getAttribute('data-value') === mode));
  closeCselects();
  render();
}

function scoreClass(score) {
  if (score < 4) return 'score score-low';
  if (score < 7) return 'score score-mid';
  return 'score';
}

function activeTiers() {
  const boxes = document.querySelectorAll('.fTier');
  if (!boxes.length) return null;
  return new Set([...boxes].filter((b) => b.checked).map((b) => b.value));
}

function render() {
  const query = $('search').value.toLowerCase().trim();
  const selCat = selectedCategory;
  const sortM = sortMode;
  const wantVerified = $('fVerified') ? $('fVerified').checked : true;
  const wantUnverified = $('fUnverified') ? $('fUnverified').checked : true;
  const tiers = activeTiers();

  let items = rankingData().filter((provider) => {
    const haystack = [provider.name, provider.category, provider.description, ...(provider.tags || [])].join(' ').toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesCategory = !selCat || provider.category === selCat;
    const matchesVer = (provider.verified && wantVerified) || (!provider.verified && wantUnverified);
    const matchesTier = !tiers || tiers.has(tierFor(provider));
    return matchesQuery && matchesCategory && matchesVer && matchesTier;
  });

  if (sortM === 'score') {
    items.sort((a, b) => a.score - b.score);
  }

  if (sortM === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  $('resultText').textContent = `Showing ${items.length} of ${getProviders().length}`;
  const clearBtn = $('clearFilters');
  if (clearBtn) clearBtn.classList.toggle('show', !!(query || selCat || sortM !== 'rank'));

  if (!items.length) {
    $('grid').innerHTML = '<div class="empty">No providers match these filters.</div>';
    return;
  }

  const leaderboard = rankingData();

  $('grid').innerHTML = items.map((provider) => {
    const rank = leaderboard.findIndex((item) => item.name === provider.name && item.logo === provider.logo) + 1;
    const tier = tierFor(provider);
    const statusBadge = provider.statusText ? `<span class="status-badge">${esc(provider.statusText)}</span>` : '';

    return `
      <article class="card" onclick="openProvider(${provider._i})">
        <div class="card-top">
          <img class="logo" src="${esc(provider.logo)}" alt="${esc(provider.name)}" onerror="this.style.visibility='hidden'">
          <div class="card-title">
            <div class="name-row"><span class="name">${esc(provider.name)}</span>${provider.verified ? '<span class="check">✔</span>' : ''}${statusBadge}</div>
            <div class="cat-row"><span class="cat">⇄ ${esc(provider.category || 'Uncategorised')}</span>${(provider.tags || []).slice(0, 2).map((tag) => `<span class="cat">▪ ${esc(tag)}</span>`).join('')}</div>
          </div>
        </div>
        <div class="desc">${esc(provider.description)}</div>
        <div class="card-foot">
          <span class="score-box">${Number(provider.score).toFixed(0)}</span>
          <span class="kyc-pill">${provider.verified ? '🛡 Verified' : 'Unverified'}</span>
          <span class="foot-icons" title="Tier ${tier} · Rank #${rank}">◉ ₿ ⚡</span>
        </div>
      </article>
    `;
  }).join('');
}

function openProvider(index, updateHash = true) {
  const provider = getProviders()[index];
  if (!provider) return;

  const tier = tierFor(provider);

  if (updateHash) {
    history.pushState(null, '', `#${currentTab}/${slugify(provider.name)}`);
  }

  $('detail').innerHTML = `
    <div class="detail-head">
      <img class="logo" src="${esc(provider.logo)}" alt="${esc(provider.name)}" onerror="this.style.visibility='hidden'">
      <div>
        <div class="detail-name">${esc(provider.name)}</div>
        <div class="tier tier-${tier}" style="display:inline-block;margin-top:8px">TIER ${tier}</div>
        ${provider.statusText ? `<div class="status-badge modal-status">${esc(provider.statusText)}</div>` : ''}
      </div>
    </div>
    <div class="detail-score">${Number(provider.score).toFixed(1)} <small style="font-size:13px;color:#8991a0">/ 10</small></div>
    <p class="detail-text">${esc(provider.description)}</p>
    ${provider.name.toLowerCase() === 'void v2 spoofer' ? '<a href="https://pastebin.com/4ttbU32m" target="_blank" rel="noopener noreferrer" class="nav-btn" style="display:inline-block;margin-top:12px">VIEW PROOF ↗</a>' : ''}
    <div class="tags">${(provider.tags || []).map((tag) => `<span class="tag">${esc(tag)}</span>`).join('')}</div>
    <div class="detail-grid">
      <div class="detail-box"><b>Category</b><span>${esc(provider.category || 'Uncategorised')}</span></div>
      <div class="detail-box"><b>Status</b><span>${provider.verified ? 'Verified' : 'Unverified'}</span></div>
      <div class="detail-box"><b>Pros</b><span>${(provider.pros || []).map((item) => esc(item)).join(' · ') || '—'}</span></div>
      <div class="detail-box"><b>Cons</b><span>${(provider.cons || []).map((item) => esc(item)).join(' · ') || '—'}</span></div>
    </div>
    ${provider.website ? `<p style="margin-top:18px"><a class="nav-btn" href="${esc(provider.website)}" target="_blank" rel="noopener">Visit provider ↗</a></p>` : ''}
  `;

  $('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('overlay').classList.remove('open');
  document.body.style.overflow = '';
  history.pushState(null, '', location.pathname + location.search);
}

function closeIfBackdrop(event) {
  if (event.target.id === 'overlay') closeModal();
}

function ensureRankingsView() {
  const methodPage = document.getElementById('methodPage');
  const paidPage = document.getElementById('paidPage');
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');

  if (methodPage) methodPage.classList.remove('active');
  if (paidPage) paidPage.classList.remove('active');
  if (mainEl) mainEl.style.display = '';
  if (footerEl) footerEl.style.display = '';
}

function scrollToRankings() {
  ensureRankingsView();
  const rankingSection = document.getElementById('rankingSection');
  if (rankingSection) {
    rankingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function openMethodology() {
  ensureRankingsView();
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');

  if (mainEl) mainEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'none';
  document.getElementById('methodPage').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function closeMethodology() {
  document.getElementById('methodPage').classList.remove('active');
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');

  if (mainEl) mainEl.style.display = '';
  if (footerEl) footerEl.style.display = '';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function openPaidPromotion() {
  ensureRankingsView();
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');

  if (mainEl) mainEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'none';
  document.getElementById('paidPage').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function closePaidPromotion() {
  document.getElementById('paidPage').classList.remove('active');
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');

  if (mainEl) mainEl.style.display = '';
  if (footerEl) footerEl.style.display = '';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function resetDefaultFilters() {
  if ($('fVerified')) $('fVerified').checked = true;
  if ($('fUnverified')) $('fUnverified').checked = true;
  document.querySelectorAll('.fTier').forEach((b) => { b.checked = true; });
  selectedCategory = '';
  sortMode = 'rank';
  if ($('catLabel')) $('catLabel').textContent = 'All categories';
  if ($('sortLabel')) $('sortLabel').textContent = 'Score (High \u2192 Low)';
  document.querySelectorAll('#catList button').forEach((b, i) => b.classList.toggle('selected', i === 0));
  document.querySelectorAll('#sortList button').forEach((b) => b.classList.toggle('selected', b.getAttribute('data-value') === 'rank'));
}

function showAll(updateHash = true, scroll = true) {
  ensureRankingsView();
  currentTab = 'all';
  if (updateHash) history.pushState(null, '', '#all');
  if ($('search')) $('search').value = '';
  resetDefaultFilters();
  $('tabDescription').textContent = 'A full leaderboard covering every provider across all tabs.';
  $('leaderboardTitle').textContent = 'All Providers';
  renderTabs();
  renderCategories();
  render();
  if (scroll) scrollToRankings();
}

function toggleMenu() {
  $('sideMenu').classList.toggle('open');
  $('menuBackdrop').classList.toggle('open');
}

function switchTab(id, updateHash = true) {
  const tab = SITE_DATA.tabs.find((item) => item.id === id);
  if (!tab) return;

  currentTab = id;
  if (updateHash) history.pushState(null, '', `#${id}`);
  if ($('search')) $('search').value = '';
  resetDefaultFilters();
  $('tabDescription').textContent = tab.description;
  $('leaderboardTitle').textContent = `${tab.name} Leaderboard`;

  renderTabs();
  renderCategories();
  render();
  toggleMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openFromHash() {
  const hash = location.hash.replace(/^#/, '');
  if (!hash) {
    showAll(false, false);
    return;
  }

  const [tabId, slug] = hash.split('/');
  if (tabId === 'all') {
    showAll(false, false);
    return;
  }
  const tab = SITE_DATA.tabs.find((item) => item.id === tabId);
  if (!tab) return;

  currentTab = tabId;
  $('tabDescription').textContent = tab.description;
  $('leaderboardTitle').textContent = `${tab.name} Leaderboard`;
  renderTabs();
  renderCategories();
  render();

  const targetIndex = tab.providers.findIndex((provider) => slugify(provider.name) === slug);
  if (targetIndex > -1) openProvider(targetIndex, false);
}

function clearAllFilters() {
  if ($('search')) $('search').value = '';
  resetDefaultFilters();
  render();
}

window.addEventListener('hashchange', openFromHash);
if ($('search')) $('search').addEventListener('input', render);
if ($('fVerified')) $('fVerified').addEventListener('change', render);
if ($('fUnverified')) $('fUnverified').addEventListener('change', render);
document.querySelectorAll('.fTier').forEach((b) => b.addEventListener('change', render));
document.querySelectorAll('#sortList button').forEach((b) => b.addEventListener('click', () => setSort(b.getAttribute('data-value'), b.textContent)));
document.addEventListener('click', (e) => { if (!e.target.closest('.cselect')) closeCselects(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCselects(); });

function closePromo() {
  const promo = document.getElementById('promoOverlay');
  if (promo) promo.style.display = 'none';
  document.body.style.overflow = '';
}

function toggleTheme() {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(next);
}
function applyTheme(mode) {
  if (mode === 'light') document.documentElement.setAttribute('data-theme', 'light');
  else document.documentElement.removeAttribute('data-theme');
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = mode === 'light' ? '◑' : '◐';
  try { localStorage.setItem('tapped-theme', mode); } catch (e) {}
}
(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('tapped-theme'); } catch (e) {}
  if (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) saved = 'light';
  applyTheme(saved === 'light' ? 'light' : 'dark');
})();

function hideLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader || loader.classList.contains('hidden')) return;
  loader.classList.add('hidden');
  document.body.classList.remove('loading');
  document.body.style.overflow = '';
}
document.body.classList.add('loading');
window.addEventListener('load', () => setTimeout(hideLoader, 250));
document.addEventListener('DOMContentLoaded', () => setTimeout(hideLoader, 400));
setTimeout(hideLoader, 1500);

renderTabs();
renderCategories();
render();
openFromHash();

window.addEventListener('click', (event) => {
  const clickable = event.target.closest('button, a, .card');
  if (!clickable) return;

  const sound = document.getElementById('clickSound');
  if (!sound) return;

  sound.currentTime = 0;
  sound.play().catch(() => {});
});
