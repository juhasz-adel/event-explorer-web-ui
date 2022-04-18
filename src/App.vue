<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand font-weight-bold">
      Event Explorer
      <span class="badge badge-primary" v-if="isLoggedIn()"
        >Bejelentkezve, mint: {{ user.lastName }} {{ user.firstName }}</span
      >
    </a>
    <button
      v-on:click="toggle()"
      :class="getNavbarTogglerClass()"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="getNavbarCollapseClass()">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" v-bind:href="'/'">Főoldal</a>
        </li>
        <li class="nav-item" v-if="isLoggedIn()">
          <a class="nav-link" v-bind:href="'/esemenyeim'">Eseményeim</a>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<script>
import user from "./config/user.config.json";
import { isLoggedIn } from "./utils/userLoggedInChecker";
import { getUser } from "./services/userService";
import { getUserEvents } from "./services/userEventsService";

export default {
  name: "App",
  components: {},
  data() {
    return {
      isOpen: true,
      userId: user.id,
      user: {
        lastName: "",
        firstName: "",
      },
    };
  },
  methods: {
    getNavbarTogglerClass() {
      const className = "navbar-toggler";
      return this.isOpen ? className : `${className} collapsed`;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    getNavbarCollapseClass() {
      const className = "collapse navbar-collapse collapse";
      return this.isOpen ? className : `${className} show`;
    },
    isLoggedIn() {
      return isLoggedIn(this.userId);
    },
  },
  mounted() {
    const { id } = user;

    getUser(id).then((response) => (this.user = response.data));
    getUserEvents(id).then((response) => (this.userEvents = response.data));
  },
};
</script>
