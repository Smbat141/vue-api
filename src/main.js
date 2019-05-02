import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import router from './routes';
import store from './store/index'

Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
