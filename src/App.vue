<template>
    <div class="app ">
        <app-navbar></app-navbar>
        <router-view style="width: 100%;min-height:300px;"></router-view>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import Footer from "./components/Footer";
    import Navbar from "./components/Navbar";

    export default {
        name: 'app',
        data() {
            return {
                userActive: {},
            }
        },
        components: {
            appFooter: Footer,
            appNavbar: Navbar,
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>
