<template>
  <div id="navi">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <div class="row nav">
        <div class='container'>
          <div class="col-2 nav-left">
            <router-link :to="'/'">logo</router-link>
          </div>
          <div class="col-5 nav-middle">
          </div>
          <div class="col-2 nav-login">
            <div @click="changeModalState"> login </div>
          </div>
          <div class="col-1 nav-right">
           <router-link :to="'buy'">buy</router-link>
          </div>

          <div v-if="currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">
                {{ currentUser.username }}
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href @click.prevent="logOut">
                logOut
              </a>
            </li>
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
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }
      return false;
    },
    showModal () {
      return this.$store.state.showModal
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/home');
    },
    changeModalState () {
      this.$store.commit('toggleModal')
    }
  }
}
</script>

<style lang="scss">

a {
  color: inherit !important;
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
  cursor: pointer;
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
