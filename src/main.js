import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import DateFilter from "./filter/date";
import firebaseApp from "./firebase/init";

Vue.config.productionTip = false;
Vue.filter("dateformat", DateFilter);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
