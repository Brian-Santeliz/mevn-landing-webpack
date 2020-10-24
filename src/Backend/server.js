const express = require("express");
const morgan = require("morgan");
const path = require("path");
const database = require("./config/database");
const newsletterRouter = require("./router/newsletterRouter");
const contactRouter = require("./router/contactRouter");
const adminRouter = require("./router/adminRouter");
const panelRouter = require("./router/panelRouter");
const suscriptionsRouter = require("./router/suscriptionsRouter");
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.PUERTO || 4000);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/newsletter", newsletterRouter);
app.use("/contact", contactRouter);
app.use("/admin", adminRouter);
app.use("/panel", panelRouter);
app.use("/suscriptions", suscriptionsRouter);

app.use("/admin/auth", (req, res) => {
  res.redirect("/panel");
});
app.listen(app.get("port"), async () => {
  try {
    await database.authenticate();
    console.log("Base de datos Connectada");
    console.log(`Servidor en el puerto: ${app.get("port")}`);
  } catch (error) {
    console.log(error);
  }
});
