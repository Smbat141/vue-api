<template>
    <div>
        <button class="btn btn-success" @click="addNews">Add News</button>
<!--        <app-news v-for="n in newsData" :news="n" :key="n.id"></app-news>-->
    </div>
</template>

<script>
    import News from "../News";

    export default {
        name: "myNews",
        components:{
            appNews:News
        },
        computed:{
            newsData(){

            }
        },
        methods:{
            addNews(){
                this.$router.push('/addNews')
            }
        }
    }

</script>

<style scoped>

</style>
