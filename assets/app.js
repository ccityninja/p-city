(function () {
  'use strict';

  // ---- players filter ----
  var search = document.getElementById('q');
  if (search) {
    var status = document.getElementById('status');
    var count = document.getElementById('count');
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-person]'));
    function apply() {
      var terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
      var shown = 0;
      cards.forEach(function (card) {
        var hay = card.getAttribute('data-search') || '';
        var ok = terms.every(function (t) { return hay.indexOf(t) !== -1; });
        if (ok && status.value !== 'all') { ok = card.getAttribute('data-status') === status.value; }
        card.hidden = !ok;
        if (ok) { shown++; }
      });
      count.textContent = shown + ' of ' + cards.length + ' case records';
    }
    search.addEventListener('input', apply);
    status.addEventListener('change', apply);
    var clear = document.getElementById('clear');
    if (clear) {
      clear.addEventListener('click', function () {
        search.value = ''; status.value = 'all'; apply(); search.focus();
      });
    }
    apply();
    // "/" jumps to search, like a proper dossier.
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== search && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        e.preventDefault(); search.focus();
      }
    });
  }

  // ---- chapter progress ----
  var bar = document.getElementById('progress');
  if (bar) {
    var update = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = pct.toFixed(1) + '%';
    };
    document.addEventListener('scroll', update, { passive: true });
    update();
  }
})();
