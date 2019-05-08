<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
                </li>
                <li class="nav-item" v-if="!auth.check">
                    <router-link class="nav-link" :to="{name:'register'}">Register</router-link>
                </li>
                <li class="nav-item" v-if="!auth.check">
                    <router-link class="nav-link" :to="{name:'login'}">Sign In</router-link>
                </li>
                <li class="nav-item dropdown" v-if="auth.check">
                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{auth.user.name}}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link :to="{name:'profile'}"  class="dropdown-item" >
                            Profile page
                        </router-link>
                        <router-link :to="{name:'myNews'}"  class="dropdown-item" >
                            My News
                        </router-link>
                        <a class="dropdown-item"  @click="logout">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Navbar",
        props:['newsData'],
        computed: {
            auth() {
                return this.$store.state.auth;
            },
            token(){
                return this.$store.getters.token;
            }
        },
        methods:{
            logout(){
                axios.post('http://127.0.0.1:8000/api/logout', {}, {
                    headers: {
                        'Accept' : 'application/json',
                        'Authorization': this.token
                    }
                }).then(res => {
                    if (res.status === 200) {
                        localStorage.removeItem('user');
                        this.$store.commit('userLogOut');
                        this.$router.push('/');
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
