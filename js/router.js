import { createRouter, createWebHistory } from "vue-router";
import home from "../src/components/home.vue";
import crear_viaje from "../src/components/crear_viaje.vue";
import login from "../src/components/login.vue";
import rastrear from "../src/components/rastrear.vue";
import cuenta from "../src/components/cuenta.vue";
import notfound from "../src/components/404.vue";

const routes = [
  { path: "/if-lost/", name: "home", component: home },
  { path: "/if-lost/viajar", name: "viajar", component: crear_viaje },
  { path: "/if-lost/login", name: "login", component: login },
  { path: "/if-lost/rastrear", name: "rastrear", component: rastrear },
  { path: "/if-lost/cuenta", name: "cuenta", component: cuenta },
  { path: "/if-lost/404", name: "404", component: notfound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
