<template>
  <div id="navi">
    <nav class="navbar navbar-dark bg-primary">
      <div class="row nav">
        <div class='container'>
          <div class="col-2 nav-left">
            <router-link :to="'/'">logo</router-link>
          </div>
          <div class="col-7 nav-middle">
          </div>
          <div class="col-2 nav-login">
            <button type="button" class="btn btn-primary" @click='changeModalState'>login
              </button>
          </div>
          <div class="col-1 nav-right">
           <router-link :to="'buy'">buy</router-link>
          </div>
        </div>
      </div>
    </nav>
    <modal v-show="showModal"/>
  </div>
</template>

<script>
import modal from './loginModal'

export default {
  name: 'NavBar',
  components: {
    modal
  },

  computed: {
    showModal () {
      return this.$store.state.showModal
    }
  },
  methods: {
    changeModalState () {
      this.$store.commit('toggleModal')
    }
  }
}
</script>

<style lang="scss">
a {
  color: inherit;
  text-decoration: inherit;
}

a:hover{
  color:inherit;
  text-decoration: inherit;
}

.navbar{
  color: #fff;
  height: 70px;
  font-size: 2.5rem;

}

.nav-middle{
  width: 80%;
}

.nav-left{
  width: 10%;
}

.nav-login{
  text-align: center;
}

.nav-right{
  width: 10%;
  text-align: right;
}

.nav{
  width:100%;
  margin: auto;
}
.bg-primary{
  background-color: #529DFF !important;
}
</style>
