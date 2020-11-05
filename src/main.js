import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMoment from 'vue-moment'

Vue.use(BootstrapVue)
Vue.use(VueMoment)
Vue.use(store)
Vue.use(Vuex)
Vue.use(router)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
