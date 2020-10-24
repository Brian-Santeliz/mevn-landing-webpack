const Contact = require("../models/Contact");

exports.contactGetController = async (req, res) => {
  try {
    const results = await Contact.findAll();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.contactPostController = async (req, res) => {
  try {
    const { nombre, email, asunto, mensaje } = req.body;
    if (!nombre || !email || !asunto || !mensaje)
      return res
        .status(400)
        .json(
          "Todos los campos para contactarte con Smart Tech son necesarios."
        );
    await Contact.create({
      nombre,
      email,
      asunto,
      mensaje,
    });
    res.status(201).json("Gracias por contactarte a Smart Tech!");
  } catch (error) {
    res.status(500).json(error);
  }
};
