<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom box-shadow border">
        <h4 class="my-0 mr-md-auto font-weight-normal">Vue JS Api</h4>
        <nav class="my-2 my-md-0 mr-md-3 text-dark">
            <router-link class="p-2 text-dark btn" :to="{name:'home'}">Home</router-link>
            <router-link class="p-2 text-dark btn" :to="{name:'register'}">Register</router-link>
            <router-link class="p-2  btn btn-sm btn-outline-primary" :to="{name:'login'}">Sign In</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        props:['newsData']
    }
</script>

<style scoped>
   
</style>
