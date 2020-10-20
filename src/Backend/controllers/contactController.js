const Contact = require("../models/Contact");
const getController = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0)
      return res.status(204).json("No hay contacto en la BD");
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json(error);
  }
};
const postController = async (req, res) => {
  try {
    const newContact = new Contact({
      ...req.body,
    });
    await newContact.save();
    res.status(201).json("Mensaje guardado en Evolution Api!");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getController, postController };
