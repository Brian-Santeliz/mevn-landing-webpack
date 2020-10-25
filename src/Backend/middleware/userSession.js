exports.userSession = (req, res, next) => {
  if (req.session.user) {
    res.locals.usuario = req.session.user;
  }
  next();
};
