(function () {
  'use strict';

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.body.style.userSelect         = 'none';
    document.body.style.webkitUserSelect   = 'none'; // Safari
    document.body.style.msUserSelect       = 'none'; // IE/Edge legacy
    document.body.style.mozUserSelect      = 'none'; // Firefox legacy
  });

  document.addEventListener('keydown', function (e) {
    const key = e.key.toLowerCase();
    if (e.ctrlKey || e.metaKey) {        // Ctrl (Windows/Linux) or Cmd (Mac)
      if (key === 'c' || key === 'x' || key === 'u' || key === 's') {
        e.preventDefault();
        return false;
      }
    }
  });

  document.addEventListener('copy', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('cut', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    return false;
  });

})();
