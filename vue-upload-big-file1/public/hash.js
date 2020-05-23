self.importScripts('/spark-md5.min.js');
self.onmessage=e=>{
   const { fileChunkList}=e.data;
   let percentage=0;
   let count = 0;
   const spark =new self.SparkMD5.ArrayBuffer();
   const loadNext = index=>{
       const reader = new FileReader();
       reader.readAsArrayBuffer(fileChunkList[index].file);
       reader.onload=e=>{  //当读完reader中的东西执行onload函数        
        spark.append(e.target.result);
        count++;
        if(count=== fileChunkList.length){
            self.postMessage({
                percentage:100,
                hash : spark.end()
            });          
            self.close();
        }else{
            percentage += 100/fileChunkList.length;
            self.postMessage({
                percentage:percentage,
                length : fileChunkList.length
            });
            loadNext(count);
        }
       }         
   }
   loadNext(0);

}