const Contact = require("../models/Contact");

exports.messageGetController = async (req, res) => {
  try {
    const messages = await Contact.findAll();
    res.render("message", {
      messages,
      titulo: "Bandeja De Entrada",
      parrafo:
        " Esta sección muestra los mensajes que se han enviado a Smart Tech.",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
