import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/iconfont/iconfont.css' 
// import style
import 'swiper/swiper-bundle.css'
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

import Card from './components/Card'
Vue.component('m-card',Card)

import "./assets/scss/style.scss"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
