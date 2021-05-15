require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const hbs = require('hbs');
// const dotenv = require(‘.env’).config()

// const session = require('express-session');
// require database configuration
require('./configs/db.config');

const app = express();
require('./configs/session.config')(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerHelper('ifvalue', function (conditional, options) {
  if (options.hash.value === conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Route management
const indexRouter = require('./routes/index');
const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use('/', indexRouter);
app.use('/events', eventsRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
