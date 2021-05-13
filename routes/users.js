const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

// to see sign up form
router.get('/signup', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
