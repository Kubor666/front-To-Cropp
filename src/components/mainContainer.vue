<template>
  <div id="main-container" class="container py-5">
    <div class="row">
      <div class="col-2 left">
      </div>
      <div class="col-8 middle">
        <h1>Image to packshot converter</h1>
        <h3 class="secondary-text">Now you can easily convert your photo to the packshot</h3>
      </div>
      <div class="col-2 left">
      </div>
    </div>
    <div class="row">
      <div class="col-12 middle">
        <div class="file-section">
          <div class="send-file">
            <i class="fas fa-plus fa-5x"></i>
            <div class="regular-text">Drop the files here</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainContainer',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.file-section{
  padding-top: 30px;
  padding-bottom: 20px;
}

.secondary-text{
  color: #6F7882;
}

.send-file{
  background-color: #fff;
  border-radius:15px;
  height: 200px;
  padding-top: 3em;
}

.regular-text{
  color: #6F7882;
  padding-top:20px;
}

</style>
