const Sequelize = require("sequelize");
const database = require("../config/database");

const modelServices = database.define("servicios", {
  titulo: {
    type: Sequelize.STRING,
  },
  clase: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.STRING,
  },
});
module.exports = modelServices;
