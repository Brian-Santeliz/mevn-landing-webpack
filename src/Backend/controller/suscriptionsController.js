const Newsletter = require("../models/Newsletter");

exports.suscriptionsGetController = async (req, res) => {
  const newsletters = await Newsletter.findAll();
  res.render("suscriptions", {
    newsletters,
  });
};
