<template>
  <div id="app">
    <input type="file" @change="handleFileChange">
    <el-button @click="handleUpload">上传</el-button>
    <el-button @click="handleResume">恢复</el-button>
    <el-button @click="handlePause">暂停</el-button>
    
    <div>计算hash</div>
    <el-progress :percentage="hashPercentage"></el-progress>
    <div> 总进度</div>
    <el-progress :percentage="fakeUploadPercentage"></el-progress>
    <div> 
      <el-table :data="data">
        <el-table-column prop="hash" label="切片hash" align="center"></el-table-column>
        <el-table-column label="大小(kb)" align="center" width="120">
          <template v-slot="{row}">
            {{row.size | transfromByte}}
          </template>
        </el-table-column>
        <el-table-column lable="进度" align="center">
          <template v-slot="{row}">
              <el-progress :percentage="row.percentage" color="#909399">
              </el-progress>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

const Status={
  wait:"wait",
  uploading:"uploading",
  pasue:"pause"
};
const Size=0.1*1024*1024;
export default {
  name: 'App',
  filters: {
    transfromByte(val){
      return Number((val/1024).toFixed(0));
    }
  },
  computed : {
    uploadPercentage (){
      if(!this.container.file || !this.data.length) return;
      const loaded = this.data
      .map(item => item.size * item.percentage)//每一个切片的文件 item 在之中有 percentage  
      .reduce((acc , cur)=> acc + cur)//?????
      return parseInt((loaded /this.container.file.size).toFixed(2));
    }
  },
  watch: {//监听parseInt这个函数
    uploadPercentage(now){
      if(now => this.fakeUploadPercentage){      
          this.fakeUploadPercentage=now 
      }
    }
  },
  
  data:()=>({
    fakeUploadPercentage :0,
    container:{
      file : null,
      hash : ""
    },
    status:Status.wait,
    hashPercentage : 0,
    data:[],//需要上传的数据
    requestList: []//放入 每一个切片的XHR (xhr)保存
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
    handlePause(){
      this.status=Status.pause;//状态
      this.resetData();

    },
    resetData(){
      this.requestList.forEach(xhr =>xhr.abort()); //xhr的列表
      this.requestList= [];
      if(this.container.worker){
        this.container.worker.onmessage= null;
      }
    },
    async handleResume(){
      this.status=Status.uploading;
      const { uploadedList }= await this.verifyUpload(
        this.container.file.name,
        this.container.hash
      )
      await this.uploadChunks(uploadedList);
    },
      request({
           url,//请求的地址
           method='POST',
           data,
           onProgress= e =>e,
           headers={},//头信息
           requestList
       }) {
           return new Promise(resolve =>{//  在Premise中 花时间的东西（请求）异步操作成功  则运行这一步
               const xhr = new XMLHttpRequest();//新建一个XMLHttpRequest的实例
               xhr.open(method,url);//请求  向远程主机发出一个HTTP请求。
               xhr.upload.onprogress=onProgress;
               Object.keys(headers).forEach(key=>
               xhr.setRequestHeader(key,headers[key]) //加请求头
               );
               xhr.send(data);//将数据带过去
               xhr.onload = e =>{  //传输完成时候 加入一个监听
                if(requestList){
                 //全部完成  就删除保存的对象 xhr 
                 const xhrIndex =requestList.findIndex(item => item===xhr);  //存在位置的找序号
                 requestList.splice(xhrIndex,1);  //删保存的对象 xhr
               }
                   resolve({
                       data:e.target.response  //将返回信息放入在data中
                   });                  
               };
               if(requestList){//if存在requestList 执行 存放传输的xhr对象
                 console.log("第一个",requestList);
                 requestList.push(xhr);
                 console.log(requestList);


               }
           });
       },



    async calculatehash(fileChunkList){//计算hash
      return new Promise(resolve=>{
        this.container.worker=new Worker("/hash.js");
        this.container.worker.postMessage({ fileChunkList});
        this.container.worker.onmessage=e=>{
          console.log(e.data);
          const {percentage,hash}=e.data;
          this.hashPercentage=percentage;//进度条赋值
          if(hash){
            resolve(hash);
          }
        }
      })

    },
    async handleUpload(e){
      if(!this.container.file)
      return;
      this.status=Status.uploading;
      const fileChunkList=this.createFileChunk(this.container.file);
      console.log(fileChunkList);
      this.container.hash= await this.calculatehash(fileChunkList);
      //检测文件是否上传过
      const {shouldUpload,uploadedList}=await this.verifyUpload(this.container.file.name,this.container.hash);
      
      if(!shouldUpload){//检测服务端返回的信息 是否存在这个文件
        this.$message.success("上传成功");
        this.status=Status.wait;
      }
      const requestList = this.data = fileChunkList.map(({file},index)=>({  //将需要的切片  封装
        fileHash: this.container.hash,
        index,
        hash: this.container.hash + "-" +index,//每个都有自己的index 和hash
        chunk: file,
        size: file.size,
        percentage: uploadedList.includes(index)?100:0//检测当前切片是否上传过
        
      }));

      await this.uploadChunks(uploadedList);//上传切片
      console.log(shouldUpload,uploadedList);

    },
    async uploadChunks(uploadedList=[]){
      //console.log(this.data);

      const requestList =this.data.map(({chunk,hash,index})=>{
        const formData = new FormData();
        formData.append("chunk",chunk);
        formData.append("hash",hash);
        formData.append("filename",this.container.file.name);
        formData.append("fileHash",this.container.hash);
        return {formData , index};
      }).map(async ({formData , index})=>{
        this.request({
          url:"http://localhost:3000",
          data: formData,
          onProgress: this.createProgressHandler(this.data[index]),
          requestList: this.requestList//this.requestlist 为data数据中的值
        })
      })
      await Promise.all(requestList)
      if(uploadedList.length+requestList.length==this.data.length){//将服务端存在的切片  和现在上传的切片 相加
        await this.mergeRequest();//发送合并请求
      }
    console.log("可以发送请求了");
    },
    async mergeRequest(){
      console.log("this.container.name名字",this.container.file.name)
      await this.request({
          url : "http://localhost:3000/merge",
          // headers: {
          //   "constent-type" : "application/json"
          // },
          data : JSON.stringify({//将合并的数据传输到服务端
            size:Size,
            filehash: this.container.hash,
            filename: this.container.file.name

          })
     });
     
    },
    createProgressHandler(item){
      return e => {
        item.percentage= parseInt(String(e.loaded/e.total)*100);
        console.log(e.loaded,e.total,"item--");
      }
    },
   async verifyUpload(filename, fileHash){ //检测服务端是否存在这个文件 （通过hash值和文件名检测）
      const {data}=await this.request({
        url:'http://localhost:3000/verify',
        // headers:{
        //   "content-type":"application/json"
        // },
        data:JSON.stringify({//将数据字符串化   传入JSON到服务器端  方便解析数据
          filename,
          fileHash
        })
      }); 
      return JSON.parse(data);

    },
      handleFileChange(e){
        //拿到文件，将文件切割
        console.log(e.target.files);
        const [ file ]= e.target.files;
        this.container.file=file;
      },
 
    createFileChunk(file,size=Size){//切割文件
      const fileChunkList=[];
      let cur=0;
      while(cur<file.size){
        fileChunkList.push({
          file:file.slice(cur,cur+size)
        });
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
