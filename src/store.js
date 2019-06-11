import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsList: [
      { name: "Product 1", price: 100, id: 0, amount: 1 },
      { name: "Product 2", price: 110, id: 1, amount: 1 },
      { name: "Product 3", price: 130, id: 2, amount: 1 },
      { name: "Product 4", price: 140, id: 3, amount: 1 }
    ],
    cartObj: [],
    regObj: []
  },
  mutations: {
    addToCart(state, payload) {
      let toggle = true;
      state.cartObj.forEach((el,i) => {
        if (i === state.productsList[payload].id) {
          state.cartObj[i].amount = state.cartObj[i].amount + 1;
          toggle = false;
        }
      });
      if (toggle) {
        state.cartObj.unshift(Object.assign({}, state.productsList[payload]));
      }
    },
    removeFromCart(state, payload) {
      state.cartObj.forEach((el, i) => {
        if (el.id == payload) {
          state.cartObj.splice(i, 1);
        }
      });
    },
    addOne(state, payload) {
      state.cartObj.forEach((el, i) => {
        if (el.id == payload) {
          state.cartObj[i].amount++;
        }
      });
    },
    removeOne(state, payload) {
      state.cartObj.forEach((el, i) => {
        if (el.id == payload) {
          state.cartObj[i].amount--;
          if (state.cartObj[i].amount == 0 || state.cartObj[i].amount < 0) {
            state.cartObj.splice(i, 1);
          }
        }
      });
    },
    addUser(state, payload) {
      state.regObj = payload;
    }
  },
  actions: {},
  getters: {},
  plugins: [createPersistedState()]
});
