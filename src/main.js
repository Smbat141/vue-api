import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './routes';
import store from './store/index'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(VueRouter);

new Vue({
    store,
    render: h => h(App),
    router,
    created() {
        let user = localStorage.getItem('user');
        if (user) this.$store.commit('auth', JSON.parse(user));
    }
}).$mount('#app');
