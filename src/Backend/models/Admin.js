const Sequelize = require("sequelize");
const database = require("../config/database");

const modelAdmin = database.define("usuario", {
  usuario: {
    type: Sequelize.STRING,
  },
  contraseña: {
    type: Sequelize.STRING,
  },
});
module.exports = modelAdmin;
