import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./App.css";
import "fa-icons";

createApp(App).use(router).mount("#app");
