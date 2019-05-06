<template>
    <div>
        <h1>Hello {{user.name}}</h1>
        <hr>
        <h1>My News</h1>
        <div>
            <pre>
                {{user_news}}
            </pre>
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
            }
        },
        created() {
            let id = this.user.id;
            let token = 'Bearer '+ this.user.api_token;
             axios.get('http://127.0.0.1:8000/api/user/' + id,{ 'headers': { 'Authorization': token}}).then(res => {
                 console.log(res.data.data);
                 //this.user_news = res.data
             })
        }

    }
</script>

<style scoped>

</style>
