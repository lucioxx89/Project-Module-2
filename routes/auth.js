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

module.exports = router;
