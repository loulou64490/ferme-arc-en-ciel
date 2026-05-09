/**
 * Ferme Arc-en-Ciel — Main Script
 * Handles: sticky header, mobile menu close
 * Smooth scrolling is handled by CSS (scroll-behavior + scroll-margin-top)
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const header = document.getElementById('site-header');

  /* ---- Sticky Header ---- */
  function updateHeaderState() {
    const scrolled = window.scrollY > 10;
    const menuOpen = navToggle && navToggle.checked;

    if (scrolled || menuOpen) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderState, { passive: true });

  if (navToggle) {
    navToggle.addEventListener('change', updateHeaderState);
  }

  updateHeaderState();

  /* ---- Close Mobile Menu on Link Click ---- */
  document.querySelectorAll('.main-nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      if (navToggle) navToggle.checked = false;
      updateHeaderState();
    });
  });
});
