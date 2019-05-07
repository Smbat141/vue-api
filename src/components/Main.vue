<template>
    <div >
        <div >
            <div class="album py-5 bg-light" >
                <div class="container">
                    <div class="row" >
                        <app-news v-for="n in newsData" :news="n" :key="n.id"></app-news>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item" @click="previus"><button class="page-link">Previous</button></li>
                            <li class="page-item" v-for="pages in last_page" @click="thisPage(pages)"><button class="page-link" >{{pages}}</button></li>
                            <li class="page-item" @click="next"><button class="page-link" >Next</button></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import News from "./News";
    import axios from "axios";
    export default {
        name: "Main",
        data(){
            return {
                page:'',
                last_page:''
            }
        },
        components:{
            appNews:News
        },
        computed:{
            newsData(){
                return this.$store.getters.news
            },
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/newses').then(response => {
                this.page = response.data.meta.current_page
                this.last_page = response.data.meta.last_page
                this.$store.commit('news',response.data.data)
            })
        },
        methods:{
            next(){
                if(this.page < this.last_page){
                    this.page++,
                        axios.get('http://127.0.0.1:8000/api/newses?page='+this.page).then(response => {
                            this.newsData = response.data.data
                        })
                }
            },
            previus(){
                if(this.page > 1){
                    this.page--,
                        axios.get('http://127.0.0.1:8000/api/newses?page='+this.page).then(response => {
                            this.newsData = response.data.data
                        })
                }
            },
            thisPage(page){
                axios.get('http://127.0.0.1:8000/api/newses?page='+ page).then(response => {
                    this.newsData = response.data.data
                })
            }
        },

    }
</script>

<style scoped>

</style>
