exports.pathHeader = (req, res, next) => {
  res.locals.path = req.path;
  next();
};
