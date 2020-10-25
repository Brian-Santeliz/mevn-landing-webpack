exports.vetificarAuth = (req, res, next) => {
  if (!req.session.admin) {
    return res.redirect("/admin/");
  }
  next();
};
