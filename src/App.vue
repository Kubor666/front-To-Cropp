<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
    <NavFooter/>
  </div>
</template>

<script>
import NavBar from './components/pages/navbar.vue'
import NavFooter from './components/pages/footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NavFooter
  }
}
</script>

<style>


</style>
