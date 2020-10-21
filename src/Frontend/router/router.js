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
      path: "/plan",
      component: () => import("../pages/Plan.vue"),
      name: "Plan",
    },
    {
      path: "/portafolio",
      component: () => import("../pages/Portafolio.vue"),
      name: "Portafolio",
    },
    {
      path: "/about",
      component: () => import("../pages/About.vue"),
      name: "About",
    },
    {
      path: "/contact",
      component: () => import("../pages/Contact.vue"),
      name: "Contact",
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
