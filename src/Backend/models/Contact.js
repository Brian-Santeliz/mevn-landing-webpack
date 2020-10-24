const Sequelize = require("sequelize");
const database = require("../config/database");

const modelContact = database.define("contacto", {
  nombre: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  asunto: {
    type: Sequelize.STRING,
  },
  mensaje: {
    type: Sequelize.STRING,
  },
});
module.exports = modelContact;
