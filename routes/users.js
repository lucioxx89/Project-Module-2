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
// router.post('/profile/edit', (req, res, next) => {
//   const { id } = req.session.currentUser._id;
//   const { firstName, lastName, email, hashedPassword } = req.body;

//   User.findOneAndUpdate(id, { firstName, lastName, email, hashedPassword }, { new: true })
//     .then(updateEvent => {
//       console.log('User Updated');
//       res.redirect('/users/profile');
//     })
//     .catch(error => {
//       console.log('Could not update user', error);
//       res.render('errors');
//     });
//   //res.redirect('/users/profile');
// });
// Get /profile/edit
// Cojo datos del user
// Se los paso al formulario de hbs y el user ve el form

// Post /profile/edit

// Delete user

module.exports = router;
