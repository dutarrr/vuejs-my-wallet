import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeView from "./components/home/home";
import CurrencyView from "./components/currency/CurrencyView";
import CurrencyAdd from "./components/currency/CurrencyAdd";
import CurrencyList from "./components/currency/CurrencyList";
import EmtiaView from "./components/emtia/emtia";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/currency",
    component: CurrencyView,
    children: [
      { path: "", component: CurrencyList },
      { path: "add", component: CurrencyAdd },
      { path: "list", component: CurrencyList },
    ],
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
