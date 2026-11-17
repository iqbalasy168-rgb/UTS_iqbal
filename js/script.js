document.addEventListener('DOMContentLoaded', function () {
  const currentPage = document.body.dataset.currentPage || 'index.html';
  document.querySelectorAll('.primary-nav a[data-page]').forEach(function (link) {
    if (link.dataset.page === currentPage) link.setAttribute('aria-current', 'page');
  });

  // Menu hamburger untuk layar kecil.
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = primaryNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    });
    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        primaryNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Buka menu navigasi');
      });
    });
  }

  // Filter dan pencarian menu pada halaman katalog.
  const menuGrid = document.querySelector('#menu-grid');
  if (menuGrid) {
    const cards = Array.from(menuGrid.querySelectorAll('.menu-card'));
    const filterButtons = document.querySelectorAll('.filter-button');
    const searchInput = document.querySelector('#menu-search');
    const resultCount = document.querySelector('#menu-count');
    const emptyMessage = document.querySelector('#empty-menu');
    let activeCategory = 'all';

    function updateMenu() {
      const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
      let visibleCount = 0;
      cards.forEach(function (card) {
        const categoryMatch = activeCategory === 'all' || card.dataset.category === activeCategory;
        const nameMatch = card.dataset.name.includes(keyword) || card.textContent.toLowerCase().includes(keyword);
        const shouldShow = categoryMatch && nameMatch;
        card.hidden = !shouldShow;
        if (shouldShow) visibleCount += 1;
      });
      if (resultCount) resultCount.textContent = 'Menampilkan ' + visibleCount + ' menu';
      if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
    }

    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        activeCategory = button.dataset.filter;
        filterButtons.forEach(function (item) {
          const selected = item === button;
          item.classList.toggle('is-active', selected);
          item.setAttribute('aria-pressed', String(selected));
        });
        updateMenu();
      });
    });
    if (searchInput) searchInput.addEventListener('input', updateMenu);
  }
});
