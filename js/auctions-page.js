document.addEventListener('DOMContentLoaded', () => {
  const auctionsContainer = document.getElementById('auctions-container');

  if (auctionsContainer) {
    // Use the global mockAuctions data
    mockAuctions.forEach(auction => {
      const auctionCard = `
        <div class="card-hover bg-white rounded-2xl p-6 border border-cosmic-100 flex flex-col">
          <div class="relative mb-4">
              <img src="${auction.image}" alt="${auction.title}" class="rounded-lg w-full h-48 object-cover">
          </div>
          <h3 class="text-xl font-bold mb-2">${auction.title}</h3>
          <p class="text-gray-600 mb-4 flex-grow">${auction.description}</p>
          <a href="auction.html?id=${auction.auctionId}" class="inline-flex items-center justify-center bg-cosmic-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-cosmic-700 transition">
            View Auction
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      `;
      auctionsContainer.innerHTML += auctionCard;
    });
  }
});