document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const auctionId = parseInt(urlParams.get('id'));

    if (isNaN(auctionId) || auctionId === null) {
        console.error('Auction ID not found in URL');
        // Optionally redirect to a 404 or auctions page
        // window.location.href = 'auctions.html';
        return;
    }

    const auction = mockAuctions.find(a => a.auctionId === auctionId);

    if (!auction) {
        console.error(`Auction with ID ${auctionId} not found.`);
        // Optionally display an error message or redirect
        // window.location.href = 'auctions.html';
        return;
    }

    // Render auction details
    document.getElementById('auction-title').textContent = auction.title;
    document.getElementById('auction-description').textContent = auction.description;
    document.getElementById('auction-image').src = auction.image;
    document.getElementById('auction-image').alt = auction.title;

    // Filter and render lots
    const lotsContainer = document.getElementById('lots-container');
    const filteredLots = mockLots.filter(lot => lot.auctionId === auctionId);

    if (lotsContainer) {
        if (filteredLots.length === 0) {
            lotsContainer.innerHTML = '<p class="text-center text-gray-600 col-span-full">No lots available for this auction yet.</p>';
        } else {
            filteredLots.forEach(lot => {
                const lotCard = `
                    <div class="card-hover bg-white rounded-2xl p-6 border border-cosmic-100 flex flex-col">
                      <div class="relative mb-4">
                          <img src="${lot.image}" alt="${lot.title}" class="rounded-lg w-full h-48 object-cover">
                      </div>
                      <h3 class="text-xl font-bold mb-2">${lot.title}</h3>
                      <p class="text-gray-600 mb-4 flex-grow">${lot.description}</p>
                      <div class="text-lg font-bold text-nova-400 mb-4">Starting Bid: $${lot.starting_bid.toLocaleString()}</div>
                      <a href="#" class="inline-flex items-center justify-center bg-cosmic-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-cosmic-700 transition">
                        View Lot
                        <i class="fas fa-arrow-right ml-2"></i>
                      </a>
                    </div>
                `;
                lotsContainer.innerHTML += lotCard;
            });
        }
    }
});
