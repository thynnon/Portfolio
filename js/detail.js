/* ─── THEME INIT ─────────────────────────────── */
(function () {
  const t = localStorage.getItem('theme') || 'dark';
  document.documentElement.dataset.theme = t;
})();

/* ─── LIGHTBOX ───────────────────────────────── */
(function () {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="Fermer">✕</button>
    <img class="lightbox-img" src="" alt="">
  `;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('.lightbox-img');

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 220);
  }

  document.querySelectorAll('figure.screenshot img').forEach(img => {
    img.classList.add('zoomable');
    img.addEventListener('click', () => open(img.src, img.alt));
  });

  lb.querySelector('.lightbox-close').addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
