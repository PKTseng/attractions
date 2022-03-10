import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "@/plugin/sweetalert"
import "@/plugin/vuetailwind"
import "@/assets/css/tailwind.css"

import api from "@/assets/api/index"
import "./assets/tailwind.css"

Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
