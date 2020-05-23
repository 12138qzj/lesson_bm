const fs =require('fs');

const image =fs.readFileSync('car_num.jpg').toString('base64');

const AipOcrClient=require('baidu-aip-sdk').ocr;
const client=new AipOcrClient('17712426','Ktvn6WHPSD0T2l2j1IRT71yP','Gu7nA1EiDNpKiXIE5ya6OFPK7pZafOsG');

const Options={};
Options["multi_detect"]="true";


client
  .licensePlate(image,Options)//识别车的方法
  .then(function(result){
      console.log(result);
      console.log(result.toString);
  });