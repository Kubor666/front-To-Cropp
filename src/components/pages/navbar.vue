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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">login
              </button>
          </div>
          <div class="col-1 nav-right">
           <router-link :to="'buy'">buy</router-link>
          </div>
        </div>
      </div>
    </nav>
    <!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
