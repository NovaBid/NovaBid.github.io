/**
 * UI Effects Module
 * Handles animated stars, bid counter, and other visual effects
 */

const UIEffects = {
  /**
   * Generate animated stars in the hero section
   * @param {string} containerId - ID of the container for stars
   * @param {number} starCount - Number of stars to generate
   */
  generateStars(containerId, starCount = 50) {
    const starsContainer = document.getElementById(containerId);
    if (!starsContainer) return;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      // Random size (1-3px)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random position
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Random animation delay
      star.style.animation = `pulse-slow ${Math.random() * 5 + 3}s infinite`;

      starsContainer.appendChild(star);
    }
  },

  /**
   * Simulate live bid counter updates
   * @param {string} selector - CSS selector for bid element
   * @param {number} initialBid - Starting bid amount
   * @param {number} interval - Update interval in milliseconds
   */
  initBidCounter(selector, initialBid = 24500, interval = 4000) {
    const bidElement = document.querySelector(selector);
    if (!bidElement) return;

    let currentBid = initialBid;
    setInterval(() => {
      const increment = Math.floor(Math.random() * 300) + 100;
      currentBid += increment;
      bidElement.textContent = `$${currentBid.toLocaleString()}`;
    }, interval);
  }
};

// Initialize effects on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  UIEffects.generateStars('stars');
  UIEffects.initBidCounter('.live-counter');
});
