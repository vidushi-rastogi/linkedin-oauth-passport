const passport = require('passport');
const express = require('express');
var router = express.Router();

// initial landing page
router.get('/', function (req, res) {
  res.render('pages/index.ejs'); 
});

//landing page after user authentication
router.get('/profile', isLoggedIn, function (req, res) {
  res.render('pages/profile.ejs', {
    user: req.user 
  });
});

//LinkedIn authentication using passport function
router.get('/auth/linkedin', passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_liteprofile'],
}));

router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/profile',
    failureRedirect: '/'
  }));


//logout page
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = router;