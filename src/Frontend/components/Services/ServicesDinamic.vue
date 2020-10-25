<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Servicios</h2>
          <span>Smart Tech</span>
          <p class="section-subtitle">
            Cada dia evolucionamos para ti. Contamos con expertos en:
          </p>
        </div>
        <div class="row">
          <div
            v-for="servicio in Servicios"
            :key="servicio.id"
            class="col-lg-4 col-md-6 col-xs-12"
          >
            <div class="item-boxes services-item">
              <div class="icon color-5">
                <i :class="servicio.clase"></i>
              </div>
              <h4>{{ servicio.titulo }}</h4>
              <p>
                {{ servicio.descripcion }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Servicios: [],
    };
  },
  created() {
    axios
      .get("/services/backend")
      .then((services) => (this.Servicios = services.data))
      .catch((e) => console.log(e));
  },
};
</script>