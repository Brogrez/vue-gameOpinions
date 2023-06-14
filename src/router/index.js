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
  },
  {
    path:'/:pathMatch(.*)*',
    component: () => import("../views/modules/NotFound404.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
