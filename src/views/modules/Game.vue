<template>
  <div v-if="game != null" class="container">
    <div class="content">
      <!-- FONDO -->
      <img :src="game.background_image" alt="imgCard" class="imagenCard" />

      <main class="container">
        <!-- ENCABEZADO -->
        <header class="centrar">
          <h1 class="titulo_juego">{{ game.name }}</h1>
          <div class="generos">
            <p class="generos_titulo">Género/s:</p>
            <div v-for="genre in genres" v-bind:key="genre.id">
              <p class="generos_type">{{ genre.name }}/</p>
            </div>
          </div>
        </header>
        <!-- PLATAFORMAS -->

        <section>
          <p class="centrar titulo_plataforma">Plataformas:</p>
          <div class="plataformas">
            <div v-for="plataform in plataforms" v-bind:key="plataform.id">
              <p class="plataforma_type">{{ plataform.platform.name }},</p>
            </div>
          </div>
        </section>
        <!-- RATING/WEB/RELEASED/DESC. -->
        <section class="displayFlex">
          <div class="info">
            <div class="rating">
              <p class="rating_titulo">Rating:</p>
              <div class="circle">
              <p class="rating_number">{{ game.rating }}</p>
              </div> 
            </div>
            <p><span class="infoSpan">Released:</span>{{ game.released }}</p>
            <p><span class="infoSpan">Website:</span>{{ game.website }}</p>
          </div>

          <div>
            <p class="descripcion_titulo">Descripcion:</p>
            <p>{{ game.description_raw }}</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "game-views",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      game: null,
      plataforms: null,
      genres: null,
      // publishers: null,
    };
  },
  methods: {
    cargarApi() {
      axios
        .get(
          `https://api.rawg.io/api/games/${this.id}?key=f65f5f4c16ff47b29e1e8a1998fe70dc`
        )
        .then((response) => {
          this.game = response.data;
          this.plataforms = response.data.platforms;
          this.genres = response.data.genres;
          // this.publishers = response.data.publishers;
        });
    },
  },
  created() {
    this.cargarApi();
  },
};
</script>

<style scoped>
/* FONDO */
.container {
  position: relative;
  overflow: hidden;
  height: 100%;
}
.content {
  position: relative;
  z-index: 1;
  border: 1px solid white;
}
.imagenCard {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: brightness(25%);
}
.container > * {
  margin: 20px;
  color: white;
}

/*HEADER*/
.centrar {
  text-align: center;
}
.titulo_juego {
  font-size: 4rem;
}
.generos {
  justify-content: center;
  display: flex;
  gap: 0.5rem;
}
.generos_titulo {
  font-weight: bold;
  font-size: 1rem;
}
.generos_type {
  font-size: 1rem;
}

/* SECTION #1 PLATAFORMAS */
.titulo_plataforma {
  font-weight: bold;
  font-size: 1.5rem;
}
.plataformas {
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  gap: 0.5rem;
}
.plataforma_type {
  font-size: 1rem;
  text-align: center;
}

/* SECTION #2 RATING/WEB/RELEASED/DESC.*/

.displayFlex {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #30b0e5; /* Puedes cambiar el color de fondo según tus necesidades */
  margin: 0 auto;
  
}
.rating {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 1rem;
}
.rating_titulo {
  text-align: center;
  font-weight: bold;
}
.rating_number {
  font-size: 2rem;
  line-height: 2em;
  font-weight: bold;
  text-align: center;
  border-radius: 100%;
  width: 2em;
  margin: 1rem auto;
}
.descripcion_titulo{
  font-weight: bold;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.infoSpan {
  font-weight: bold;
  margin-right: 1rem;
}
</style>
