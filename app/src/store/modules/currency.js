const axios = require("axios").default;
import { router } from "../../router";

const state = { CurrencyList: [] };

const getters = {
  getAllCurrency(state) {
    return state.CurrencyList;
  },
};

const mutations = {
  addCurrencyToStateList(state, currency) {
    state.CurrencyList.push(currency);
  },
};

const actions = {
  initApp({ commit }) {
    axios.get("currency.json").then((response) => {
      let data = response.data;
      for (let key in data) {
        data[key].id = key;
        commit("addCurrencyToStateList", data[key]);
      }
    });
  },
  addCurrency({ commit }, currency) {
    axios.post("currency.json", currency).then((response) => {
      currency.id = response.data.name;
      commit("addCurrencyToStateList", currency);
      router.replace("currency/list");
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
