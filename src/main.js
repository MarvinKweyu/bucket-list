import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import store from './store'
import './registerServiceWorker'

axios.defaults.baseURL = 'https://martmarv.firebaseio.com/'
axios.defaults.headers.get.Accepts = 'application/json'

Vue.filter('publishingAuthor', (value) => {
  return value.split('@')[0]
})
Vue.config.productionTip = false
Vue.use(VueToast);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
