import { createApp } from "vue";
import router from "../js/router.js";
import { store } from "./store/index";

import App from "./App.vue";
import "./index.css";

createApp(App).use(store).use(router).mount("#app");
