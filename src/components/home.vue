<template>
  <div id="home">
    <mainContainer/>
  </div>
</template>

<script>
import mainContainer from './pages/mainContainer.vue'


export default {
  name: 'Home',
  components: {
    mainContainer,
  }
}
</script>

<style>
#home {
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
