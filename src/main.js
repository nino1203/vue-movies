import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store'

Vue.use(BootstrapVue);
Vue.use(VueResource);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
