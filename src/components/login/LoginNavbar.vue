<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom box-shadow border">
        <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav class="my-2 my-md-0 mr-md-3 ">
            <div class="btn-group">
                <router-link class="btn btn-outline-primary" :to="{name:'home'}">Home</router-link>
                <a href="" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Settings
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <router-link :to="{name:'profile'}"  class="dropdown-item" >
                        Profile page
                    </router-link>
                    <button class="dropdown-item" type="button" @click="logOut">Log out</button>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
    export default {
        name: "LoginNavbar",
        props:['newsData','user'],
        methods:{
            logOut(){
                if(window.confirm('Are you sure?')){
                    this.$store.commit('userLogOut');
                }
            },
        },
    }
</script>

<style scoped>

</style>
