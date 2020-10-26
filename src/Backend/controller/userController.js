const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

exports.userGetController = (req, res) => {
  res.render("users", {
    titulo: "Administrador de usuarios",
    parrafo: "Crear nuevos usuarios administradores para Smart Tech.",
  });
};
exports.userPostController = async (req, res) => {
  try {
    let { usuario, contraseña, repetir } = req.body;
    if (!usuario || !contraseña || !repetir) {
      res.render("users", {
        error: "Todos los campos son obligatorios.",
      });
      return;
    }
    if (contraseña !== repetir) {
      res.render("users", {
        error: "Las contraseñas no coinciden.",
        titulo: "Administrador de usuarios",
        parrafo: "Crear nuevos usuarios administradores para Smart Tech.",
      });
      return;
    }
    const userExist = await Admin.findOne({ where: { usuario } });
    if (userExist) {
      res.render("users", {
        error: "Este usuario esta registrado.",
        titulo: "Administrador de usuarios",
        parrafo: "Crear nuevos usuarios administradores para Smart Tech.",
      });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    contraseña = await bcrypt.hash(contraseña, salt);
    await Admin.create({
      usuario,
      contraseña,
    });
    res.render("users", {
      mensaje: "Usuario creado correctamente!",
      titulo: "Administrador de usuarios",
      parrafo: "Crear nuevos usuarios administradores para Smart Tech.",
    });
  } catch (error) {
    res.render("users", {
      error,
      titulo: "Administrador de usuarios",
      parrafo: "Crear nuevos usuarios administradores para Smart Tech.",
    });
  }
};
