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
    path: "/opinion",
    name: "OpinionView",
    component: () => import("../views/modules/OpinionList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
