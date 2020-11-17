<template>
  <section class="seccion-newsletter">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="newsletter-contenedor mt-4">
            <h3 class="titulo-newsletter">Suscribete a nuestra Newsletter!</h3>
            <p class="texto-newsletter">Nunca compartiremos tu email.</p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="formulario-newsletter mt-50">
            <form @submit.prevent="submitNewsletter">
              <input
                required
                type="email"
                placeholder="Jamas te enviaremos spam..."
                v-model="Newsletter.email"
              />
              <div class="boton-newsletter">
                <button
                  class="btn-principal btn btn-info animate__animated animate__fadeInBottomLeft"
                >
                  Suscribete
                </button>
              </div>
            </form>
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
      Newsletter: {
        email: "",
      },
    };
  },
  methods: {
    submitNewsletter() {
      axios
        .post("/newsletter", this.Newsletter)
        .then((res) => {
          Swal.fire(
            "Enviado",
            "Gracias por suscribirte a nuestra newsletter!",
            "success"
          )((this.Newsletter.email = ""));
        })
        .catch(console.log);
    },
  },
};
</script>