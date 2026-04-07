/* ─── DB DIAGRAM (style phpMyAdmin) ─────────── */
(function () {
  function draw() {
    var NS = 'http://www.w3.org/2000/svg';
    document.querySelectorAll('.det-db-diagram').forEach(function (diagram) {
      var svg = document.createElementNS(NS, 'svg');
      svg.classList.add('det-db-diagram-svg');
      svg.setAttribute('aria-hidden', 'true');
      svg.style.width  = diagram.offsetWidth  + 'px';
      svg.style.height = diagram.offsetHeight + 'px';

      // Arrowhead marker
      var defs = document.createElementNS(NS, 'defs');
      defs.innerHTML =
        '<marker id="dba" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">' +
          '<path d="M1,1 L6,3.5 L1,6" fill="none" stroke="rgba(96,165,250,0.85)" stroke-width="1.4"/>' +
        '</marker>';
      svg.appendChild(defs);
      diagram.insertBefore(svg, diagram.firstChild);

      diagram.querySelectorAll('[data-fk]').forEach(function (fkEl) {
        var parts   = fkEl.dataset.fk.split('.');
        var tgtTbl  = diagram.querySelector('[data-table="' + parts[0] + '"]');
        if (!tgtTbl) return;
        var tgtCol  = tgtTbl.querySelector('[data-col="' + parts[1] + '"]');
        if (!tgtCol) return;

        var srcTbl = fkEl.closest('.det-db-tbl');
        var sx  = parseInt(srcTbl.style.left) || 0;
        var sy  = parseInt(srcTbl.style.top)  || 0;
        var tx  = parseInt(tgtTbl.style.left) || 0;
        var ty  = parseInt(tgtTbl.style.top)  || 0;
        var sw  = srcTbl.offsetWidth;
        var tw  = tgtTbl.offsetWidth;

        var fkY = sy + fkEl.offsetTop  + fkEl.offsetHeight  / 2;
        var pkY = ty + tgtCol.offsetTop + tgtCol.offsetHeight / 2;

        var x1, x2, d;
        var sameCol = Math.abs(sx - tx) < 40;

        if (sameCol) {
          // Stacked vertically → U-curve on the right
          var xr = Math.max(sx + sw, tx + tw) + 28;
          d = 'M ' + (sx + sw) + ' ' + fkY +
              ' L ' + xr + ' ' + fkY +
              ' L ' + xr + ' ' + pkY +
              ' L ' + (tx + tw) + ' ' + pkY;
        } else if (sx > tx) {
          // FK is right of target
          x1 = sx; x2 = tx + tw;
          var cp = Math.min(Math.abs(x1 - x2) * 0.45, 60);
          d = 'M ' + x1 + ' ' + fkY +
              ' C ' + (x1 - cp) + ' ' + fkY + ',' + (x2 + cp) + ' ' + pkY + ',' + x2 + ' ' + pkY;
        } else {
          // FK is left of target
          x1 = sx + sw; x2 = tx;
          var cp2 = Math.min(Math.abs(x2 - x1) * 0.45, 60);
          d = 'M ' + x1 + ' ' + fkY +
              ' C ' + (x1 + cp2) + ' ' + fkY + ',' + (x2 - cp2) + ' ' + pkY + ',' + x2 + ' ' + pkY;
        }

        var path = document.createElementNS(NS, 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'rgba(96,165,250,0.5)');
        path.setAttribute('stroke-width', '1.5');
        path.setAttribute('stroke-dasharray', '5,3');
        path.setAttribute('marker-end', 'url(#dba)');
        svg.appendChild(path);

        // Dot at FK end
        var dot = document.createElementNS(NS, 'circle');
        dot.setAttribute('cx', sameCol ? sx + sw : (sx > tx ? x1 : x1));
        dot.setAttribute('cy', fkY);
        dot.setAttribute('r', '3');
        dot.setAttribute('fill', 'rgba(129,140,248,0.85)');
        svg.appendChild(dot);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', draw);
  } else {
    setTimeout(draw, 0);
  }
})();

/* ─── THEME + FONT SIZE INIT ─────────────────── */
(function () {
  const t = localStorage.getItem('theme') || 'light';
  document.documentElement.dataset.theme = t;
  const fs = localStorage.getItem('fontSize');
  if (fs) document.documentElement.style.fontSize = fs + 'px';
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
