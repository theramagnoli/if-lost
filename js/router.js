import { createRouter, createWebHistory } from "vue-router";
import home from "../src/components/home.vue";
import crear_viaje from "../src/components/crear_viaje.vue";
import login from "../src/components/login.vue";
import rastrear from "../src/components/rastrear.vue";
import cuenta from "../src/components/cuenta.vue";

const routes = [
  { path: "/", name: "home", component: home },
  { path: "/viajar", name: "viajar", component: crear_viaje },
  { path: "/login", name: "login", component: login },
  { path: "/rastrear", name: "rastrear", component: rastrear },
  { path: "/cuenta", name: "cuenta", component: cuenta },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
