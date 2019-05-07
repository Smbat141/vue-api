<template>
    <div>
        <h1>Hello {{user.name}}</h1>
        <hr>
        <div class="container">
            <div class="card m-auto" style="width: 18rem;">
                <img class="card-img-top" src="https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Name :{{user.name}}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email : <b>{{user.email}}</b></li>
                    <li class="list-group-item">ID : <b>{{user.id}}</b></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Profile",
        data(){
          return{
              user_news:[]

          }
        },
        computed:{
            user(){
               return this.$store.state.auth.user;
            },
            token(){
                return this.$store.getters.token;
            }
        },
        created() {
            let id = this.user.id;
             axios.get('http://127.0.0.1:8000/api/user/' + id,{ 'headers': { 'Authorization': this.token}}).then(res => {
                 this.user_news = res.data
             })
        }
    }
</script>

<style scoped>

</style>
