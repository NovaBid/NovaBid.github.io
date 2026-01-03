/**
 * Watchlist Page - Handles watchlist display and interactions
 */
document.addEventListener('DOMContentLoaded', function() {
  // Check authentication
  if (!isAuthenticated()) {
    // Show authentication required message
    document.getElementById('auth-required-message').classList.remove('hidden');
    document.getElementById('watchlist-count-section').classList.add('hidden');
    document.getElementById('watchlist-grid').classList.add('hidden');
    return;
  }

  // Load and display watchlist
  loadWatchlist();
});

/**
 * Load and display watchlist items
 */
function loadWatchlist() {
  const watchlistGrid = document.getElementById('watchlist-grid');
  const emptyState = document.getElementById('empty-state');
  const watchlistCountElement = document.getElementById('watchlist-count');

  // Get watchlist lots (already sorted by expiration date)
  const lots = getWatchlistLots();

  // Update count
  watchlistCountElement.textContent = lots.length;

  // Show empty state if no items
  if (lots.length === 0) {
    emptyState.classList.remove('hidden');
    watchlistGrid.classList.add('hidden');
    return;
  }

  // Hide empty state and show grid
  emptyState.classList.add('hidden');
  watchlistGrid.classList.remove('hidden');

  // Clear existing content
  watchlistGrid.innerHTML = '';

  // Render each lot card with expiration info
  lots.forEach(lot => {
    const card = createWatchlistLotCard(lot);
    watchlistGrid.innerHTML += card;
  });

  // Add event listeners for remove buttons after cards are rendered
  document.querySelectorAll('[data-remove-lot]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const lotId = parseInt(this.getAttribute('data-remove-lot'));
      removeFromWatchlist(lotId);
      // Reload watchlist
      loadWatchlist();
    });
  });
}

/**
 * Create a watchlist lot card with expiration date and remove button
 * @param {object} lot - Lot object with expiration date
 * @returns {string} HTML string for the card
 */
function createWatchlistLotCard(lot) {
  const startingBid = lot.starting_bid || 0;
  const expirationDate = lot.expirationDate.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  // Calculate time remaining
  const now = new Date();
  const timeRemaining = lot.expirationDate - now;
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  let timeRemainingText = '';
  let timeRemainingColor = 'text-green-600';
  
  if (timeRemaining < 0) {
    timeRemainingText = 'Expired';
    timeRemainingColor = 'text-red-600';
  } else if (daysRemaining === 0 && hoursRemaining < 24) {
    timeRemainingText = `${hoursRemaining}h remaining`;
    timeRemainingColor = 'text-red-600';
  } else if (daysRemaining < 2) {
    timeRemainingText = `${daysRemaining}d ${hoursRemaining}h remaining`;
    timeRemainingColor = 'text-amber-600';
  } else {
    timeRemainingText = `${daysRemaining} days remaining`;
    timeRemainingColor = 'text-green-600';
  }

  return `
    <div class="relative">
      <a href="/bidder/lot.html?id=${lot.lotId}" class="block no-underline" aria-label="View lot: ${lot.title}">
        <div class="card-hover bg-white rounded-2xl p-6 border border-cosmic-100 flex flex-col">
          <div class="relative mb-4">
            <img src="${lot.thumb}" alt="${lot.title}" class="rounded-lg w-full h-48 object-cover">
            <!-- Remove button -->
            <button 
              data-remove-lot="${lot.lotId}"
              class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition shadow-lg z-10"
              title="Remove from watchlist"
              aria-label="Remove from watchlist">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <h3 class="text-xl font-bold mb-2">${lot.title}</h3>
          <p class="text-gray-600 mb-2 flex-grow">${lot.description}</p>
          <p class="text-sm text-gray-500 mb-2">
            <i class="fas fa-gavel mr-1"></i>${lot.auctionTitle}
          </p>
          <div class="text-lg font-bold text-nova-400 mb-2">Starting Bid: $${startingBid.toLocaleString()}</div>
          <div class="border-t border-gray-200 pt-3 mt-2">
            <p class="text-sm text-gray-600 mb-1">
              <i class="fas fa-clock mr-1"></i>Expires: ${expirationDate}
            </p>
            <p class="text-sm font-bold ${timeRemainingColor}">
              ${timeRemainingText}
            </p>
          </div>
        </div>
      </a>
    </div>
  `;
}
