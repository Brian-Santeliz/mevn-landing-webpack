const Sequelize = require("sequelize");
const database = require("../config/database");

const modelNewsletter = database.define("newsletter", {
  email: {
    type: Sequelize.STRING,
  },
});
module.exports = modelNewsletter;
