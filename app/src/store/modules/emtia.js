const axios = require("axios").default;

const state = {
  emtias: [],
};
const getters = {};
const mutations = {};
const actions = {
  addEmtia({ state }, emtia) {
    console.log(state);
    console.log(emtia.kur);

    axios.post("emtia.json", emtia).then((response) => {
      console.log(response);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
