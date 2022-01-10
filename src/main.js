import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import VueRouter from 'vue-router'

import Main from './components/Main'
import Country from './components/Country'

import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Main },
    { path: '/country/:countryName', name: 'country', component: Country, props: true },
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
