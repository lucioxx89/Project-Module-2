const checkIfUserIsLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    return next();
  }
  res.redirect('/auth/login');
};

module.exports = checkIfUserIsLoggedIn;
