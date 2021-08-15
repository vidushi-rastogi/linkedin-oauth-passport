require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const routes = require('./routes.js');

app.set('view engine', 'ejs');

//setting up session
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

//configuring passport, initialising and then using passport to handle session
app.use(passport.initialize());
app.use(passport.session());

//creating authentication strategy and serializeUser to create cookie
//deserializeUser to break cookie to get info
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

//linkedin oauth
passport.use(new LinkedInStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://127.0.0.1:3000/auth/linkedin/callback',
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function (token, tokenSecret, profile, done) {
  return done(null, profile);
}
));

app.use('/', routes);

const port = 3000;

app.listen(port, () => {
  console.log('App listening on port ' + port);
});