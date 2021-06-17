const state = { currency: [] };

const getters = {};

const mutations = {};

const actions = {
  addCurrency({ state }, currency) {
    console.log(state);
    console.log(currency);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
