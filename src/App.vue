<template>
  <div id="app" class="div">
    <NavBar />

    <router-view />
  </div>
</template>

<script>
import NavBar from "./views/components/navbar/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.div {
  background-image: url("../src/assets/back.JPG");
}
</style>
