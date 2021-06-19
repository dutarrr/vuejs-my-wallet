const axios = require("axios").default;

const state = { currency: ["elma"] };

const getters = {
  getAllCurrency({ state }) {
    return state.currency;
  },
};

const mutations = {};

const actions = {
  addCurrency({ state }, currency) {
    console.log(state);
    axios.post("currency.json", currency).then((response) => {
      console.log("response :>> ", response);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
