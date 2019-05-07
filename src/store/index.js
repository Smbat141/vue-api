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
        news(state,news){
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
        getNews(state){
            console.log(state.news.meta.last_page);

            return  {
                news:state.news.data,
                page:state.news.meta.current_page,
                lastPage:state.news.meta.last_page
            }
        },

        newsWhere:state => id =>{
            // console.log(state.news);

            state.news.filter(n => {
                if(n.id === id){
                    return state.news
                }
            })

            return state.news
        }
    }

})
