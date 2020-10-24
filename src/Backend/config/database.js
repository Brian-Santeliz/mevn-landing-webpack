const Sequelize = require("sequelize");
require("dotenv").config({ path: "entorno.env" });
module.exports = new Sequelize(
  process.env.BD,
  process.env.USER_BD,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
