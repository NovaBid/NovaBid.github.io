/**
 * Mock Authentication System
 * Provides JWT-style authentication with mock user data
 */

// Mock credentials
const MOCK_CREDENTIALS = {
    email: 'demo@example.com',
    password: 'abcd1234'
};

// Storage key for authentication token
const AUTH_TOKEN_KEY = 'novabid_auth_token';

/**
 * Generate a random user ID
 */
function generateUserId() {
    return 'user_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
}

/**
 * Generate random IPv4 address
 */
function generateIPv4() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
}

/**
 * Generate random geo coordinates
 * Returns coordinates within reasonable bounds (latitude: -90 to 90, longitude: -180 to 180)
 */
function generateGeoCoordinates() {
    const latitude = (Math.random() * 180 - 90).toFixed(6);
    const longitude = (Math.random() * 360 - 180).toFixed(6);
    return {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
    };
}

/**
 * Generate mock user data
 */
function generateMockUserData() {
    return {
        userId: generateUserId(),
        firstName: 'Demo',
        lastName: 'User',
        username: 'demo.user',
        geoCoordinates: generateGeoCoordinates(),
        ipAddress: generateIPv4(),
        paymentMethodValidated: Math.random() > 0.5,
        highValue: Math.random() > 0.5,
        email: MOCK_CREDENTIALS.email
    };
}

/**
 * Create a JWT-style token (simplified version)
 * In a real app, this would be done server-side with proper signing
 */
function createAuthToken(userData) {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    
    const payload = {
        ...userData,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
    };
    
    // Base64 encode (not cryptographically secure, just for demo)
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));
    const signature = btoa('mock_signature_' + Date.now());
    
    return `${encodedHeader}.${encodedPayload}.${signature}`;
}

/**
 * Decode JWT-style token
 */
function decodeAuthToken(token) {
    try {
        const parts = token.split('.');
        if (parts.length !== 3) {
            return null;
        }
        
        const payload = JSON.parse(atob(parts[1]));
        
        // Check if token is expired
        if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
            return null;
        }
        
        return payload;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}

/**
 * Store authentication token
 */
function storeAuthToken(token) {
    try {
        localStorage.setItem(AUTH_TOKEN_KEY, token);
        return true;
    } catch (error) {
        console.error('Error storing auth token:', error);
        return false;
    }
}

/**
 * Retrieve authentication token
 */
function getAuthToken() {
    try {
        return localStorage.getItem(AUTH_TOKEN_KEY);
    } catch (error) {
        console.error('Error retrieving auth token:', error);
        return null;
    }
}

/**
 * Remove authentication token
 */
function removeAuthToken() {
    try {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        return true;
    } catch (error) {
        console.error('Error removing auth token:', error);
        return false;
    }
}

/**
 * Check if user is authenticated
 */
function isAuthenticated() {
    const token = getAuthToken();
    if (!token) {
        return false;
    }
    
    const userData = decodeAuthToken(token);
    return userData !== null;
}

/**
 * Get current user data
 */
function getCurrentUser() {
    const token = getAuthToken();
    if (!token) {
        return null;
    }
    
    return decodeAuthToken(token);
}

/**
 * Perform login
 * Returns { success: boolean, message: string, userData?: object }
 */
function login(email, password) {
    // Validate credentials
    if (email !== MOCK_CREDENTIALS.email || password !== MOCK_CREDENTIALS.password) {
        return {
            success: false,
            message: 'Invalid email or password'
        };
    }
    
    // Generate user data
    const userData = generateMockUserData();
    
    // Create and store token
    const token = createAuthToken(userData);
    const stored = storeAuthToken(token);
    
    if (!stored) {
        return {
            success: false,
            message: 'Failed to store authentication token'
        };
    }
    
    return {
        success: true,
        message: 'Login successful',
        userData: userData
    };
}

/**
 * Perform logout
 */
function logout() {
    removeAuthToken();
    return {
        success: true,
        message: 'Logged out successfully'
    };
}

/**
 * Initialize authentication check on page load
 * Updates UI based on authentication state
 */
function initAuthState() {
    const user = getCurrentUser();
    if (user) {
        updateHeaderForAuthenticatedUser(user);
    }
}

/**
 * Update header to show authenticated user info
 */
function updateHeaderForAuthenticatedUser(user) {
    // Wait for header to load
    const checkHeader = setInterval(() => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder && headerPlaceholder.children.length > 0) {
            clearInterval(checkHeader);
            
            // Find the Sign In/Register button and user icon
            const signInButton = headerPlaceholder.querySelector('a[href="/bidder/login.html"].bg-white');
            const userIcon = headerPlaceholder.querySelector('a[href="/bidder/login.html"] i.fa-user');
            
            if (signInButton) {
                // Replace Sign In/Register button with user menu
                signInButton.textContent = `${user.firstName} ${user.lastName}`;
                signInButton.href = '#';
                signInButton.onclick = (e) => {
                    e.preventDefault();
                    handleLogout();
                };
                signInButton.title = 'Click to logout';
            }
            
            // Update mobile menu
            const mobileSignIn = headerPlaceholder.querySelector('#mobile-menu a[href="/bidder/login.html"]');
            if (mobileSignIn) {
                mobileSignIn.textContent = 'Logout';
                mobileSignIn.href = '#';
                mobileSignIn.onclick = (e) => {
                    e.preventDefault();
                    handleLogout();
                };
            }

            // Show watchlist links for authenticated users
            const watchlistNavLink = headerPlaceholder.querySelector('#watchlist-nav-link');
            const watchlistMobileLink = headerPlaceholder.querySelector('#watchlist-mobile-link');
            const myBidsNavLink = headerPlaceholder.querySelector('#my-bids-nav-link');
            const myBidsMobileLink = headerPlaceholder.querySelector('#my-bids-mobile-link');
            
            if (watchlistNavLink) {
                watchlistNavLink.classList.remove('hidden');
            }
            if (watchlistMobileLink) {
                watchlistMobileLink.classList.remove('hidden');
            }
            if (myBidsNavLink) {
                myBidsNavLink.classList.remove('hidden');
            }
            if (myBidsMobileLink) {
                myBidsMobileLink.classList.remove('hidden');
            }
        }
    }, 200);
    
    // Clear interval after 5 seconds if header still hasn't loaded
    setTimeout(() => clearInterval(checkHeader), 5000);
}

/**
 * Handle logout action
 */
function handleLogout() {
    const result = logout();
    if (result.success) {
        // Redirect to home page
        window.location.href = '/index.html';
    }
}

// Initialize authentication state when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthState);
} else {
    initAuthState();
}
