import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./components/home";
import currency from "./components/currency/currency";
import emtia from "./components/emtia/emtia";

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/currency",
    component: currency,
  },
  {
    path: "/emtia",
    component: emtia,
  },
  {
    path: "*",
    redirect: "/",
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
