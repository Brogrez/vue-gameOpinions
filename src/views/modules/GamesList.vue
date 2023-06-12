<template>
  <div>
    <div class="container">
    <h1 class="text-left mt-5">Lista de Juegos Disponibles</h1>
  
      <div class="row">
        <div v-for="game in games" v-bind:key="game.id" class="col-4 my-5">
          <b-card
            no-body
            style="max-width: 20rem"
            :img-src="game.background_image"
            img-alt="Image"
            img-top
          >
            <template #header>
              <h4 class="mb-0"></h4>
            </template>
            <b-list-group flush>
              <b-list-group-item>Rating: {{game.rating}} </b-list-group-item>
              <b-list-group-item>Released: {{game.released}} </b-list-group-item>
              <b-list-group-item>Update: {{game.updated}} </b-list-group-item>
            </b-list-group>

            <b-card-body>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GamesView",
  data() {
    return {
      games: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://api.rawg.io/api/games?key=f65f5f4c16ff47b29e1e8a1998fe70dc&page=1&page_size=9"
      )
      .then((response) => (this.games = response.data.results));
  },
};
</script>

<style>
.card-img-top{
  width: 100%;
  height: 15rem;
}
.card-header{
  padding: 0;
}
</style>
