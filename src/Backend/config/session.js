const sessionOptions = {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER_BD,
  password: process.env.PASSWORD,
  database: process.env.BD,
};
module.exports = sessionOptions;
