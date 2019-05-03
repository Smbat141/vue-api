import VueRouter from 'vue-router'

const Profile = () => import("./components/Profile")
const NewsView = () => import("./components/NewsView")
const Main = () => import("./components/Main")
const Login = () => import("./components/Login")
const Register = () => import("./components/Register")
const ErrorAuth = () => import("./components/ErrorAuth")
const Error = () => import("./components/Error")

export default new VueRouter({
    routes:[
            {path:'/',component:Main,name:'home'},
            {path:'/news/:id',component:NewsView,name:'newsView'},
            {path:'/profile',component:Profile,name:'profile',beforeEnter(to,frm,next){
                let user = localStorage.getItem('user');
                    if(user === null){
                        next('errorAuth')
                    }
                    else{
                        next(true)
                    }
                }},
            {path:'/login',component:Login,name:'login',beforeEnter(to, frm, next) {
                    let user = localStorage.getItem('user');
                    if(user !== null){
                        next('error')
                    }
                    else{
                        next(true)
                    }

                }},
            {path:'/register',component:Register,name:'register',beforeEnter(to, frm, next){
                    let user = localStorage.getItem('user');
                    if(user !== null){
                        next('error')
                    }
                    else{
                        next(true)
                    }
                }},
        {path:'/logOut',component:Register,name:'logOut'},
        {path:'/error',component:Error,name:'erro'},
        {path:'/errorAuth',component:ErrorAuth,name:'errorAuth'},
        ],
    mode:'history'
})
