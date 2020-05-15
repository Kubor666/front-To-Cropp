<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
    <ads/>
    <NavFooter/>
  </div>
</template>

<script>
import NavBar from './components/pages/navbar.vue'
import NavFooter from './components/pages/footer.vue'
import ads from './components/pages/ads.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NavFooter,
    ads
  }
}
</script>

<style>


</style>
