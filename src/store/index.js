import Vue from "vue";
import Vuex from "vuex";
import about_store from "../stores/about/about_store.js";
import login_store from "../stores/login/login_store.js";
import home_store from "../stores/home/home_store.js";
import product_store from "../stores/product/product_store.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false
  },
  modules: {
    aboutStore: about_store,
    loginStore: login_store,
    homeStore: home_store,
    productStore: product_store
  }
});
