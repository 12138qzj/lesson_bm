//fileSystem  为node的内置模块

const fs =require('fs');//引入fs
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
console.log('hello node');
const image =fs.readFileSync("car1.jpg").toString("base64");
//console.log(image);
const client= new AipImageClassifyClient ('17711756','Ha2DZlmbGIZ6Q1vYs7f3bwAG','dsd72dSTgRfQEBlG4b61VtPHrq3HwsFo');
//(APP_ID,API_KEY,SECERT_KEY)

client
  .carDetect(image)//识别车的方法
  .then(function(result){
      console.log(result);
  });



