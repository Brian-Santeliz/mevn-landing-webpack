const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
// const contactRouter = require("./router/contact");
const app = express();

app.set("port", process.env.PUERTO || 4000);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
// app.use("/contact", contactRouter);

app.listen(app.get("port"), async () => {
  try {
    // await mongoose.connect(process.env.URI, {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
    // });
    // console.log("DB Conectada");
    console.log(`Servidor en el puerto: ${app.get("port")}`);
  } catch (error) {
    throw new Error(error);
  }
});
