const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const database = require("./config/database");
const newsletterRouter = require("./router/newsletterRouter");
const contactRouter = require("./router/contactRouter");
const app = express();

app.set("port", process.env.PUERTO || 4000);

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/newsletter", newsletterRouter);
app.use("/contact", contactRouter);

app.listen(app.get("port"), async () => {
  try {
    await database.authenticate();
    console.log("Base de datos Connectada");
    console.log(`Servidor en el puerto: ${app.get("port")}`);
  } catch (error) {
    console.log(error);
  }
});
