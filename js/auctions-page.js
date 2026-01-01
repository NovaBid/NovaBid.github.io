/**
 * Auctions Listing Page Module
 * Handles auctions grid rendering with pagination
 */

document.addEventListener('DOMContentLoaded', () => {
  const auctionsContainer = document.getElementById('auctions-container');
  const paginationContainer = document.getElementById('pagination-container');
  const ITEMS_PER_PAGE = 10;
  let currentPage = 1;

  function renderPage(page) {
    currentPage = page;
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    const paginatedAuctions = mockAuctions.slice(startIndex, endIndex);
    const paginatedCommons = mockAuctionCommons.slice(startIndex, endIndex);

    // Clear container
    auctionsContainer.innerHTML = '';

    // Render cards
    CardRenderer.renderCards(
      auctionsContainer,
      paginatedAuctions,
      paginatedCommons,
      (auction, auctionCommon) => CardRenderer.createAuctionCard(auction, auctionCommon),
      'No auctions available at this time.'
    );

    // Render pagination
    renderPagination();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderPagination() {
    const totalPages = Math.ceil(mockAuctions.length / ITEMS_PER_PAGE);
    
    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    let paginationHTML = '<div class="flex justify-center items-center gap-2 mt-12">';

    // Previous button
    paginationHTML += `
      <button 
        onclick="window.auctionsPagination.goToPage(${currentPage - 1})" 
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
            onclick="window.auctionsPagination.goToPage(${i})" 
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
        onclick="window.auctionsPagination.goToPage(${currentPage + 1})" 
        ${currentPage === totalPages ? 'disabled' : ''}
        class="px-4 py-2 rounded-lg border border-cosmic-300 hover:bg-cosmic-100 disabled:opacity-50 disabled:cursor-not-allowed transition">
        <i class="fas fa-chevron-right"></i>
      </button>
    `;

    paginationHTML += '</div>';
    paginationContainer.innerHTML = paginationHTML;
  }

  // Expose pagination function globally
  window.auctionsPagination = {
    goToPage: renderPage
  };

  // Initial render
  renderPage(1);
});