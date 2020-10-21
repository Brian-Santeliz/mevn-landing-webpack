<template>
  <div>
    <Hero />
    <Services />
    <Clients />
    <About />
    <Newsletter />
    <CallToAction />
    <Counter />
  </div>
</template>

<script>
import Hero from "../components/Home/Hero.vue";
import Services from "../components/Home/Services.vue";
import Clients from "../components/Home/Clients.vue";
import About from "../components/Home/About.vue";
import Newsletter from "../components/Home/NewsLetter.vue";
import CallToAction from "../components/Home/CallToAction.vue";
import Counter from "../components/Home/Counter.vue";
export default {
  components: {
    Hero,
    Services,
    Clients,
    About,
    Newsletter,
    CallToAction,
    Counter,
  },
};
</script>
