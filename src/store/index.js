import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user:{}
    },
    mutations:{
        userAuth(state,user){
            state.user = user
        },
        userLogOut(state){
            state.user = {}
        }

    }

})
