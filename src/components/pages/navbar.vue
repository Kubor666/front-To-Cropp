<template>
  <div id="navi">
    <nav class="navbar navbar-dark bg-primary">
      <div class="row nav">
        <div class='container'>
          <div class="col-2 nav-left">
            <router-link :to="'/'">logo</router-link>
          </div>
          <div class="col-8 nav-middle">
          </div>
          <div class="col-2 nav-right">
           <router-link :to="'buy'">buy</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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

.nav-right{
  width: 10%;
}

.nav{
  width:100%;
  margin: auto;
}
.bg-primary{
  background-color: #529DFF !important;
}
</style>
