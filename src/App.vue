<template>
  <div class="navbar">
    <a v-bind:href="'/'"><i class="fa fa-fw fa-search"></i> Események</a>
    <a v-bind:href="'/profil'"><i class="fa fa-fw fa-user"></i> Profil</a>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
