import Vue from 'vue'
import App from './App.vue'
import store from '@/utils/store'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
