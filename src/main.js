import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './routes';
import store from './store/index'
import VeeValidate from 'vee-validate';
import axios from "axios";

Vue.use(VeeValidate);
Vue.use(VueRouter);

new Vue({
    store,
    render: h => h(App),
    router,
    created (){
        let user = localStorage.getItem('user');
        if (user) this.$store.commit('auth', JSON.parse(user));
        axios.get('http://127.0.0.1:8000/api/newses').then(response => {
            if(response.status == 200){
                this.$store.commit('INITNEWS', response.data);
            }
        })
    },
    mounted() {

    }

}).$mount('#app');
