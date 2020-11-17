<template>
  <section class="seccion">
    <div class="contact-form">
      <div class="container">
        <div class="seccion-header">
          <h2 class="seccion-title">Cuéntanos Tus Ideas</h2>
          <p>Potencia tu marca con Smart. Contáctanos.</p>
        </div>
        <div class="row">
          <div
            class="col-lg-9 col-md-9 col-xs-12 mx-auto animate__animated animate__zoomIn"
          >
            <div>
              <form @submit.prevent="contacForm">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Escribe tu nombre"
                        required
                        v-model="Contact.nombre"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        class="form-control"
                        required
                        v-model="Contact.email"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Asunto"
                        class="form-control"
                        required
                        v-model="Contact.asunto"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        placeholder="Cuentanos tu Smart Idea..."
                        rows="7"
                        required
                        v-model="Contact.mensaje"
                      ></textarea>
                    </div>
                    <div class="mx-auto d-flex justify-content-center">
                      <button class="btn btn-common btn-effect" type="submit">
                        Enviar Mensaje
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      Contact: {
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      },
    };
  },
  methods: {
    contacForm() {
      axios
        .post("/contact", this.Contact)
        .then(() => {
          Swal.fire(
            "Recibido",
            "Gracias por comunicarte con Smart Tech!",
            "success"
          );
          (this.Contact.nombre = ""),
            (this.Contact.email = ""),
            (this.Contact.asunto = ""),
            (this.Contact.mensaje = "");
        })
        .catch(console.log);
    },
  },
};
</script>