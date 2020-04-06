<template>
  <div id="app">
    <NavBar/>
    <HelloWorld/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar
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
