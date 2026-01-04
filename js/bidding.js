/**
 * Bidding Module
 * Handles bidding functionality with localStorage persistence
 */

// Storage keys
const BIDS_KEY = 'novabid_bids';
const USER_BIDS_KEY = 'novabid_user_bids';

/**
 * Get current bid for a lot from localStorage
 * @param {number} lotId - Lot ID
 * @param {number} startingBid - Starting bid amount
 * @returns {number} Current bid amount
 */
function getCurrentBid(lotId, startingBid) {
  try {
    const bidsData = localStorage.getItem(BIDS_KEY);
    if (!bidsData) {
      return startingBid;
    }

    const bids = JSON.parse(bidsData);
    return bids[lotId] || startingBid;
  } catch (error) {
    console.error('Error retrieving bid:', error);
    return startingBid;
  }
}

/**
 * Store a bid for a lot in localStorage
 * @param {number} lotId - Lot ID
 * @param {number} bidAmount - Bid amount
 * @returns {boolean} Success status
 */
function storeBid(lotId, bidAmount) {
  try {
    let bids = {};
    const bidsData = localStorage.getItem(BIDS_KEY);
    
    if (bidsData) {
      bids = JSON.parse(bidsData);
    }

    bids[lotId] = bidAmount;
    localStorage.setItem(BIDS_KEY, JSON.stringify(bids));
    return true;
  } catch (error) {
    console.error('Error storing bid:', error);
    return false;
  }
}

/**
 * Get user's bids from localStorage
 * Format: { lotId: { amount: number, timestamp: number, userId: string } }
 * @returns {object} User bids object
 */
function getUserBids() {
  try {
    const userBidsData = localStorage.getItem(USER_BIDS_KEY);
    return userBidsData ? JSON.parse(userBidsData) : {};
  } catch (error) {
    console.error('Error retrieving user bids:', error);
    return {};
  }
}

/**
 * Get user's high bid for a specific lot
 * @param {number} lotId - Lot ID
 * @returns {number|null} User's high bid or null if no bid
 */
function getUserHighBid(lotId) {
  const userBids = getUserBids();
  return userBids[lotId] ? userBids[lotId].amount : null;
}

/**
 * Check if current user is high bidder for a lot
 * @param {number} lotId - Lot ID
 * @param {number} startingBid - Starting bid amount
 * @returns {boolean} True if user is high bidder
 */
function isUserHighBidder(lotId, startingBid) {
  if (!isAuthenticated()) {
    return false;
  }

  const currentUser = getCurrentUser();
  if (!currentUser) {
    return false;
  }

  const userBids = getUserBids();
  const userBid = userBids[lotId];
  
  if (!userBid) {
    return false;
  }

  const currentBid = getCurrentBid(lotId, startingBid);
  
  // User is high bidder if their bid equals the current bid
  return userBid.amount === currentBid && userBid.userId === currentUser.userId;
}

/**
 * Place a bid on a lot
 * @param {number} lotId - Lot ID
 * @param {number} bidAmount - Bid amount
 * @param {number} startingBid - Starting bid amount
 * @returns {object} Result with success status and message
 */
function placeBid(lotId, bidAmount, startingBid) {
  // Check authentication
  if (!isAuthenticated()) {
    return {
      success: false,
      message: 'You must be logged in to place a bid'
    };
  }

  const currentUser = getCurrentUser();
  if (!currentUser) {
    return {
      success: false,
      message: 'Unable to retrieve user information'
    };
  }

  // Validate bid amount
  const currentBid = getCurrentBid(lotId, startingBid);
  const nextMinBid = calculateNextBid(currentBid);
  
  if (bidAmount < nextMinBid) {
    return {
      success: false,
      message: `Bid must be at least $${nextMinBid}`
    };
  }

  // Store the bid as current bid
  if (!storeBid(lotId, bidAmount)) {
    return {
      success: false,
      message: 'Failed to store bid'
    };
  }

  // Store user's bid
  try {
    let userBids = getUserBids();
    
    userBids[lotId] = {
      amount: bidAmount,
      timestamp: Date.now(),
      userId: currentUser.userId
    };
    
    localStorage.setItem(USER_BIDS_KEY, JSON.stringify(userBids));
    
    return {
      success: true,
      message: 'Bid placed successfully',
      bidAmount: bidAmount
    };
  } catch (error) {
    console.error('Error storing user bid:', error);
    return {
      success: false,
      message: 'Failed to record user bid'
    };
  }
}

/**
 * Calculate next minimum bid based on current bid
 * Uses standard auction increment rules
 * @param {number} currentBid - Current bid amount
 * @returns {number} Next minimum bid
 */
function calculateNextBid(currentBid) {
  if (currentBid < 100) {
    return currentBid + 5;
  } else if (currentBid < 500) {
    return currentBid + 10;
  } else if (currentBid < 1000) {
    return currentBid + 25;
  } else if (currentBid < 5000) {
    return currentBid + 50;
  } else {
    return currentBid + 100;
  }
}

/**
 * Get all lots that the user has bid on, with full data
 * Sorted by end date/time (earliest first)
 * @returns {Array} Array of lot objects with bid information
 */
function getUserBidLots() {
  if (!isAuthenticated()) {
    return [];
  }

  const currentUser = getCurrentUser();
  if (!currentUser) {
    return [];
  }

  const userBids = getUserBids();
  const bidLotIds = Object.keys(userBids).map(id => parseInt(id));

  // Get lot data for each ID
  const lots = bidLotIds
    .map(lotId => mockLots.find(lot => lot.lotId === lotId))
    .filter(lot => lot !== undefined);

  // Add auction and bid information to each lot
  const lotsWithInfo = lots.map(lot => {
    const auction = mockAuctions.find(a => a.auctionId === lot.auctionId);
    const auctionCommon = mockAuctionCommons.find(ac => ac.auctionId === lot.auctionId);
    const userBid = userBids[lot.lotId];
    const currentBid = getCurrentBid(lot.lotId, lot.starting_bid);
    const isHighBidder = isUserHighBidder(lot.lotId, lot.starting_bid);

    return {
      ...lot,
      auctionTitle: auction ? auction.title : 'Unknown Auction',
      expirationDate: auctionCommon ? new Date(auctionCommon.endDate) : new Date('2099-12-31'),
      userHighBid: userBid.amount,
      currentBid: currentBid,
      isHighBidder: isHighBidder,
      nextBidIncrement: calculateNextBid(currentBid)
    };
  });

  // Sort by expiration date (earliest first)
  lotsWithInfo.sort((a, b) => a.expirationDate - b.expirationDate);

  return lotsWithInfo;
}

/**
 * Get count of lots user has bid on
 * @returns {number} Number of lots with user bids
 */
function getUserBidCount() {
  const userBids = getUserBids();
  return Object.keys(userBids).length;
}
