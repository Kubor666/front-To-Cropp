<template>
    <section id="king-section" class="pricing py-5">
        <div class="container">
        <div class="row">

            <div class="col-md-12 col-md-offset-2">
                <form role="form" method="POST" action="#">

                    <h2 class="text-center">Register</h2>

                    <fieldset>
                        <legend>Account Details</legend>

                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="first_name">First name</label>
                                <input type="text" class="form-control" name="" id="first_name" placeholder="First Name">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="last_name">Last name</label>
                                <input type="text" class="form-control" name="last_name" id="" placeholder="Last Name">
                            </div>
                        </div>


                        <div class="row">
                            <div class="form-group col-md-12">
                                <label for="">Email</label>
                                <input type="email" class="form-control" name="" id="" placeholder="Email">
                            </div>
                        </div>


                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" name="" id="password" placeholder="Password">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="confirm_password">Confirm Password</label>
                                <input type="password" class="form-control" name="" id="confirm_password" placeholder="Confirm Password">
                            </div>
                        </div>


                    </fieldset>

                    <fieldset>
                        <legend>Optional Details</legend>


                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="country">Country of Residence</label>
                                <select class="form-control" name="" id="country">
                                    <option>Country 1</option>
                                    <option>Country 2</option>
                                    <option>Country 3</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-md-12">
                                <label for="found_site">How did you find out about the site?</label>
                                <select class="form-control" name="" id="found_site">
                                    <option>Company</option>
                                    <option>Friend</option>
                                    <option>Colleague</option>
                                    <option>Advertisement</option>
                                    <option>Google Search</option>
                                    <option>Online Article</option>
                                    <option value="other" >Other</option>
                                </select>
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

                </form>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    

    methods: {
    changeModalState () {
      this.$store.commit('toggleModal')
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