<template>
    <div>
        <form class="form-signin" @submit.prevent>
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus
                   v-model="email">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
                   v-model="password">
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
        {{email}}
        {{password}}
    </div>
</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
                userData: [
                    {
                        name: 'John',
                        surname: 'Fernandez',
                        email: 'user1@gmail.com',
                        password:'secret',
                        status: 'block', //active or block
                        activity: 'offline', //online or offline
                        last_visit: '2019-04-29',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrkZnWIcM5SWiw59Vh5tdKzHNCtbVcTiLc2v6YNtXY52jTIb--A',
                        role_id: 1, //1:user,2:admin,3:manager
                        user_id:1,
                    },
                    {
                        name: 'Michael',
                        surname: 'Jordan',
                        email: 'user2@gmail.com',
                        password:'secret',
                        status: 'block', //active or block
                        activity: 'online', //online or offline
                        last_visit: '2019-04-29',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrkZnWIcM5SWiw59Vh5tdKzHNCtbVcTiLc2v6YNtXY52jTIb--A',
                        role_id: 1, //1:user,2:admin,3:manager
                        user_id:2,
                    },
                    {
                        name: 'Morgan',
                        surname: 'Freeman',
                        email: 'user3@gmail.com',
                        password:'secret',
                        status: 'block', //active or block
                        activity: 'online', //online or offline
                        last_visit: '2019-04-29',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrkZnWIcM5SWiw59Vh5tdKzHNCtbVcTiLc2v6YNtXY52jTIb--A',
                        role_id: 1, //1:user,2:admin,3:manager
                        user_id:3,
                    }
                ],
            }
        },
        validations: {
            email: {
                email,
                required
            },
            password: {
                required
            }
        },
        methods: {
            login() {
                this.userData.map((user) => {
                    if (user.email === this.email && user.password === this.password) {
                        this.$router.push('/profile');
                        this.$store.commit('userChange',user);

                    }
                    else{
                        //
                    }
                })
            }
        }

    }
</script>

<style scoped>
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
