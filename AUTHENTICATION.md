# Mock Authentication System

This document describes the mock authentication system implemented for the NovaBid website.

## Overview

The authentication system provides a client-side mock login functionality using JWT-style tokens stored in localStorage. This is a demonstration system and is not intended for production use.

## Login Credentials

- **Email:** `demo@example.com`
- **Password:** `abcd1234`

## User Data Structure

When a user logs in, a JWT-style token is created with the following user data:

```javascript
{
  userId: "user_<random_string>",        // Random unique user ID
  firstName: "Demo",                      // User's first name
  lastName: "User",                       // User's last name
  username: "demo.user",                  // Username
  geoCoordinates: {                       // Random geographic coordinates
    latitude: <-90 to 90>,
    longitude: <-180 to 180>
  },
  ipAddress: "xxx.xxx.xxx.xxx",          // Random IPv4 address
  paymentMethodValidated: <boolean>,      // Random boolean
  highValue: <boolean>,                   // Random boolean
  email: "demo@example.com",             // User email
  iat: <timestamp>,                       // Token issued at (timestamp)
  exp: <timestamp>                        // Token expiration (24 hours)
}
```

## Features

### Login
- Navigate to `/bidder/login.html`
- Enter credentials: `demo@example.com` / `abcd1234`
- On successful login:
  - JWT-style token is created and stored in localStorage
  - User is redirected to `/bidder/auctions.html`
  - Header updates to show user's name

### Authentication Persistence
- Authentication state persists across page navigation
- Token is stored in localStorage with key `novabid_auth_token`
- Token is valid for 24 hours

### Logout
- Click on the user's name in the header
- Authentication token is cleared from localStorage
- User is redirected to the home page
- Header reverts to showing "Sign In/Register"

## Implementation Files

- **`js/auth.js`** - Main authentication module
  - Token generation and validation
  - User data generation
  - Login/logout functions
  - Header UI updates

- **Modified pages:**
  - `bidder/login.html` - Login form with authentication handler
  - `bidder/auctions.html` - Includes auth.js for state checking
  - `bidder/auction.html` - Includes auth.js for state checking
  - `bidder/lot.html` - Includes auth.js for state checking
  - `index.html` - Includes auth.js for state checking

## Security Notes

⚠️ **Important:** This is a client-side mock authentication system for demonstration purposes only. It does not provide actual security:

- Tokens are not cryptographically signed
- No server-side validation
- Credentials are hardcoded
- Anyone can view/modify localStorage data

For production use, implement proper server-side authentication with:
- Secure password hashing
- Server-side token signing and validation
- HTTPS encryption
- Proper session management
- Rate limiting and security headers
