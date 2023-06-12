<template>
  <div>
    <b-navbar type="dark" variant="dark" class="p-0">
      <b-navbar-nav class="row justify-content-between w-100 mx-auto">
        <b-nav-item href="#" class="col-2"><router-link to="/opinion"> <b-icon icon="asterisk"></b-icon>Opinion </router-link> </b-nav-item>
        <b-nav-item href="#" class="col-2"><router-link to="/"> <b-icon icon="house-door-fill"></b-icon> Home </router-link> </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
};
</script>

<style></style>
