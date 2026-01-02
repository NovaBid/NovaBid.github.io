/**
 * How It Works Page - Tab Switching Logic
 * Handles switching between buyer and vendor content tabs
 */

// State management
let currentTab = 'buyer';

/**
 * Switch between tabs
 * @param {string} tab - 'buyer' or 'vendor'
 */
function switchTab(tab) {
  if (currentTab === tab) return;

  currentTab = tab;

  // Update tab buttons
  const buyerTab = document.getElementById('buyer-tab');
  const vendorTab = document.getElementById('vendor-tab');
  const buyerContent = document.getElementById('buyer-content');
  const vendorContent = document.getElementById('vendor-content');
  const indicator = document.getElementById('slider-indicator');

  if (tab === 'buyer') {
    buyerTab.classList.add('active');
    vendorTab.classList.remove('active');
    buyerContent.classList.remove('hidden');
    vendorContent.classList.add('hidden');
    indicator.style.width = buyerTab.offsetWidth + 'px';
    indicator.style.transform = 'translateX(0)';
  } else {
    vendorTab.classList.add('active');
    buyerTab.classList.remove('active');
    vendorContent.classList.remove('hidden');
    buyerContent.classList.add('hidden');
    indicator.style.width = vendorTab.offsetWidth + 'px';
    indicator.style.transform = `translateX(${buyerTab.offsetWidth}px)`;
  }
}

/**
 * Initialize slider indicator position
 */
function initializeSlider() {
  const buyerTab = document.getElementById('buyer-tab');
  const indicator = document.getElementById('slider-indicator');
  if (buyerTab && indicator) {
    indicator.style.width = buyerTab.offsetWidth + 'px';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeSlider();
});

// Handle window resize to adjust slider
window.addEventListener('resize', () => {
  initializeSlider();
  if (currentTab === 'vendor') {
    const buyerTab = document.getElementById('buyer-tab');
    const vendorTab = document.getElementById('vendor-tab');
    const indicator = document.getElementById('slider-indicator');
    if (buyerTab && vendorTab && indicator) {
      indicator.style.width = vendorTab.offsetWidth + 'px';
      indicator.style.transform = `translateX(${buyerTab.offsetWidth}px)`;
    }
  }
});
