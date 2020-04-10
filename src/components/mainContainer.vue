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
            <i class="fas fa-plus fa-5x" @click="chooseFiles"></i>
            <ul class="uploadTable"> 
              <li v-bind:key="file.name" v-for="file in files">
                {{ file.name  }} ({{ (file.size/1024).toFixed(1) }} kb) <i class="fas fa-trash" @click="removeFile(file)" title="Remove"></i>
              </li>
            </ul>
            <div class="regular-text">Drop the files here</div>
            <input id="fileUpload" type="file" @change='previewFiles' hidden>
            <button class="btn btn-dark choose" @click="chooseFiles">Choose</button>
            <button class="btn btn-dark upload" :disabled="uploadDisabled" @click="upload">Upload</button>
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
    return {
      files: []
    }
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

    previewFiles(event) {
     this.files = [...this.files, ...event.target.files]
   },

    chooseFiles() {
        document.getElementById("fileUpload").click();
      },

    removeFile(file){
      this.files = this.files.filter(f => {
        return f != file;
      });
    },

    upload() {

      let formData = new FormData();
      this.files.forEach(f => {
        formData.append('imageUpload', f);
      });

      fetch('http://localhost:3000/', {
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

.choose{
  margin-right: 20px;
}

.fas{
  cursor: pointer;
}

.file-section{
  display: block;
  overflow: auto;
  padding-top: 30px;
  padding-bottom: 20px;
}

.send-file:hover{
  box-shadow: 0 12px 12px 0 rgba(#000, 0.25),  0 9px 6px 0 rgba(#000, 0.22);
}

.uploadTable{
  margin-top: 1rem;
  list-style-type: none;
}

.secondary-text{
  color: #6F7882;
}

.send-file{
  display: block;
  overflow: auto;
  background-color: #fff;
  border-radius:15px;
  min-height: 200px;
  padding-top: 2em;
  padding-bottom: 2em;
  box-shadow: 0 10px 10px 0 rgba(#000, 0.19), 0 6px 3px 0 rgba(#000, 0.23)
}

.regular-text{
  color: #6F7882;
  padding-bottom: 0.5em;
}
</style>
