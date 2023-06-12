<template>
  <div>
    <div class="container">
      <h1 class="text-left mt-5">Lista de Juegos Disponibles</h1>

      <div class="row">
        <div
          v-for="game in games"
          v-bind:key="game.id"
          class="col-lg-4 col-md-6 my-5"
        >
          <b-card
            no-body
            style="max-width: 20rem"
            :img-src="game.background_image"
            img-alt="Image"
            img-top
          >
            <template #header>
              <h4 class="m-2">{{ game.name }}</h4>
            </template>
            <b-list-group flush class="text-left">
              <b-list-group-item>Rating: {{ game.rating }} </b-list-group-item>
              <b-list-group-item
                >Released: {{ game.released }}
              </b-list-group-item>
              <b-list-group-item>Update: {{ game.updated }} </b-list-group-item>
            </b-list-group>

            <b-card-body class="d-flex justify-content-around">
              <b-button variant="warning">Opinar</b-button>
              <b-icon icon="heart" scale="2" class="align-self-center"></b-icon>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>

    <!-- PAGINACION -->
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

<style scope>
.card-img-top {
  width: 100%;
  height: 15rem;
}
.card-header {
  padding: 0;
}
.bi-heart {
  cursor: pointer;
}

h1 {
  color: white;
  font-weight: bold;
}
</style>
