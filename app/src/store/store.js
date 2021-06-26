import Vue from "vue";
import Vuex from "vuex";
import currency from "./modules/currency";
import emtia from "./modules/emtia";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { currency, emtia },
});
