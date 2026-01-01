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

  // Render lot information
  document.getElementById('lot-title').textContent = lot.title;
  document.getElementById('lot-description').textContent = lot.description;
  document.getElementById('lot-starting-bid').textContent = `$${lot.starting_bid}`;
  document.getElementById('lot-id').textContent = lot.lotId;

  // Update back link to go to correct auction
  if (auction) {
    document.getElementById('back-link').href = `/bidder/auction.html?id=${auction.auctionId}`;
  }

  // Initialize carousel
  initializeCarousel(lot.images);
});

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
