import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, "$state", {
  get(this: Vue) {
    return this.$store.state;
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
