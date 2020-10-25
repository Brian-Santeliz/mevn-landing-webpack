exports.logoutGetController = (req, res) => {
  req.session.destroy();
  res.redirect("/admin");
};
