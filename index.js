// index.js — Content Protection Script
// Disables right-click context menu, text selection, and copy/cut keyboard shortcuts.

(function () {
  'use strict';

  // 1. Disable right-click context menu
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  // 2. Disable text selection via CSS (applied dynamically so it works even
  //    if the stylesheet fails to load for any reason)
  document.addEventListener('DOMContentLoaded', function () {
    document.body.style.userSelect         = 'none';
    document.body.style.webkitUserSelect   = 'none'; // Safari
    document.body.style.msUserSelect       = 'none'; // IE/Edge legacy
    document.body.style.mozUserSelect      = 'none'; // Firefox legacy
  });

  // 3. Disable copy, cut, and paste keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    const key = e.key.toLowerCase();
    if (e.ctrlKey || e.metaKey) {        // Ctrl (Windows/Linux) or Cmd (Mac)
      if (key === 'c' || key === 'x' || key === 'u' || key === 's') {
        e.preventDefault();
        return false;
      }
    }
  });

  // 4. Disable the copy and cut events directly
  document.addEventListener('copy', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('cut', function (e) {
    e.preventDefault();
    return false;
  });

  // 5. Prevent drag-to-select on images and links
  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    return false;
  });

})();
