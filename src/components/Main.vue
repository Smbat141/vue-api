<template>
    <div>
        <div>
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row">
                        <app-news v-for="n in newsData" :news="n" :key="n.id"></app-news>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <button class="page-link" @click="previus">Previous</button>
                            </li>
                            <li class="page-item" v-for="pages in lastPage" :key="pages" @click="thisPage(pages)">
                                <button class="page-link">{{pages}}</button>
                            </li>
                            <li class="page-item">
                                <button class="page-link" @click="next">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import axios from "axios";

    import News from "./News";

    export default {
        name: "Main",
        data() {
            return {
                newsData: [],
                page: '',
                lastPage: '',
            }
        },
        components: {
            appNews: News
        },
        methods: {
            next() {
                if (this.page < this.lastPage) {
                    this.page++;
                    axios.get('http://127.0.0.1:8000/api/newses?page=' + this.page).then(response => {
                        this.newsData = response.data.data
                    })
                }
            },
            previus() {
                if (this.page > 1) {
                    this.page--;
                    axios.get('http://127.0.0.1:8000/api/newses?page=' + this.page).then(response => {
                        this.newsData = response.data.data
                    })
                }
            },
            thisPage(page) {
                axios.get('http://127.0.0.1:8000/api/newses?page=' + page).then(response => {
                    this.page = response.data.meta.current_page
                    this.newsData = response.data.data
                })
            }
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/newses').then(response => {
                if (response.status === 200) {
                    this.page = response.data.meta.current_page;
                    this.lastPage = response.data.meta.last_page;
                    this.$store.commit('INITNEWS', response.data.data);
                    this.newsData = this.$store.state.news;
                }
            });
        },
        computed: {
            news() {
            }
        }

    }
</script>

<style scoped>

</style>
