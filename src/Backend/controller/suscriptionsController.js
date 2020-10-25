const Newsletter = require("../models/Newsletter");

exports.suscriptionsGetController = async (req, res) => {
  const newsletters = await Newsletter.findAll();
  res.render("suscriptions", {
    newsletters,
    titulo: "Usuarios Suscritos",
    parrafo: "En esta sección se listan los usarios suscritos al newsletter.",
  });
};
