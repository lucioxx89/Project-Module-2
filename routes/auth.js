const express = require('express');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const router = express.Router();

const User = require('../models/user.model');

//Sign up route

router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  bcryptjs
    .genSalt(saltRounds)
    .then(salt => {
      console.log('salt', salt);
      return bcryptjs.hash(password, salt);
    })
    .then(passwordHash => User.create({ firstName, lastName, email, hashedPassword: passwordHash }))
    .then(() => {
      res.redirect('/events');
    })
    .catch(error => next(error));
});

// login route

router.get('/login', (req, res, next) => {
  res.render('auth/login');
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.',
    });
    return;
  }
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });

        return;
      } else if (bcryptjs.compareSync(password, user.passworHash)) {
        res.render('users/user-profile', { user });
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
});

module.exports = router;
