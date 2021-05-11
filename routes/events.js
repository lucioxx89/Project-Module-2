const express = require('express');
const router = express.Router();

/* GET events page. */
router.get('/events', (req, res, next) => {
  res.render('events/events-list');
});

module.exports = router;