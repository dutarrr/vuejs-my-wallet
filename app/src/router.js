import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeView from "./components/home/home";
import CurrencyView from "./components/currency/CurrencyView";
import AddCurrency from "./components/currency/AddCurrency";
import EmtiaView from "./components/emtia/emtia";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/currency-list",
    component: CurrencyView,
  },
  {
    path: "/currency-add",
    component: AddCurrency,
  },
  {
    path: "/emtia",
    component: EmtiaView,
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
