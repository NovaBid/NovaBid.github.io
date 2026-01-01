/**
 * Auction Page Module
 * Handles auction detail page rendering
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

  // Filter and render lots
  const lotsContainer = document.getElementById('lots-container');
  const filteredLots = mockLots.filter(lot => lot.auctionId === auctionId);

  CardRenderer.renderCards(
    lotsContainer,
    filteredLots,
    null,
    (lot) => CardRenderer.createLotCard(lot),
    'No lots available for this auction yet.'
  );
});
