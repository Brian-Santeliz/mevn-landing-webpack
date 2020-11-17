<template>
  <div>
    <section class="seccion">
      <div class="container">
        <div class="seccion-header">
          <h2 class="seccion-title">Servicios</h2>
          <p>Cada dia evolucionamos para ti. Contamos con expertos en:</p>
        </div>
        <div class="row">
          <div
            v-for="servicio in Servicios"
            :key="servicio.id"
            class="col-lg-4 col-md-6 col-xs-12 animate__animated animate__fadeInDown"
          >
            <div class="servicio-item contenedor-servicio">
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