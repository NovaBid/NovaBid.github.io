/**
 * My Bids Page - Handles my bids display and interactions
 */
document.addEventListener('DOMContentLoaded', function() {
  // Check authentication
  if (!isAuthenticated()) {
    // Show authentication required message
    document.getElementById('auth-required-message').classList.remove('hidden');
    document.getElementById('bids-count-section').classList.add('hidden');
    document.getElementById('my-bids-grid').classList.add('hidden');
    return;
  }

  // Load and display my bids
  loadMyBids();
});

/**
 * Load and display user's bid lots
 */
function loadMyBids() {
  const myBidsGrid = document.getElementById('my-bids-grid');
  const emptyState = document.getElementById('empty-state');
  const bidsCountElement = document.getElementById('bids-count');

  // Get user's bid lots (already sorted by expiration date)
  const lots = getUserBidLots();

  // Update count
  bidsCountElement.textContent = lots.length;

  // Show empty state if no items
  if (lots.length === 0) {
    emptyState.classList.remove('hidden');
    myBidsGrid.classList.add('hidden');
    return;
  }

  // Hide empty state and show grid
  emptyState.classList.add('hidden');
  myBidsGrid.classList.remove('hidden');

  // Clear existing content
  myBidsGrid.innerHTML = '';

  // Render each lot card - build HTML string first for better performance
  const cardsHtml = lots.map(lot => createCompactBidLotCard(lot)).join('');
  myBidsGrid.innerHTML = cardsHtml;

  // Add event listeners for watchlist buttons after cards are rendered
  document.querySelectorAll('[data-watchlist-lot]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const lotId = parseInt(this.getAttribute('data-watchlist-lot'));
      toggleWatchlist(lotId);
      
      // Update button appearance
      const inWatchlist = isInWatchlist(lotId);
      updateWatchlistButtonAppearance(this, inWatchlist);
    });
  });

  // Add event listeners for place bid buttons after cards are rendered
  document.querySelectorAll('[data-place-bid]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const lotId = parseInt(this.getAttribute('data-place-bid'));
      const lot = mockLots.find(l => l.lotId === lotId);
      
      if (!lot) {
        alert('Lot not found');
        return;
      }

      const currentBid = getCurrentBid(lotId, lot.starting_bid);
      const nextBid = calculateNextBid(currentBid);
      
      // Place the bid
      const result = placeBid(lotId, nextBid, lot.starting_bid);
      
      if (result.success) {
        // Reload the page to show updated information
        loadMyBids();
      } else {
        alert(result.message);
      }
    });
  });
}

/**
 * Create a compact lot card for My Bids page
 * @param {object} lot - Lot object with bid information
 * @returns {string} HTML string for the compact card
 */
function createCompactBidLotCard(lot) {
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
  } else if (daysRemaining === 0) {
    timeRemainingText = `${hoursRemaining}h remaining`;
    timeRemainingColor = 'text-red-600';
  } else if (daysRemaining < 2) {
    timeRemainingText = `${daysRemaining}d ${hoursRemaining}h remaining`;
    timeRemainingColor = 'text-amber-600';
  } else {
    timeRemainingText = `${daysRemaining} days remaining`;
    timeRemainingColor = 'text-green-600';
  }

  // Determine bidder status
  const bidderStatus = lot.isHighBidder 
    ? '<span class="text-green-600 font-bold"><i class="fas fa-check-circle mr-1"></i>You are the high bidder</span>'
    : '<span class="text-red-600 font-bold"><i class="fas fa-exclamation-circle mr-1"></i>You are not the high bidder</span>';

  // Determine card border color
  const borderColor = lot.isHighBidder ? 'border-green-500' : 'border-red-500';

  // Watchlist button state
  const inWatchlist = isInWatchlist(lot.lotId);
  const { buttonText, btnClass } = getWatchlistButtonClasses(inWatchlist);

  // Place bid button state
  const placeBidDisabled = lot.isHighBidder ? 'disabled' : '';
  const placeBidBtnClass = lot.isHighBidder 
    ? 'bg-gray-400 cursor-not-allowed' 
    : 'bg-cosmic-600 hover:bg-cosmic-700 cursor-pointer';

  return `
    <div class="bg-white rounded-2xl border-2 ${borderColor} overflow-hidden">
      <a href="/bidder/lot.html?id=${lot.lotId}" class="flex flex-col md:flex-row no-underline">
        <!-- Thumbnail - left side, full height -->
        <div class="md:w-48 md:h-auto h-48 flex-shrink-0">
          <img src="${lot.thumb}" alt="${lot.title}" class="w-full h-full object-cover">
        </div>
        
        <!-- Content - right side -->
        <div class="flex-1 p-4 md:p-6 flex flex-col">
          <h3 class="text-xl md:text-2xl font-bold mb-2">${lot.title}</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-sm">
            <div>
              <p class="text-gray-500">End Date & Time</p>
              <p class="font-semibold">${expirationDate}</p>
              <p class="text-sm ${timeRemainingColor} font-semibold">${timeRemainingText}</p>
            </div>
            
            <div>
              <p class="text-gray-500">Bidder Status</p>
              <p class="text-sm">${bidderStatus}</p>
            </div>
            
            <div>
              <p class="text-gray-500">Current Bid</p>
              <p class="font-bold text-nova-400 text-lg">$${lot.currentBid.toLocaleString()}</p>
            </div>
            
            <div>
              <p class="text-gray-500">My High Bid</p>
              <p class="font-bold text-cosmic-600 text-lg">$${lot.userHighBid.toLocaleString()}</p>
            </div>
            
            <div>
              <p class="text-gray-500">Next Bid Increment</p>
              <p class="font-semibold text-gray-700">$${lot.nextBidIncrement.toLocaleString()}</p>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex gap-2 mt-auto">
            <button 
              data-watchlist-lot="${lot.lotId}"
              class="watchlist-btn ${btnClass} font-bold px-4 py-2 rounded-lg transition shadow-md flex items-center justify-center"
              title="${inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}">
              <i class="fas fa-heart mr-2"></i>${buttonText}
            </button>
            <button 
              data-place-bid="${lot.lotId}"
              ${placeBidDisabled}
              class="${placeBidBtnClass} text-white font-bold px-4 py-2 rounded-lg transition shadow-md flex items-center justify-center flex-1"
              title="${lot.isHighBidder ? 'You are the high bidder' : 'Place bid'}">
              <i class="fas fa-gavel mr-2"></i>Place Bid
            </button>
          </div>
        </div>
      </a>
    </div>
  `;
}
