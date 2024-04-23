const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/userModel');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const express = require('express');
const passport = require('passport');
const router = express.Router();

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ success: true, message: 'Login successful' });
});

// Register route
router.post('/register', (req, res) => {
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Registration failed', error: err });
        } else {
            res.json({ success: true, message: 'Registration successful' });
        }
    });
});

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.json({ success: true, message: 'Logout successful' });
});

module.exports = router;
