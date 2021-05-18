const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const checkIfUserIsLoggedIn = require('../middlewares/auth');

/* GET users listing*/
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

// // Profile route
// router.get('/profile', (req, res, next) => {
//   // console.log('user', req.session.currentUser);
//   res.render('users/user-profile', { user: req.session.currentUser });
// });

module.exports = router;
