/**
 * Card Renderer Module
 * Unified card rendering for auctions and lots
 */

const CardRenderer = {
  /**
   * Create an auction card HTML element
   * @param {object} auction - Auction data object
   * @returns {string} - HTML string for the auction card
   */
  createAuctionCard(auction, auctionCommon) {
    return `
      <div class="card-hover bg-white rounded-2xl p-6 border border-cosmic-100 flex flex-col">
        <div class="relative mb-4">
          <img src="${auction.image}" alt="${auction.title}" class="rounded-lg w-full h-48 object-cover">
        </div>
        <h3 class="text-xl font-bold mb-2">${auction.title}</h3>
        <p class="text-gray-600 mb-4 flex-grow">${auction.description}</p>
        <div class="text-lg font-bold text-nova-400 mb-4">
            Auction Closes: ${new Date(auctionCommon.endDate).toLocaleDateString()}
        </div>
        <a href="auction.html?id=${auction.auctionId}" class="inline-flex items-center justify-center bg-cosmic-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-cosmic-700 transition">
          View Auction
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    `;
  },

  /**
   * Create a lot card HTML element
   * @param {object} lot - Lot data object
   * @returns {string} - HTML string for the lot card
   */
  createLotCard(lot) {
    const startingBid = lot.starting_bid || 0;
    return `
      <div class="card-hover bg-white rounded-2xl p-6 border border-cosmic-100 flex flex-col">
        <div class="relative mb-4">
          <img src="${lot.image}" alt="${lot.title}" class="rounded-lg w-full h-48 object-cover">
        </div>
        <h3 class="text-xl font-bold mb-2">${lot.title}</h3>
        <p class="text-gray-600 mb-4 flex-grow">${lot.description}</p>
        <div class="text-lg font-bold text-nova-400 mb-4">Starting Bid: $${startingBid.toLocaleString()}</div>
        <a href="#" class="inline-flex items-center justify-center bg-cosmic-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-cosmic-700 transition">
          View Lot
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    `;
  },

  /**
   * Render cards to a container
   * @param {HTMLElement} container - Target container element
   * @param {array} items - Array of items to render
   * @param {function} cardCreator - Function to create card HTML
   * @param {string} emptyMessage - Message when no items
   */
  renderCards(container, items, cardCreator, emptyMessage = 'No items available.') {
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `<p class="text-center text-gray-600 col-span-full">${emptyMessage}</p>`;
      return;
    }

    items.forEach(item => {
      container.innerHTML += cardCreator(item);
    });
  }
};
