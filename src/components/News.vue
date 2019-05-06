<template>
    <div class="col-md-4">
        {{news.id}}
        <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="http://www.elsetge.cat/imagepost/b/0/2025_free-wallpaper-images.jpg" alt="Card image cap">
            <div class="card-body bg-info">
                <p class="card-text font-weight-bold">{{news.title}}</p>
                <p class="card-text font-weight-bold"> {{news.content.substring(0,300)+".." }}</p>
                <p class="card-text font-weight-bold">{{news.content.substring(0,100)+".." }}</p>
                <div class="d-flex justify-content-between align-items-center ">
                    <div class="btn-group">
                        <router-link :to="{name:'newsView',params:{id:news.id},query:{news:news}}"
                                     class="btn btn-outline-primary text-dark">View
                        </router-link>
                        <button type="button" class="btn btn-sm btn-outline-primary text-dark">Edit</button>
                    </div>
                    <small class="text-dark">Published {{news.published_data}}</small>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "News",
        props: ['news']
    }
</script>

<style scoped>

</style>
