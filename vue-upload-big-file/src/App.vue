<template>
  <div id="app">
    <input type="file" @change="handleFileChange">
  </div>
</template>


<script>

const Status={
  wait:"wait",
  uploading:"wploading",
  pasue:"pause"
};
const Size=0.3*1024*1024;
export default {
  name: 'App',
  data:()=>({
    container:{
      file : null,
      hash : ""
    },
    status:Status.wait
    
   
  }),
  // data :{
  //   function () {
  //    return container:{
  //       file:null,
  //       hash:""
  //     };
      
  //   }
  // },
  methods:{
    async handleUpload(e){
      if(!this.container.file)return;
      this.status=Status.uploading;
      const fileChunkList=this.createFileChunk(this.container.file);
      console.log(fileChunkList);
    },
      handleFileChange(e){
        //文件的切割
        console.log(e.target.files);
        const [file]= e.target.files;
        this.container.file=file;
      },
 
    createFileChunk(file,size=Size){
      const fileChunkList=[];
      let cur=0;
      while(cur<file.size){
        fileChunkList.push({
          flie:flie.sloce(cur,cue+size)
        })
        cur+=size;

      }
      return fileChunkList;
    },

    components: {
    
    } 
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
