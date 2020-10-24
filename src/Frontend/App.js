import Vue from "vue";
import Index from "./Index.vue";
import router from "./router/router";
import "./styles";
new Vue({
  router,
  render: (h) => h(Index),
}).$mount("#root");
