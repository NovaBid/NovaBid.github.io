/**
 * Card Renderer Module
 * Unified card rendering for auctions and lots
 */

const CardRenderer = {
  /**
   * Create an auction card HTML element
   * @param {object} auction - Auction data object
   * @param {object} auctionCommon - Auction commons data object with dates/info
   * @returns {string} - HTML string for the auction card
   */
  createAuctionCard(auction, auctionCommon) {
    const endDate = auctionCommon ? new Date(auctionCommon.endDate).toLocaleString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }) : 'TBD';
    return `
      <a href="/bidder/auction.html?id=${auction.auctionId}" class="block no-underline" aria-label="View auction: ${auction.title}">
        <div class="card-hover bg-white rounded-2xl p-6 border border-cosmic-100 flex flex-col">
          <div class="relative mb-4">
            <img src="${auction.image}" alt="${auction.title}" class="rounded-lg w-full h-48 object-cover">
          </div>
          <h3 class="text-xl font-bold mb-2">${auction.title}</h3>
          <p class="text-gray-600 mb-4 flex-grow">${auction.description}</p>
          <div class="text-lg font-bold text-nova-400 mb-4">Closes: ${endDate}</div>
          <div class="inline-flex items-center justify-center bg-cosmic-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-cosmic-700 transition">
            View Auction
            <i class="fas fa-arrow-right ml-2"></i>
          </div>
        </div>
      </a>
    `;
  },

  /**
   * Create a lot card HTML element
   * @param {object} lot - Lot data object
   * @returns {string} - HTML string for the lot card
   */
  createLotCard(lot) {
    const startingBid = lot.starting_bid || 0;
    const inWatchlist = typeof isInWatchlist === 'function' ? isInWatchlist(lot.lotId) : false;
    const heartClass = inWatchlist ? 'fas' : 'far';
    const btnClass = inWatchlist ? 'bg-nova-400 text-white hover:bg-nova-500' : 'bg-white border-2 border-nova-400 text-nova-400 hover:bg-nova-50';
    
    return `
      <div class="card-hover bg-white rounded-2xl p-6 border border-cosmic-100 flex flex-col">
        <a href="/bidder/lot.html?id=${lot.lotId}" class="block no-underline" aria-label="View lot: ${lot.title}">
          <div class="relative mb-4">
            <img src="${lot.thumb}" alt="${lot.title}" class="rounded-lg w-full h-48 object-cover">
          </div>
          <h3 class="text-xl font-bold mb-2">${lot.title}</h3>
          <p class="text-gray-600 mb-4 flex-grow">${lot.description}</p>
          <div class="text-lg font-bold text-nova-400 mb-4">Starting Bid: $${startingBid.toLocaleString()}</div>
        </a>
        <div class="flex gap-2">
          <button 
            class="watchlist-card-btn ${btnClass} font-bold w-10 h-10 rounded-lg transition shadow-md flex items-center justify-center" 
            data-lot-id="${lot.lotId}"
            aria-label="Toggle watchlist"
            title="${inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}">
            <i class="${heartClass} fa-heart"></i>
          </button>
          <a href="/bidder/lot.html?id=${lot.lotId}" class="flex-1 inline-flex items-center justify-center bg-cosmic-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-cosmic-700 transition no-underline">
            View Lot
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    `;
  },

  /**
   * Render cards to a container
   * @param {HTMLElement} container - Target container element
   * @param {array} items - Array of items to render
   * @param {array} itemCommons - Optional array of commons data matching items
   * @param {function} cardCreator - Function to create card HTML
   * @param {string} emptyMessage - Message when no items
   */
  renderCards(container, items, itemCommons, cardCreator, emptyMessage = 'No items available.') {
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `<p class="text-center text-gray-600 col-span-full">${emptyMessage}</p>`;
      return;
    }

    items.forEach((item, index) => {
      const itemCommon = itemCommons ? itemCommons[index] : null;
      container.innerHTML += cardCreator(item, itemCommon);
    });
  }
};
