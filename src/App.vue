<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" v-bind:href="'/'">Event Explorer</a>
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
          <a class="nav-link" v-bind:href="'/'">Események</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-bind:href="'/profil'">Profil</a>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isOpen: true,
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
  },
  mounted() {},
};
</script>
