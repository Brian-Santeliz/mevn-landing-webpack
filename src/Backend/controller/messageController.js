const Contact = require("../models/Contact");

exports.messageGetController = async (req, res) => {
  try {
    const messages = await Contact.findAll();
    res.render("message", {
      messages,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
