<template>
    <div>
        <h1>Hello {{user.name}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        computed:{
            user(){
               return this.$store.state.auth.user;
            }
        },

    }
</script>

<style scoped>

</style>
