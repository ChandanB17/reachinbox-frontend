const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000;

app.use(cookieParser());

// Configure Passport to use Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: '/auth/google/callback', // Callback URL as configured in Google Developer Console
    },
    (accessToken, refreshToken, profile, done) => {
      // Process the profile data returned from Google
      // Here you can find user by Gmail or create a new account if not exist
      // For simplicity, just returning the user profile
      return done(null, profile);
    }
  )
);

// Initialize passport middleware
app.use(passport.initialize());

// Route to start OAuth login
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// OAuth2 callback route
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successfully authenticated, issue a JWT or session cookie
    const user = req.user; // The user profile from Google
    const token = jwt.sign({ id: user.id, email: user.emails[0].value }, 'your_jwt_secret', {
      expiresIn: '1h',
    });

    // Set the token in a cookie or send it in response
    res.cookie('token', token, { httpOnly: true });

    // Redirect to the frontend or the next page
    res.redirect('http://localhost:5173'); // Adjust the redirect URL as per your frontend app
  }
);

// Protected route example
app.get('/profile', (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const user = jwt.verify(token, 'your_jwt_secret');
    res.json(user); // Return the user profile
  } catch (err) {
    return res.status(403).send('Invalid token');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
