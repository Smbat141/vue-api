<template>
    <div class="container">
        {{userData.length}}
        <form class="form-horizontal" role="form" @submit.prevent>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h2>Register New User</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="name">Name</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon is-invalid" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                            <input type="text" name="name" class="form-control" id="name" v-model="name"   placeholder="John">
                        </div>
                    </div>

                </div>
                <div class="col-md-3 ">
                    <div class="form-control-feedback " >
                        <span class="text-danger align-middle">
                            <i class="fas fa-window-close" v-if="!$v.name.required"> Name is required</i>
                            <i class="fas fa-window-close" v-if="!$v.name.minLength"> Min length 4</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="name">Surname</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon is-invalid" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                            <input type="text" name="sname" class="form-control" id="sname" v-model="sname"   placeholder="Morgan">
                        </div>
                    </div>

                </div>
                <div class="col-md-3 ">
                    <div class="form-control-feedback " >
                        <span class="text-danger align-middle">
                            <i class="fas fa-window-close" v-if="!$v.sname.required"> Surname is required</i>
                            <i class="fas fa-window-close" v-if="!$v.sname.minLength"> Min length 4</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="email">E-Mail Address</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                            <input type="text" name="email" class="form-control" id="email" v-model="email"
                                   placeholder="you@example.com" required autofocus>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                            <i class="fas fa-window-close" v-if="!$v.email.required"> Mail is required</i>
                            <i class="fas fa-window-close" v-if="!$v.email.email"> Not correct</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="password">Password</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group has-danger">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                            <input type="password" name="password" class="form-control" id="password" v-model="password"
                                   placeholder="Password" required>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                            <i class="fas fa-window-close" v-if="!$v.password.required"> Pssword is required</i>
                            <i class="fas fa-window-close" v-if="!$v.password.minLength"> Min length 6</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="password">Confirm Password</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem">
                                <i class="fas fa-redo-alt"></i>
                            </div>
                            <input type="password" name="password-confirmation" class="form-control" v-model="confirm_password"
                                   id="password-confirm" placeholder="Password" required>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                            <i class="fas fa-window-close" v-if="!$v.confirm_password.sameAsPassword"> not match</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <button type="submit" :disabled="$v.$invalid" class="btn btn-success" @click="register">
                        <i class="fa fa-user-plus">Register</i>
                    </button>
                </div>
            </div>
        </form>
        <!--<pre>
            {{$v}}
        </pre>-->
    </div>
</template>

<script>
    import { required, minLength,email,sameAs } from 'vuelidate/lib/validators'
    export default {
        name: "Register",
        data(){
            return {
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
                name:'',
                sname:'',
                email:'',
                password:'',
                confirm_password:'',
            }
        },
        validations:{
            name:{
                required,
                minLength:minLength(4),
            },
            sname:{
                required,
                minLength:minLength(4),
            },
            email:{
                required,
                email,
            },
            password:{
                required,
                minLength:minLength(6),
            },
            confirm_password: {
                sameAsPassword:sameAs('password')
            }
        },
        methods:{
          register(){
              this.userData.push({
                  name: this.name,
                  surname: this.sname,
                  email: this.email,
                  password:this.password,
                  status: 'block', //active or block
                  activity: 'online', //online or offline
                  last_visit: '2019-04-29',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrkZnWIcM5SWiw59Vh5tdKzHNCtbVcTiLc2v6YNtXY52jTIb--A',
                  role_id: 1, //1:user,2:admin,3:manager
                  user_id:this.userData.length ? this.userData[this.userData.length - 1].user_id + 1 : 1,
              })
              let user = this.userData[this.userData.length-1]
              console.log(user);
              //this.$router.push('/profile');
              //this.$store.commit('userAuth',user);
          }
        },


    }
</script>

<style scoped>

</style>
