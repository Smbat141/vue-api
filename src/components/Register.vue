<template>
    <div class="container">
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
                            <input type="text" name="name" class="form-control" id="name" v-model="credentials.name" placeholder="John">
                        </div>
                    </div>

                </div>
                <div class="col-md-3 ">
                    <div class="form-control-feedback">
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
                            <input type="text" name="sname" class="form-control" id="sname" v-model="credentials.sname"   placeholder="Morgan">
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
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
                            <input type="text" name="email" class="form-control" id="email" v-model="credentials.email"
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
                            <input type="password" name="password" class="form-control" id="password" v-model="credentials.password"
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
                            <input type="password" name="password-confirmation" class="form-control" v-model="credentials.confirm_password"
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
    import axios from 'axios';
    export default {
        name: "Register",
        data(){
            return {
                credentials: {
                    name:'',
                    sname:'',
                    email:'',
                    password:'',
                    confirm_password:'',
                }
            }
        },
        validations: {
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
             axios.post('http://127.0.0.1:8000/api/register', this.credentials).then(response => {
                 if (response.status === 200) {
                     localStorage.setItem('user', JSON.stringify(response.data));
                     this.$store.commit('auth', response.data);
                     this.$router.push('/profile');
                 }
             });
          }
        },
    }
</script>

<style scoped>

</style>
