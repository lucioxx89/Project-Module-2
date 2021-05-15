// require session
const session = require('express-session');

// let's export it and have it receive a parameter
module.exports = app => {
  // use session
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: 'none',
        httpOnly: true,
        maxAge: 60000, // 60 * 1000 ms === 1 min
      },
    }),
  );
};
