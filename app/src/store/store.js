import Vue from "vue";
import Vuex from "vuex";
import currency from "./modules/currency";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { currency },
});
