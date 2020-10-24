<template>
  <section class="newsletter">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="newsletter-content mt-4">
            <h3 class="action-title">Suscribete a nuestra Newsletter!</h3>
            <p class="text">Nunca compartiremos tu email.</p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="newsletter-form mt-50">
            <form @submit.prevent="submitNewsletter">
              <input
                required
                type="email"
                placeholder="Jamas te enviaremos spam..."
                v-model="Newsletter.email"
              />
              <div class="action-btn rounded-buttons">
                <button class="main-btn rounded-three btn btn-info">
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