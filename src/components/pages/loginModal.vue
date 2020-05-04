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
              <form role="form">
                <input type="hidden" name="_token" value="">
                <div class="form-group">
                  <label class="control-label">E-Mail Address</label>
                    <div>
                      <input type="email" class="form-control input-lg" v-model="this.login" name="email" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Password</label>
                      <div>
                        <input type="password" class="form-control input-lg" v-model="this.password" name="password">
                      </div>
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
                    <div>
                      <button type="submit" class="btn btn-dark btn-block login" @click="sendAuth()">Login</button>
                    </div>
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
export default {
    name: 'modal',
    data () {
      return {
        credentials: {
          login: '',
          password: ''

        }
      }
    },

    methods: {
    changeModalState () {
      this.$store.commit('toggleModal')
    },

    sendAuth() {
      
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