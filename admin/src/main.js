import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import http from './store/http'
import './style.css'

Vue.use(Element)

Vue.prototype.$http = http

Vue.mixin({
  computed:{
    uploadURL(){
      return this.$http.defaults.baseURL+'/upload'
    }
  },
  methods:{
    getAuthHeaders(){
      return{
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
