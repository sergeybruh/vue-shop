import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsList: [
      { name: "item1", price: 100, id: 0, amount: 1 },
      { name: "item2", price: 110, id: 1, amount: 1 },
      { name: "item3", price: 130, id: 2, amount: 1 },
      { name: "item4", price: 140, id: 3, amount: 1 }
    ],
    cartObj: [],
    regObj: []
  },
  mutations: {
    addToCart(state, payload) {
      let toggle = false;
      state.cartObj.forEach(el => {
        if (el.id == state.productsList[payload].id) {
          state.cartObj[el.id].amount = state.cartObj[el.id].amount + 1;
          toggle = true;
        }
      });
      if (!toggle) {
        state.cartObj.unshift(state.productsList[payload]);
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
          if (state.cartObj[i].amount == 0) {
            state.cartObj.splice(i, 1);
          }
        }
      });
    },
    addUser(state, payload) {
      state.regObj = payload;
      //debug
      console.log(state.regObj.pwd, state.regObj.eml);
    }
  },
  actions: {},
  getters: {},
  plugins: [createPersistedState()]
});
