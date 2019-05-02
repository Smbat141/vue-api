import VueRouter from 'vue-router'
const Profile = () => import("./components/Profile")
const NewsView = () => import("./components/NewsView")
const Main = () => import("./components/Main")
const Login = () => import("./components/Login")
const Register = () => import("./components/Register")

export default new VueRouter({
    routes:[
            {path:'/',component:Main,name:'home'},
            {path:'/news/:id',component:NewsView,name:'newsView'},
            {path:'/profile',component:Profile,name:'profile'},
            {path:'/login',component:Login,name:'login'},
            {path:'/register',component:Register,name:'register'},
            {path:'/logOut',component:Register,name:'logOut'},
        ],
    mode:'history'
})
