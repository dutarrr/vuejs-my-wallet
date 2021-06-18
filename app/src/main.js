import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import { router } from "./router";
import { store } from "./store/store";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://vuejs-wallet-app-default-rtdb.europe-west1.firebasedatabase.app/";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
