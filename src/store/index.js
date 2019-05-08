import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: {
            check: false,
            user: {},
        },
        news:[],
    },
    mutations:{
        INITNEWS(state, news){
            state.news = news
        },
        auth(state, user){
            state.auth.user = user;
            state.auth.check = true;
        },
        userLogOut(state) {
            state.auth.check = false
        }
    },
    getters:{
        token(state){
            return 'Bearer ' +  state.auth.user.api_token
        },

        newsById:state => id =>{
            state.news.find(item => item.id === id);
        }
    },
})
