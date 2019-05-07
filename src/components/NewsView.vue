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
    export default {
        name: "NewsView",
        computed:{
            news(){
                return  this.$store.getters.newsWhere(this.$route.params.id)
            },
        },

    }
</script>

<style scoped>

</style>
