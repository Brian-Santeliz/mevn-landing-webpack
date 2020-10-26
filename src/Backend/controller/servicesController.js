const Services = require("../models/Services");
exports.servicesGetController = async (req, res) => {
  try {
    const services = await Services.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.servicesPostController = async (req, res) => {
  try {
    const { titulo, clase, descripcion } = req.body;
    console.log(titulo, clase, descripcion);
    if (!titulo || !clase || !descripcion) {
      res.render("panel", {
        error: "Todos los campos son requeridos.",
      });
      return;
    }
    await Services.create({
      titulo,
      clase,
      descripcion,
    });
    res.render("panel", {
      mensaje: "Servcio agregado correctamente!",
      titulo: "Agrega Nuevos Servicios",
      parrafo: "Esto se vera reflejado en el Frontend de Smart Tech.",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
