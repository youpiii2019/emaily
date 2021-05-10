const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// model class User
const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        // create an instance of the user that represents a reocrd in our mongodb
        new User({
            googleId: profile.id
        }).save(); // take the instance and save it to db
    })
);
