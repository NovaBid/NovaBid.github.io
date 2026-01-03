/**
 * Watchlist Module
 * Handles watchlist functionality with localStorage persistence
 */

// Storage key for watchlist
const WATCHLIST_KEY = 'novabid_watchlist';

/**
 * Get watchlist from localStorage
 * @returns {Array} Array of lot IDs
 */
function getWatchlist() {
    try {
        const watchlist = localStorage.getItem(WATCHLIST_KEY);
        return watchlist ? JSON.parse(watchlist) : [];
    } catch (error) {
        console.error('Error reading watchlist:', error);
        return [];
    }
}

/**
 * Save watchlist to localStorage
 * @param {Array} watchlist - Array of lot IDs
 */
function saveWatchlist(watchlist) {
    try {
        localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
        return true;
    } catch (error) {
        console.error('Error saving watchlist:', error);
        return false;
    }
}

/**
 * Add lot to watchlist
 * @param {number} lotId - Lot ID to add
 * @returns {boolean} Success status
 */
function addToWatchlist(lotId) {
    // Check if user is authenticated
    if (!isAuthenticated()) {
        console.error('User must be logged in to add items to watchlist');
        return false;
    }

    const watchlist = getWatchlist();
    
    // Check if already in watchlist
    if (watchlist.includes(lotId)) {
        return true; // Already exists
    }

    watchlist.push(lotId);
    return saveWatchlist(watchlist);
}

/**
 * Remove lot from watchlist
 * @param {number} lotId - Lot ID to remove
 * @returns {boolean} Success status
 */
function removeFromWatchlist(lotId) {
    const watchlist = getWatchlist();
    const filtered = watchlist.filter(id => id !== lotId);
    return saveWatchlist(filtered);
}

/**
 * Check if lot is in watchlist
 * @param {number} lotId - Lot ID to check
 * @returns {boolean} True if in watchlist
 */
function isInWatchlist(lotId) {
    const watchlist = getWatchlist();
    return watchlist.includes(lotId);
}

/**
 * Toggle lot in watchlist
 * @param {number} lotId - Lot ID to toggle
 * @returns {boolean} True if added, false if removed
 */
function toggleWatchlist(lotId) {
    if (isInWatchlist(lotId)) {
        removeFromWatchlist(lotId);
        return false;
    } else {
        addToWatchlist(lotId);
        return true;
    }
}

/**
 * Get watchlist lots with full data, sorted by expiration date (earliest first)
 * @returns {Array} Array of lot objects sorted by expiration
 */
function getWatchlistLots() {
    const watchlistIds = getWatchlist();
    
    // Get lot data for each ID
    const lots = watchlistIds
        .map(lotId => mockLots.find(lot => lot.lotId === lotId))
        .filter(lot => lot !== undefined); // Remove any lots that weren't found

    // Add expiration date to each lot based on its auction's end date
    const lotsWithExpiration = lots.map(lot => {
        const auction = mockAuctions.find(a => a.auctionId === lot.auctionId);
        const auctionCommon = mockAuctionCommons.find(ac => ac.auctionId === lot.auctionId);
        
        return {
            ...lot,
            auctionTitle: auction ? auction.title : 'Unknown Auction',
            expirationDate: auctionCommon ? new Date(auctionCommon.endDate) : new Date('2099-12-31')
        };
    });

    // Sort by expiration date (earliest first)
    lotsWithExpiration.sort((a, b) => a.expirationDate - b.expirationDate);

    return lotsWithExpiration;
}

/**
 * Get count of items in watchlist
 * @returns {number} Number of items in watchlist
 */
function getWatchlistCount() {
    return getWatchlist().length;
}

/**
 * Clear entire watchlist
 * @returns {boolean} Success status
 */
function clearWatchlist() {
    return saveWatchlist([]);
}

/**
 * Get watchlist button classes based on watchlist state
 * @param {boolean} inWatchlist - Whether the item is in the watchlist
 * @returns {object} Object with buttonText and btnClass properties
 */
function getWatchlistButtonClasses(inWatchlist) {
    return {
        buttonText: inWatchlist ? 'Unwatch' : 'Watch',
        btnClass: inWatchlist 
            ? 'bg-cosmic-600 text-white hover:bg-cosmic-700' 
            : 'bg-white text-cosmic-600 hover:bg-gray-100'
    };
}

/**
 * Update watchlist button appearance
 * @param {HTMLElement} button - The button element to update
 * @param {boolean} inWatchlist - Whether the item is in the watchlist
 */
function updateWatchlistButtonAppearance(button, inWatchlist) {
    const { buttonText, btnClass } = getWatchlistButtonClasses(inWatchlist);
    
    // Update button text content
    button.textContent = buttonText;
    
    // Remove all possible classes
    button.classList.remove('bg-white', 'text-cosmic-600', 'hover:bg-gray-100', 'bg-cosmic-600', 'text-white', 'hover:bg-cosmic-700');
    
    // Add the appropriate classes
    btnClass.split(' ').forEach(cls => button.classList.add(cls));
    
    button.title = inWatchlist ? 'Remove from watchlist' : 'Add to watchlist';
}
