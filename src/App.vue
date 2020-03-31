<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
      <div class=" row nav">
        <div class="col-sm nav-left">
          logo
        </div>
        <div class="col-sm nav-middle">
        </div>
        <div class="col-sm nav-right">
          buy
        </div>
      </div>
    </nav>
    <div class="row content">
      <div class="col-sm">
      </div>
      <div class="col-sm">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
      <div class="col-sm">
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content{
  width: 80%;
  margin: auto;
  margin-top: 60px;
}

.navbar{
  height: 40px;
}

.nav-middle{
  width: 80%;
}

.nav-left{
  width: 10%;
}

.nav-right{
  width: 10%;
}

.nav{
  width:100%;
}

</style>
