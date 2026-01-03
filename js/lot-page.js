// Lot Page - Handles lot detail display with carousel and zoom functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get lot ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const lotId = parseInt(urlParams.get('id'));

  if (!lotId) {
    document.querySelector('[id="lot-title"]').textContent = 'Lot not found';
    return;
  }

  // Find the lot in mock data
  const lot = mockLots.find(l => l.lotId === lotId);
  const auction = mockAuctions.find(a => a.auctionId === lot?.auctionId);

  if (!lot) {
    document.querySelector('[id="lot-title"]').textContent = 'Lot not found';
    return;
  }

  // Get current bid from localStorage or use starting bid
  const currentBid = getCurrentBid(lotId, lot.starting_bid);
  const hasBids = currentBid > lot.starting_bid;

  // Render lot information
  document.getElementById('lot-title').textContent = lot.title;
  document.getElementById('lot-description').textContent = lot.description;
  document.getElementById('lot-starting-bid').textContent = `$${currentBid}`;
  document.getElementById('lot-id').textContent = lot.lotId;
  document.getElementById('lot-reserve').textContent = lot.reserve ? 'Reserve Not Met' : '';

  // Update label based on whether bids have been placed
  const bidLabel = document.querySelector('[id="lot-starting-bid"]').previousElementSibling;
  if (bidLabel && hasBids) {
    bidLabel.textContent = 'Current Bid';
  }

  // Update back link to go to correct auction
  if (auction) {
    document.getElementById('back-link').href = `/bidder/auction.html?id=${auction.auctionId}`;
  }

  // Initialize carousel
  initializeCarousel(lot.images);

  // Initialize watchlist button
  initializeWatchlistButton(lotId);

  // Initialize bid button
  initializeBidButton(lotId, lot.starting_bid);
});

/**
 * Initialize watchlist button state and functionality
 */
function initializeWatchlistButton(lotId) {
  const watchlistBtn = document.getElementById('watchlist-toggle-btn');

  if (!watchlistBtn) return;

  // Update button state based on whether lot is in watchlist
  function updateButtonState() {
    const inWatchlist = isInWatchlist(lotId);
    updateWatchlistButtonAppearance(watchlistBtn, inWatchlist);
    watchlistBtn.setAttribute('aria-label', inWatchlist ? 'Remove from watchlist' : 'Add to watchlist');
  }

  // Initial state
  updateButtonState();

  // Handle button click
  watchlistBtn.addEventListener('click', function() {
    if (!isAuthenticated()) {
      // Redirect to login if not authenticated
      window.location.href = '/bidder/login.html';
      return;
    }

    // Toggle watchlist
    toggleWatchlist(lotId);
    updateButtonState();

    // Log feedback for debugging
    const inWatchlist = isInWatchlist(lotId);
    const message = inWatchlist 
      ? 'Added to watchlist!' 
      : 'Removed from watchlist!';
    console.log(message);
  });
}

function initializeCarousel(images) {
  let currentIndex = 0;

  const mainImage = document.getElementById('carousel-main-image');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const currentCounter = document.getElementById('carousel-current');
  const totalCounter = document.getElementById('carousel-total');
  const thumbnailStrip = document.getElementById('thumbnail-strip');
  const zoomModal = document.getElementById('zoom-modal');
  const zoomModalImage = document.getElementById('zoom-modal-image');
  const zoomCloseBtn = document.getElementById('zoom-close-btn');

  // Set total counter
  totalCounter.textContent = images.length;

  // Create thumbnails
  images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image;
    thumbnail.alt = `Lot image ${index + 1}`;
    thumbnail.className = 'thumbnail';
    if (index === 0) thumbnail.classList.add('active');

    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });

    thumbnailStrip.appendChild(thumbnail);
  });

  // Update carousel display
  function updateCarousel() {
    mainImage.src = images[currentIndex];
    currentCounter.textContent = currentIndex + 1;

    // Update thumbnail active state
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
      thumb.classList.toggle('active', index === currentIndex);
    });
  }

  // Carousel navigation - infinite cycling
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  // Click image to zoom
  mainImage.addEventListener('click', () => {
    zoomModalImage.src = images[currentIndex];
    zoomModal.classList.add('active');
  });

  // Close zoom modal
  zoomCloseBtn.addEventListener('click', () => {
    zoomModal.classList.remove('active');
  });

  zoomModal.addEventListener('click', (e) => {
    if (e.target === zoomModal) {
      zoomModal.classList.remove('active');
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (zoomModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        zoomModal.classList.remove('active');
      }
      return;
    }

    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  // Initialize carousel display
  updateCarousel();
}

/**
 * Get the current bid for a lot from localStorage
 */
function getCurrentBid(lotId, startingBid) {
  try {
    const bidsData = localStorage.getItem('novabid_bids');
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
 */
function storeBid(lotId, bidAmount) {
  try {
    let bids = {};
    const bidsData = localStorage.getItem('novabid_bids');
    
    if (bidsData) {
      bids = JSON.parse(bidsData);
    }

    bids[lotId] = bidAmount;
    localStorage.setItem('novabid_bids', JSON.stringify(bids));
    return true;
  } catch (error) {
    console.error('Error storing bid:', error);
    return false;
  }
}

/**
 * Initialize bid button functionality
 */
function initializeBidButton(lotId, startingBid) {
  const bidButton = document.querySelector('button.flex-1.bg-cosmic-600');
  
  if (!bidButton) return;

  // Handle button click
  bidButton.addEventListener('click', function() {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      // Redirect to login if not authenticated
      window.location.href = '/bidder/login.html';
      return;
    }

    // Get current bid and increment by $10
    const currentBid = getCurrentBid(lotId, startingBid);
    const newBid = currentBid + 10;

    // Store the new bid
    if (storeBid(lotId, newBid)) {
      // Update the displayed bid amount
      document.getElementById('lot-starting-bid').textContent = `$${newBid}`;
      
      // Update the label to "Current Bid" if it was "Starting Bid"
      const bidLabel = document.getElementById('lot-starting-bid').previousElementSibling;
      if (bidLabel && bidLabel.textContent === 'Starting Bid') {
        bidLabel.textContent = 'Current Bid';
      }

      // Log success for debugging
      console.log(`Bid placed: $${newBid} on lot ${lotId}`);
    } else {
      alert('Failed to place bid. Please try again.');
    }
  });
}
