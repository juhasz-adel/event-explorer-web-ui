import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Events from "../views/Events.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/esemenyeim",
    name: "Events",
    component: Events,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
