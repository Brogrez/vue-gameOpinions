<template>
  <div v-if="game != null">
    <h1>el juego es {{game.name}}</h1>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "game-views",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data(){
        return {
            game:null
        }
  },
  methods: {
    cargarApi() {
      axios
        .get(
          `https://api.rawg.io/api/games/${this.id}?key=f65f5f4c16ff47b29e1e8a1998fe70dc`
        )
        .then((response) => this.game = response.data);
    },
  },
  created(){
    this.cargarApi()
  }
};
</script>

<style></style>
