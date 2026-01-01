/**
 * Auctions Listing Page Module
 * Handles auctions grid rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  const auctionsContainer = document.getElementById('auctions-container');

  CardRenderer.renderCards(
    auctionsContainer,
    mockAuctions,
    (auction) => CardRenderer.createAuctionCard(auction),
    'No auctions available at this time.'
  );
});