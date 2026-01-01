document.addEventListener('DOMContentLoaded', () => {
    // Use the generic loader to load the header, and pass the global initMobileMenu function as a callback.
    loadComponent('common/header.html', 'header-placeholder', initMobileMenu);
    loadComponent('common/footer.html', 'footer-placeholder');
});
