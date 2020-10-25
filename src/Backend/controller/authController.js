const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
exports.authPostController = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;
    if (!usuario || !contraseña) {
      res.render("login", {
        campos: "Todos los campos son obligatorios.",
      });
      return;
    }
    const userExist = await Admin.findOne({
      where: { usuario },
    });
    if (!userExist) {
      res.render("login", {
        campos: "Este usuario no existe.",
      });
      return;
    }
    const password = await bcrypt.compare(contraseña, userExist.contraseña);
    if (!password) {
      return res.render("login", {
        campos: "Esta contraseña no es la correcta.",
      });
    }
    req.session.admin = true;
    req.session.user = "admin";
    res.redirect("/panel");
  } catch (error) {
    console.log(error);
  }
};
