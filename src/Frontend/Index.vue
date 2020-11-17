<template>
  <div>
    <Header />
    <div class="contenedor-router">
      <transition name="v-fade">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Global/Footer.vue";
import Header from "./components/Global/Header.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
