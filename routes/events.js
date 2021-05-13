const express = require('express');
const router = express.Router();
const Event = require('../models/event.model');

/* GET events page. */
router.get('/', (req, res, next) => {
  Event.find({})
    .then(createdEvents => {
      res.render('events/events-list', { event: createdEvents });
    })
    .catch(error => {
      next(error);
    });
  // res.render('events/events-list');
});

//create event form

router.get('/create', (req, res, next) => {
  res.render('events/create-form');
});

// save created event and redirect to event list

router.post('/create', (req, res, next) => {
  const { name, image, location, date, price, category, description } = req.body;

  Event.create({ name, image, location, date, price, category, description }) // same as above, this one has been destructured
    .then(newEvent => {
      console.log('New Event created', newEvent);
      res.redirect('/events');
    })
    .catch(error => {
      console.log('No event created', error);
      //res.render('events/create-form');
      next(error);
    });
});

// update event

router.get('/edit/:id', (req, res, next) => {
  const { id } = req.params;
  Event.findById(id)
    .then(foundedEvent => {
      console.log('Event Edited');
      res.render('events/edit-form', foundedEvent);
    })
    .catch(error => {
      console.log('No events to show', error);
    });
});

router.post('/edit/:id', (req, res, next) => {
  const { id } = req.params;

  const { name, image, location, date, price, category, description } = req.body;

  Event.findByIdAndUpdate(id, { name, image, location, date, price, category, description }, { new: true })
    .then(updateEvent => {
      console.log('Event Updated');
      res.redirect('/events');
    })
    .catch(error => {
      console.log('No events to show', error);
      res.render('events/edit-form');
    });
});

router.post('/delete/:id', (req, res, next) => {
  const { id } = req.params;
  Event.findByIdAndDelete(id)
    .then(deleteEvent => {
      console.log('Event Deleted');
      res.redirect('/events');
    })
    .catch(error => {
      console.log('No event deleted');
    });
});

module.exports = router;
