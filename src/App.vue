<template>
  <div id="app" class="div">
    <NavBar />
    <router-view />
    <FooterPage />
    
  </div>
</template>

<script>
import NavBar from "./views/components/navbar/NavBar.vue";
import FooterPage from "./views/components/FooterPage/FooterPage.vue"

export default {
  name: "app",
  components: {
    NavBar,
    FooterPage

  },
};
</script>

<style scope>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.div {
  background-image: url("../src/assets/back.JPG");
}
</style>
