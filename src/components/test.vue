<template>
    <div>
        <div class="h4">Upload Image</div>
    <p>{{ fileName }}</p>
    <input 
        type="file"
        accept="image/*"
        ref="file.value"
        @change="onFileChange"
        class="form-control-file"
    >
    <img :src="file" alt="">
    <!-- <v-btn @click="selectFile()">
      <span v-if="!file">Upload Image</span>
      <span v-else>Change Image</span>
    </v-btn>
    <v-btn @click="removeFile" v-if="file">Remove Image</v-btn> -->
    </div>
</template>

<script>
export default {
    setup(){
        return
    },
    data: () => ({
        file: ''
    }),
    methods: {
    //   selectFile(){
    //   this.$refs.file.click()
    // },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return
      }
      this.fileName = files[0].name
      this.createImage(files[0])
    },
    createImage(file) {
      var image = new Image()
      var reader = new FileReader()

      reader.onload = (e) => {
        this.file = e.target.result;
        this.$emit('change', this.file)
      }
      reader.readAsDataURL(file)
    },
    // removeFile() {
    //   this.file = ''
    //   this.fileName = ''
    // }
    },
}
    
</script>

<style scoped>
.d-none { display: none !important; }
</style>