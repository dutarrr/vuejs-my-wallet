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
    console.log(currency);
    state.CurrencyList.push(currency);
  },
};

const actions = {
  initApp({ commit }) {
    axios
      .get("currency.json")
      .then((response) => {
        console.log("İnitApp Mutation :>> ", response);
        let data = response.data;
        for (let key in data) {
          data[key].id = key;
          commit("addCurrencyToStateList", data[key]);
        }
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  },
  addCurrency({ state, commit }, currency) {
    console.log(state);
    axios.post("currency.json", currency).then((response) => {
      console.log("response :>> ", response);
      currency.id = response.data.name;
      commit("addCurrencyToStateList", currency);
      router.replace("currency-list");
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
