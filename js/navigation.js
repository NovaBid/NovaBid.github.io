/**
 * Navigation Module
 * Handles navbar scroll effects and responsive behavior
 */

const Navigation = {
  /**
   * Initialize navbar scroll effects
   */
  initScrollEffects() {
    const header = document.querySelector('header');
    const navShadow = document.getElementById('nav-shadow');

    if (!header || !navShadow) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Show/hide shadow on scroll
      if (currentScroll > 10) {
        navShadow.classList.add('nav-shadow-visible');
      } else {
        navShadow.classList.remove('nav-shadow-visible');
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    });
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  Navigation.initScrollEffects();
});
