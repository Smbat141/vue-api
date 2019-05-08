<template>
    <div class="container">
        <div class="card mb-2">
            <img class="card-img-top" src="http://www.elsetge.cat/imagepost/b/0/2025_free-wallpaper-images.jpg" alt="Card image cap" style="width: 100%;height: 400px">
            <div class="card-body bg-info" >
                <h5 class="card-title">{{news.title}}</h5>
                <p class="card-text">{{news.content}}</p>
                <p class="card-text"><small class="text-dark">{{news.published_data}}</small></p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "NewsView",
        data() {
            return {
                news: {},
            }
        },
        methods: {
            getItem() {
                return axios
                    .get('http://127.0.0.1:8000/api/newses/' + this.$route.params.id)
                    .then(response => response.data.data);
            }
        },
        watch: {
            '$store.state.news': function (news) {
                if (news.length)
                    this.news = this.$store.getters.newsById(this.$route.params.id);
                else
                    this.getItem().then(news => this.news = news);
            },
        },

    }
</script>

<style scoped>

</style>
