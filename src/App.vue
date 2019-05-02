<template>
    <div class="app " >
        <app-navbar v-if="!authUser"></app-navbar>
        <app-login-navbar v-else></app-login-navbar>
        <div class="border m-2"  v-if="authUser">
            <nav class="my-2 my-md-0 mr-md-3  bg-light text-warning" >
                <router-link class="p-2 text-dark" to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrkZnWIcM5SWiw59Vh5tdKzHNCtbVcTiLc2v6YNtXY52jTIb--A" style="height: 50px;height:50px">
                </router-link>
                <router-link class="p-2 text-dark" to="/">
                    {{authUser.name}} {{authUser.surname}}
                </router-link>
                <router-link class="p-2 text-dark" to="/">
                    {{authUser.email}}
                </router-link>
            </nav>
        </div>
        <router-view style="width: 100%;min-height:300px;" ></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>

    import Footer from "./components/Footer";
    import Navbar from "./components/Navbar";
    import LoginNavbar from "./components/login/LoginNavbar";

    export default {
        name: 'app',
        data() {
            return {
                userActive:{},
            }

        },
        components: {
            appFooter: Footer,
            appNavbar: Navbar,
            appLoginNavbar: LoginNavbar,
        },
        computed:{
            authUser(){
                if(Object.keys(this.$store.state.user).length === 0){
                    return false;
                }
                else {
                    return  this.$store.state.user
                }
            }
        }
    }
</script>

<style scoped>

</style>
