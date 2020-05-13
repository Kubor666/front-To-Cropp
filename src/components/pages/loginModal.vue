<template>
<transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-xs-center">Log in like a Boss</h4>
              <button type="button" class="close" @click='changeModalState'>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form role="form" @submit.prevent="handleLogin">
                <input type="hidden" name="_token" value="">
                <div class="form-group">
                  <label for="username" class="control-label">E-Mail Address</label>
                    <div>
                      <input
                        type="email"
                        class="form-control input-lg"
                        v-model="user.username"
                        v-validate="'required'"
                        name="username"
                        />
                    </div>
                    <div
                      v-if="error.has('username')"
                      class="alert alert-danger"
                      role="alert"
                      >Username is required!</div>
                  </div>
                  <div class="form-group">
                    <label for="password" class="control-label">Password</label>
                      <div>
                        <input
                          type="password"
                          class="form-control input-lg"
                          v-model="user.password"
                          v-validate="'required'"
                          name="password">
                      </div>
                      <div
                        v-if="errors.has('password')"
                        class="alert alert-danger"
                        role="alert"
                      >Password is required!</div>
                  </div>
                  <div class="form-group">
                    <div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" name="remember"> Remember Me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                      <button class="btn btn-dark btn-block login" :disabled="loading">
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                        <span>Login</span>
                      </button>
                  </div>
                  <div class="form-group">
                    <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                  </div>
              </form>
            </div>
            <div class="modal-footer">
                <div class=" forgot-password_footer">
                  <a href="">Forgot Your Password?</a>
                </div>
                <div class=" sign-up_footer">
                Don't have an account? <a href="/auth/register">Sign up »</a>
                </div>
            </div>
        </div>
    </div>
      </div>
</transition>    
</template>

<script>
import User from '../../models/user'

export default {
    name: 'modal',
    data () {
      return {
        user: new User('', ''),
        loading: false,
        message: ''
      }
    },

    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
    },
    methods: {
      handleLogin() {
        this.loading = true;
        this.$validator.validateAll().then(isValid => {
          if(!isValid) {
            this.loading = false;
            return;
          }
          
          if(this.user.username && this.user.password) {
            this.$store.dispatch('auth/login', this.user).then(
              () => {
                this.$router.push('/profile');
              },
              error => {
                this.loading = false;
                this.message =
                  (error.response && err.response.data) ||
                  error.message ||
                  error.toString();
              }
            );
          }
        });
      },

      changeModalState () {
        this.$store.commit('toggleModal')
      },

    sendAuth() {
      this.$store.dispatch('AUTH_REQUEST', this.credentials).then(() => {
        this.$router.push('boatever')
      })
      
    }
  }
    
}
</script>

<style lang="scss">

.modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }


.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-lg {
    max-width: 50% !important;
    margin: 0;
    width: 80%;
  }

  .modal-footer{
    display: flex;                /* make container a flexbox */
    justify-content: center;      /* center child elements ("flex items") */
    position: relative;
    padding-bottom: 25px;
  }

  .login{
    background-color: #0571FF;
    border-color: #0571FF;
    margin-top: 20px;
  }

  .sign-up_footer{
    position: absolute;
    right: 10px;
    bottom: 0px;
  }

  .forgot-password_footer{
    position: absolute;
    left: 10px;
    bottom: 0px;
  }

</style>