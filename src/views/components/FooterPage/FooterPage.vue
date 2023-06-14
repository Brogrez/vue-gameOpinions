<template>
  <div>
    <b-navbar type="warning" class="p-2 colorNav">
      <b-navbar-nav class="row justify-content-between w-100 mx-auto">
        <b-nav-item href="#" class="col-2"><router-link class="linkColor" to="/"><b-icon icon="house-door-fill"></b-icon>Home</router-link></b-nav-item>
        <!-- <b-nav-item href="#" class="col-2"><router-link to="/opinion"><b-icon icon="asterisk"></b-icon>Opinion </router-link> </b-nav-item> -->
      </b-navbar-nav>
    </b-navbar>

  </div>
</template>

<script>
export default {
name:"FooterPage"
}
</script>

<style scope>
.colorNav{
  background-color: black;
}

.linkColor{
  color: white;
}

.linkColor:hover{
  color: yellow;
  text-decoration: none;

}
</style>