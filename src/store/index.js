import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: {
            check: false,
            user: {},
        }
    },
    mutations:{
        auth(state, user){
            state.auth.user = user;
            state.auth.check = true;
        },
        userLogOut(state) {
            state.auth.check = false
        }
    },
    getters:{
    }

})
