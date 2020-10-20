const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    nombre: {
      type: String,
      required: ["Debes agregar un nombre", true],
    },
    apellido: {
      type: String,
      required: ["Debes agregar un apellido", true],
    },
    email: {
      type: String,
      required: ["Debes agregar un email", true],
    },
    asunto: {
      type: String,
      required: ["Debes agregar un asunto", true],
    },
    mensaje: {
      type: String,
      required: ["Debes agregar un mensaje", true],
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Contact", contactSchema);
