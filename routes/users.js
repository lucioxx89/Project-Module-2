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
  //console.log('user', req.session.currentUser);
  res.render('users/user-profile', { user: req.session.currentUser });
});

//Edit profile form
router.get('/profile/edit', (req, res, next) => {
  console.log(req.session.currentUser);
  res.render('users/edit-profile-form', { user: req.session.currentUser });
});

router.post('/profile/edit', (req, res, next) => {
  const id = req.session.currentUser._id;
  const { firstName, lastName, email } = req.body;
  console.log(id, req.body);
  User.findByIdAndUpdate(id, { firstName, lastName, email }, { new: true })
    .then(updatedUser => {
      req.session.currentUser = updatedUser;
    })
    .then(() => {
      res.redirect('/users/profile');
    })
    .catch(error => {
      console.log('Could not update user', error);
      res.render('error');
    });
  //res.redirect('/users/profile');
});

// My events
router.get('/myevents', (req, res, next) => {
  const userId = req.session.currentUser._id;
  User.findById(userId)
    .populate('myEvents')
    .then(dbUser => {
      console.log(dbUser);
      res.render('events/events-fav', { event: dbUser });
    })
    .catch(error => next(error));
});
// Delete user

module.exports = router;
