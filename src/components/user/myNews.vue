<template>
    <div>
        <button class="btn btn-success" @click="addNews">Add News</button>
        <div >
            <div >
                <div class="album py-5 bg-light" >
                    <div class="container">
                        <div class="row" >
                            <app-news v-for="n in userNews" :news="n" :key="n.id"></app-news>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import News from "../News";
    import axios from "axios";

    export default {
        name: "myNews",
        components:{
            appNews:News
        },
        data(){
          return {
              userNews:[]
          }
        },
        computed:{
            token(){
                return this.$store.getters.token;
            },
            user(){
                return this.$store.state.auth.user;
            },

        },
        methods:{
            addNews(){
                this.$router.push('/addNews')
            }
        },
        created() {
            let id = this.user.id;
            axios.get('http://127.0.0.1:8000/api/user/' + id, {
                headers: {
                    'Accept' : 'application/json',
                    'Authorization': this.token
                }
            }).then(res => {
                if (res.status === 200) {
                    this.userNews = res.data.data.news
                }
            });
        }

    }

</script>

<style scoped>

</style>
