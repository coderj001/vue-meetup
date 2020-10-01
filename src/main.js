import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import DateFilter from "./filter/date";
import AlertComp from "./components/Alert.vue";

Vue.config.productionTip = false;
Vue.filter("dateformat", DateFilter);

Vue.component("app-alert", AlertComp);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    this.$store.dispatch("loadedMeetups");
  }
}).$mount("#app");
