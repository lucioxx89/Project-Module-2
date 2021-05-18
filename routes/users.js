const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const checkIfUserIsLoggedIn = require('../middlewares/auth');

/* GET users listing (for admin purposes), optional */
router.get('/users', (req, res, next) => {
  res.send('respond with a resource');
});

 // Profile route
router.get('/profile', checkIfUserIsLoggedIn, (req, res, next) => {
  // console.log('user', req.session.currentUser);
  res.render('users/user-profile', { user: req.session.currentUser });
});

// Get /profile/edit
// Cojo datos del user
// Se los paso al formulario de hbs y el user ve el form 

// Post /profile/edit

// Delete user



module.exports = router;
