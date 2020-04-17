<template>
  <div id="king-container">
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
            <div class="send-file shadow-sm p-3 mb-5 bg-white rounded" v-cloak @drop.prevent="addFile" @dragover.prevent>
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
  </div>
</template>

<script>
import { saveAs } from 'file-saver'

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
      this.files.forEach(f => {
        let formData = new FormData();
        let file_name= f.name
        formData.append('imageUpload', f);

      fetch('http://localhost:3000/', {
        method:'POST',
        body: formData
      })
      .then(res => {
        res.blob().then(blob => {
        const file = new File([blob], "afterconversion"+file_name, {type: "png", lastModified: Date.now()});

        console.log({ blob })

        saveAs(file)
        })
      })
      .catch(e => {
        console.error(JSON.stringify(e.message));
      });
      });
    }
  }
}
</script>

<style lang="scss">

.btn {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

#king-container{
  background-color: #eee;
  box-shadow: inset 0 3px 3px 0 rgba(#000, 0.23) ;
  box-shadow: inset 0 -.125rem .25rem rgba(0,0,0,.075)!important;
}

.choose{
  margin-right: 20px;
  background-color: #0571FF;
  border-color: #0571FF;
}

.fas{
  cursor: pointer;
  color: #0571FF;
}

.file-section{
  display: block;
  overflow: auto;
  padding-top: 30px;
  padding-bottom: 20px;
}

.upload{
  background-color: #0554F2;
  border-color: #0554F2;
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
}

.regular-text{
  color: #6F7882;
  padding-bottom: 0.5em;
}
</style>
