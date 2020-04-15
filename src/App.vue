<template>
  <div id="app">
    <NavBar/>
    <mainContainer>

    </mainContainer>

    <ads/>

    <NavFooter/>

  </div>
</template>

<script>
import mainContainer from './components/mainContainer.vue'
import NavBar from './components/navbar.vue'
import ads from './components/ads.vue'
import NavFooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    mainContainer,
    NavBar,
    ads,
    NavFooter
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
  background: #fff;
}
.container-mainContent{
  max-width:100%;
}

.content{
  width: 80%;
  margin: auto;
  margin-top: 60px;
}


</style>
