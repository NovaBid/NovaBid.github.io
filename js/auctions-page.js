/**
 * Auctions Listing Page Module
 * Handles auctions grid rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  const auctionsContainer = document.getElementById('auctions-container');

  CardRenderer.renderCards(
    auctionsContainer,
    mockAuctions,
    mockAuctionCommons,
    (auction, auctionCommon) => CardRenderer.createAuctionCard(auction, auctionCommon),
    'No auctions available at this time.'
  );
});