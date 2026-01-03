/**
 * Auction Page Module
 * Handles auction detail page rendering with pagination
 */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const auctionId = parseInt(urlParams.get('id'));

  if (isNaN(auctionId) || auctionId === null) {
    console.error('Auction ID not found in URL');
    return;
  }

  const auction = mockAuctions.find(a => a.auctionId === auctionId);
  const auctionCommon = mockAuctionCommons.find(ac => ac.auctionId === auctionId);

  if (!auction) {
    console.error(`Auction with ID ${auctionId} not found.`);
    return;
  }

  // Render auction details
  document.getElementById('auction-title').textContent = auction.title;
  document.getElementById('auction-description').textContent = auction.description;
  document.getElementById('auction-image').src = auction.image;
  document.getElementById('auction-image').alt = auction.title;

  // Filter lots for this auction
  const lotsContainer = document.getElementById('lots-container');
  const paginationContainer = document.getElementById('lots-pagination-container');
  const filteredLots = mockLots.filter(lot => lot.auctionId === auctionId);
  const ITEMS_PER_PAGE = 20;
  let currentPage = 1;

  function renderPage(page) {
    currentPage = page;
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    const paginatedLots = filteredLots.slice(startIndex, endIndex);

    // Clear container
    lotsContainer.innerHTML = '';

    // Render cards
    CardRenderer.renderCards(
      lotsContainer,
      paginatedLots,
      null,
      (lot) => CardRenderer.createLotCard(lot),
      'No lots available for this auction yet.'
    );

    // Add event listeners to watchlist buttons
    attachWatchlistListeners();

    // Render pagination
    renderPagination();

    // Scroll to lots section
    document.getElementById('lots-section').scrollIntoView({ behavior: 'smooth' });
  }

  function renderPagination() {
    const totalPages = Math.ceil(filteredLots.length / ITEMS_PER_PAGE);
    
    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    let paginationHTML = '<div class="flex justify-center items-center gap-2 mt-12">';

    // Previous button
    paginationHTML += `
      <button 
        onclick="window.lotsPagination.goToPage(${currentPage - 1})" 
        ${currentPage === 1 ? 'disabled' : ''}
        class="px-4 py-2 rounded-lg border border-cosmic-300 hover:bg-cosmic-100 disabled:opacity-50 disabled:cursor-not-allowed transition">
        <i class="fas fa-chevron-left"></i>
      </button>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        paginationHTML += `
          <button 
            onclick="window.lotsPagination.goToPage(${i})" 
            class="px-4 py-2 rounded-lg border ${i === currentPage ? 'bg-cosmic-600 text-white border-cosmic-600' : 'border-cosmic-300 hover:bg-cosmic-100'} transition">
            ${i}
          </button>
        `;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        paginationHTML += '<span class="px-2">...</span>';
      }
    }

    // Next button
    paginationHTML += `
      <button 
        onclick="window.lotsPagination.goToPage(${currentPage + 1})" 
        ${currentPage === totalPages ? 'disabled' : ''}
        class="px-4 py-2 rounded-lg border border-cosmic-300 hover:bg-cosmic-100 disabled:opacity-50 disabled:cursor-not-allowed transition">
        <i class="fas fa-chevron-right"></i>
      </button>
    `;

    paginationHTML += '</div>';
    paginationContainer.innerHTML = paginationHTML;
  }

  // Attach event listeners to watchlist buttons
  function attachWatchlistListeners() {
    const watchlistButtons = document.querySelectorAll('.watchlist-card-btn');
    
    watchlistButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const lotId = parseInt(this.getAttribute('data-lot-id'));
        
        if (!isAuthenticated()) {
          window.location.href = '/bidder/login.html';
          return;
        }
        
        // Toggle watchlist
        const isAdded = toggleWatchlist(lotId);
        
        // Update button appearance
        const icon = this.querySelector('i');
        if (isAdded) {
          icon.classList.remove('far');
          icon.classList.add('fas');
          this.classList.remove('bg-white', 'border-2', 'border-nova-400', 'text-nova-400', 'hover:bg-nova-50');
          this.classList.add('bg-nova-400', 'text-white', 'hover:bg-nova-500');
          this.title = 'Remove from watchlist';
        } else {
          icon.classList.remove('fas');
          icon.classList.add('far');
          this.classList.remove('bg-nova-400', 'text-white', 'hover:bg-nova-500');
          this.classList.add('bg-white', 'border-2', 'border-nova-400', 'text-nova-400', 'hover:bg-nova-50');
          this.title = 'Add to watchlist';
        }
      });
    });
  }

  // Expose pagination function globally
  window.lotsPagination = {
    goToPage: renderPage
  };

  // Initial render
  renderPage(1);
});
