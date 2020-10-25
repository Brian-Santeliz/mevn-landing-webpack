exports.panelGetController = (req, res) => {
  res.render("panel", {
    titulo: "Agrega Nuevos Servicios",
    parrafo: "Esto se vera reflejado en el Frontend de Smart Tech.",
  });
};
