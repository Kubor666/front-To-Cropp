<template>
    <section id="king-section" class="pricing py-5">
        <div class="container">
        <div class="row">

            <div class="col-md-12 col-md-offset-2">
                <form role="form">

                    <h2 class="text-center">Register</h2>

                    <fieldset>
                        <legend>Account Details</legend>

                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="first_name">First name</label>
                                <input type="text" class="form-control" v-model="credentials.first_name" name="" id="first_name" placeholder="First Name">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="last_name">Last name</label>
                                <input type="text" class="form-control" v-model="credentials.last_name" name="last_name" placeholder="Last Name">
                            </div>
                        </div>


                        <div class="row">
                            <div class="form-group col-md-12">
                                <label for="">Email</label>
                                <input type="email" class="form-control" v-model="credentials.email" name="email"  placeholder="Email">                           </div>
                        </div>


                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" v-model="credentials.password" name="password" id="password" placeholder="Password">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="confirm_password">Confirm Password</label>
                                <input type="password" class="form-control" ref="password" name="" id="confirm_password" placeholder="Confirm Password">
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
                                <button type="submit" class="btn btn-primary" @click=sendForm()>
                                    Register
                                </button>
                                <p class="haveAccount" @click="changeModalState">Already have an account?</p>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    data() {
        return{
            credentials:{
                first_name: '',
                last_name:'',
                email:'',
                password:'',
                errors: []
            }
        }
    },
    methods: {
    changeModalState () {
      this.$store.commit('toggleModal')
    },
    sendForm (){
        console.log(this.credentials);
        fetch('http://localhost:3000/login/api/register', {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.credentials)
      })
        .then(json => console.log(json))
        .then(function (data) {
             console.log('Request succeeded with JSON response', data);
         })
        .catch(function (error) {
            console.log('Request failed', error);
         })
        
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