import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap";
import "./assets/app.scss";
import VeeValidate from "vee-validate";
Vue.config.productionTip = false;
Vue.use(VeeValidate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
