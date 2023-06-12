<template>
  <div>
    <h1>JUEGOS</h1>
    <div class="container">
      <b-card
        no-body
        style="max-width: 20rem"
        img-src="https://placekitten.com/380/200"
        img-alt="Image"
        img-top
      >
        <template #header>
          <h4 class="mb-0">Hello World</h4>
        </template>
        <b-list-group flush>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>

        <b-card-body>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamesView",
};
</script>

<style></style>
