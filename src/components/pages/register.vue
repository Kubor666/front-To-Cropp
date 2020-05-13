<template>
    <section id="king-section" class="pricing py-5">
        <div class="container">
        <div class="row">

            <div class="col-md-12 col-md-offset-2">
                <form name="form" @submit.prevent="handleRegister">
                    <div v-if="!succesful">

                        <h2 class="text-center">Register</h2>

                        <fieldset>
                            <legend>Account Details</legend>

                            <div class="row">
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input
                                        v-model="user.username"
                                        v-validate="'required|min:3|max:20'"
                                        type="text"
                                        class="form-control"
                                        name="username"
                                    />
                                    <div
                                        v-if="submitted && errors.has('username')"
                                        class="alert-danger"
                                    >{{errors.first('username')}}</div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="email">Email</label>
                                    <input
                                     type="email"
                                     class="form-control"
                                     v-model="user.email"
                                     v-validate="'required|email|max:50'"
                                     name="email" 
                                     placeholder="Email"
                                    />
                                    <div
                                        v-if="submitted && errors.has('email')"
                                        class="alert-danger"
                                    >{{errors.first('email')}}</div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="password">Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        v-model="user.password"
                                        v-validate="'required|min:6|max:40'"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <div
                                        v-if="submitted && errors.has('password')"
                                        class="alert-danger"
                                    >{{errors.first('password')}}</div>
                                </div>
                            </div>


                        </fieldset>
                        <div class="row">
                            <div class="form-group">
                                <div class="col-md-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" value="" id="">
                                            I accept the <a href="#">terms and conditions</a>.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group">
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-primary">
                                        Register
                                    </button>
                                    <p class="haveAccount" @click="changeModalState">Already have an account?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div
                    v-if="message"
                    class="alert"
                        :class="succesful ? 'alert-success' : 'alert-danger'"
                >{{message}}</div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import User from '../../models/user';

export default {
    name: 'Register',
    data() {
        return{
           user: new User('', '', ''),
           submitted: false,
           succesful: false,
           message: ''
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    mounted() {
        if(this.loggedIn) {
            this.$router.push('/profile');
        }
    },
    methods: {
    changeModalState () {
      this.$store.commit('toggleModal')
    },
    handleRegister (){
        this.message = '';
        this.submitted = true;
        this.$validator.validate().then(isValid => {
            if (isValid) {
                this.$store.dispatch('auth/register', this.user).then(
                    data => {
                        this.message = data.message;
                        this.succesful = true;
                    },
                    error => {
                        this.message =
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString();
                        this.succesful = false;
                    }
                );
            }
        });
    }
}
}
</script>

<style lang="scss">
form > fieldset > legend {
    font-size:120%;
}

.haveAccount{
    margin-top: 20px;
    margin-bottom: 0px;
}
</style>