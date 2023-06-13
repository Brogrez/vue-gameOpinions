import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "GamesView",
    component: () => import("../views/modules/GamesList.vue"),
  },
  {
    path: "/game/:id",
    name: "game",
    component: () => import("../views/modules/Game.vue"),
    props: true,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
