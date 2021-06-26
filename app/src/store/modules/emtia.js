const axios = require("axios").default;

const state = {
  emtias: [],
};
const getters = {
  getAllEmtiaList(state) {
    return state.emtias;
  },
};
const mutations = {
  addEmtiaToState(state, emtia) {
    state.emtias.push(emtia);
  },
};
const actions = {
  initEmtiaApp({ commit }) {
    console.log("Emtia İnit App");

    axios.get("emtia.json").then((response) => {
      let data = response.data;
      for (let key in data) {
        data[key].id = key;
        commit("addEmtiaToState", data[key]);
      }
    });
  },
  addEmtia({ state }, emtia) {
    axios.post("emtia.json", emtia).then((response) => {
      emtia.id = response.data.name;
      state.emtias.push(emtia);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
