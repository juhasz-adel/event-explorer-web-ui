import { createRouter, createWebHistory } from "vue-router";
import Events from "../views/Events.vue";
import Profile from "../views/Profile";

const routes = [
  {
    path: "/",
    name: "Events",
    component: Events,
  },
  {
    path: "/profil",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
