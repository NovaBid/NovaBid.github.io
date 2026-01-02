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
  },

  /**
   * Initialize tab slider functionality
   * Handles tab switching with animated indicator
   */
  initTabSlider() {
    // Only initialize if tab elements exist on the page
    const buyerTab = document.getElementById('buyer-tab');
    const vendorTab = document.getElementById('vendor-tab');
    const indicator = document.getElementById('slider-indicator');
    
    if (!buyerTab || !vendorTab || !indicator) return;

    // State management
    let currentTab = 'buyer';

    /**
     * Switch between tabs
     * @param {string} tab - 'buyer' or 'vendor'
     */
    const switchTab = (tab) => {
      if (currentTab === tab) return;

      currentTab = tab;

      const buyerContent = document.getElementById('buyer-content');
      const vendorContent = document.getElementById('vendor-content');

      if (tab === 'buyer') {
        buyerTab.classList.add('active');
        vendorTab.classList.remove('active');
        if (buyerContent) buyerContent.classList.remove('hidden');
        if (vendorContent) vendorContent.classList.add('hidden');
        indicator.style.width = buyerTab.offsetWidth + 'px';
        indicator.style.transform = 'translateX(0)';
      } else {
        vendorTab.classList.add('active');
        buyerTab.classList.remove('active');
        if (vendorContent) vendorContent.classList.remove('hidden');
        if (buyerContent) buyerContent.classList.add('hidden');
        indicator.style.width = vendorTab.offsetWidth + 'px';
        indicator.style.transform = `translateX(${buyerTab.offsetWidth}px)`;
      }
    };

    /**
     * Initialize slider indicator position
     */
    const initializeSlider = () => {
      indicator.style.width = buyerTab.offsetWidth + 'px';
    };

    // Add event listeners to tab buttons
    buyerTab.addEventListener('click', () => switchTab('buyer'));
    vendorTab.addEventListener('click', () => switchTab('vendor'));

    // Initialize on load
    initializeSlider();

    // Handle window resize to adjust slider
    window.addEventListener('resize', () => {
      initializeSlider();
      if (currentTab === 'vendor' && buyerTab && vendorTab && indicator) {
        indicator.style.width = vendorTab.offsetWidth + 'px';
        indicator.style.transform = `translateX(${buyerTab.offsetWidth}px)`;
      }
    });
  }
};

// Initialize effects on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  UIEffects.generateStars('stars');
  UIEffects.initBidCounter('.live-counter');
  UIEffects.initTabSlider();
});
