const express = require('express');
const router = express.Router();
const Event = require('../models/event.model');
// Call the function I created in helpers/dates
const fixDate = require('../helper/dates');

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
  // Cojo todos los datos del formulario tal cual me viene
  const { name, image, location, date, price, category, description } = req.body;
  // Me he creado una función (carpeta Helpers/dates) que me deja la date como la quiero para poderla mostrar en el edit
  // A la base de datos le mando la date arreglada:
  Event.create({ name, image, location, date: fixDate(date), price, category, description }) // same as above, this one has been destructured
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

// Edit event

router.get('/edit/:id', (req, res, next) => {
  const { id } = req.params;
  Event.findById(id)
    .then(foundedEvent => {
      console.log('Event Edited:', foundedEvent);
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

// To see Event details
router.get('/details/:id', (req, res, next) => {
  const { id } = req.params;
  Event.findById(id)
    .then(eventById => {
      res.render('events/event-details', { showEventDetails: eventById });
    })
    .catch(error => {
      console.log('Error while retrieving details: ', error);
      next(error);
    });
});

// Delete event
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
