const Newsletter = require("../models/Newsletter");

exports.newsletterGetController = async (req, res) => {
  try {
    const results = await Newsletter.findAll();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.newsletterPostController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json("Email es requerido.");
    await Newsletter.create({
      email,
    });
    res.status(201).json("Gracias por suscribirte a la newsletter!");
  } catch (error) {
    res.status(500).json(error);
  }
};
