<template>
    <div >
        <div >
            <div class="album py-5 bg-light" >
                <div class="container">
                    <div class="row" >
                        <app-news v-for="n in newsData" :news="n" :key="n.id"></app-news>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import News from "./News";

    export default {
        name: "Main",
        data(){
            return {
                newsData: [
                    {
                        id:1,
                        title: 'News 1',
                        content: 'This is a wider card with supporting text below as a naturallead-in to ' +
                            'additional content. This content is a little bit longer',
                        short_content: 'His short content is a little bit longer',
                        published_data: '2019-4-29',
                        status: 'active', // or block
                        image: 'http://www.elsetge.cat/imagepost/b/0/2025_free-wallpaper-images.jpg',
                        user_id: 1,
                        category_id: 1,
                    },
                    {
                        id:2,
                        title: 'News 2',
                        content: 'This is a wider card with supporting text below as a naturallead-in to ' +
                            'additional content. This content is a little bit longer',
                        short_content: 'His short content is a little bit longer',

                        published_data: '2019-4-29',
                        status: 'active', // or block
                        image: 'https://www.askideas.com/media/36/Back-Picture-Of-Taj-Mahal-At-Sunset-Across-Yamuna-River.jpg',
                        user_id: 1,
                        category_id: 1,
                    },
                    {
                        id:3,
                        title: 'News 3',
                        content: 'This is a wider card with supporting text below as a naturallead-in to ' +
                            'additional content. This content is a little bit longer',
                        short_content: 'His short content is a little bit longer',
                        published_data: '2019-4-29',
                        status: 'active', // or block
                        image: 'https://www.setaswall.com/wp-content/uploads/2017/12/Cherry-Blossom-Tree-Wallpaper-25-1024x768.jpg',
                        user_id: 1,
                        category_id: 1,
                    },

                ],
            }
        },
        components:{
            appNews:News
        }
    }
</script>

<style scoped>

</style>
