const axios = require("axios").default;

const state = {
  emtias: [],
};
const getters = {
  getAllEmtiaList(state) {
    return state.emtias;
  },
};
const mutations = {};
const actions = {
  addEmtia({ state }, emtia) {
    axios.post("emtia.json", emtia).then((response) => {
      emtia.id = response.data.name;
      state.emtias.push(emtia);
      console.log(state.emtias);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
