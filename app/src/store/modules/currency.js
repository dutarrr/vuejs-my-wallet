const axios = require("axios").default;

const state = { currency: [] };

const getters = {};

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
