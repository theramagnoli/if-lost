import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import home from "../src/components/home.vue";
import login from "../src/components/login.vue";

const routes = [
  { path: "/", name: "home", component: home },
  {
    path: "/viajar",
    name: "viajar",
    component: () =>
      import(
        /* webpackChunkName: "viajar" */ "../src/components/crear_viaje.vue"
      ),
  },
  { path: "/login", name: "login", component: login },
  {
    path: "/rastrear",
    name: "rastrear",
    component: () =>
      import(
        /* webpackChunkName: "rastrear" */ "../src/components/rastrear.vue"
      ),
  },
  {
    path: "/cuenta",
    name: "cuenta",
    component: () =>
      import(/* webpackChunkName: "cuenta" */ "../src/components/cuenta.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../src/components/404.vue"),
  },
  {
    path: "/if-lost/",
    component: login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
