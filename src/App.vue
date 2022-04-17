<template>
  <div class="navbar">
    <a v-bind:href="'/'">Események</a>
    <a v-bind:href="'/profil'">Profil</a>
  </div>
  <router-view />
</template>

<style>
#app {
  text-align: center;
}
</style>
