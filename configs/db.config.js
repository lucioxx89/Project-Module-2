const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/events-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB 🚀');
  })
  .catch(error => {
    console.log('error ', error);
  });
