import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../views/Home";

//import Currency from "../views/Currency";
const Currency = () => import("../views/Currency"); //lazy load

import CurrencyAdd from "../components/currency/CurrencyAdd";
import CurrencyList from "../components/currency/CurrencyList";

//import Emtia from "../views/Emtia";
const Emtia = () => import("../views/Emtia"); //lazy load

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/currency",
    component: Currency,
    children: [
      { path: "", component: CurrencyList },
      { path: "add", component: CurrencyAdd },
      { path: "list", component: CurrencyList },
    ],
  },
  {
    path: "/emtia",
    component: Emtia,
    name: "Emtia",
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
