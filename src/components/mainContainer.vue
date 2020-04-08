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
          <div class="send-file" v-cloak @drop.prevent="addFile" @dragover.prevent>
            <i class="fas fa-plus fa-5x"></i>
            <ul> 
              <li v-for="file in files">
                {{ file.name  }} ({{ file.size | kb }} kb) <button @click="removeFile(file)" title="Remove">X</button>
              </li>
            </ul>
            <button :disabled="uploadDisabled" @click="upload">Upload</button>
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
  data() {
    files:[]
  },

  computed: {
    uploadDisabled() {
      return this.files.length === 0;
    }
  },

  methods: {
    addFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if(!droppedFiles) return;
      ([...droppedFiles]).forEach(f => {
        this.files.push(f);
      });
    },

    removeFile(file){
      this.files = this.files.filter(f => {
        return f != file;
      });
    },

    upload() {

      let formData = new FormData();
      this.files.forEach((f,x) => {
        formData.append('file'+(x+1), f);
      });

      fetch('https://httpbin.org/post', {
        method:'POST',
        body: formData
      })
      .then(res => res.json())
      .then(res => {
        console.log('done uploading', res);
      })
      .catch(e => {
        console.error(JSON.stringify(e.message));
      });
    }
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
