<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" v-bind:href="'/'">Event Explorer</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
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

<style>
#app {
  text-align: center;
}
</style>
