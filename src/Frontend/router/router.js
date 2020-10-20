import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "/",
      component: () => import("../pages/Home.vue"),
      name: "Home",
    },
    {
      path: "/services",
      component: () => import("../pages/Services.vue"),
      name: "Services",
    },
    {
      path: "/about",
      component: () => import("../pages/About.vue"),
      name: "About",
    },
    {
      path: "/testimonials",
      component: () => import("../pages/Testimonials.vue"),
      name: "Testimonials",
    },
    {
      path: "/404",
      component: () => import("../pages/NotFound.vue"),
      name: "404",
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
  mode: "history",
});
export default router;
