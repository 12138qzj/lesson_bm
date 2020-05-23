const path = require('path');
const fse = require('../../vue-backend/node_modules/fs-extra');
// const fs = require('fs')


//合并文件块

const UPLOAD_DIR = path.resolve(__dirname, "."); //找到本.js 所在的目录path.resolve(__dirname,"."，"teget")
//找到自己所在目录下的 teget文件夹

const pipeStream = (path, writeStream) =>
    new Promise(resolve => {
        const readStream = fse.createReadStream(path); //创建可读流
        //异步处理
        readStream.on("end", () => { //读取完毕 修改Promise的状态
                resolve();
            })
            //在readStream加一个流（加管子）到writeStream
        readStream.pipe(writeStream);
    })

const filename = "tp";
const filePath = path.resolve(UPLOAD_DIR, "..", `${filename}.jpeg`)
console.log(filePath);
//将图片分割成字节数组   
// size 分段大小 
const mergeFileChunk = async(filePath, filename, size) => {
    // 思想  每个上传的文件，先以文件名为target 目录名 ，吧分文件blod 放入这个目录下 
    // node文件合并是OK的
    const chunkDir = path.resolve(UPLOAD_DIR, filename); //合成文件路径
    console.log(chunkDir);
    const chunkPaths = await fse.readdir(chunkDir); //先读完  查找 chunkDir文件下的所有文件

    chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]); //将文件进行排序
    console.log(chunkPaths);
    //每一个区块写入最后的文件
    await Promise.all( //打包结果
        chunkPaths.map((chunkPath, index) => { //使用map遍历chunkPaths中的文件名 index为chunkPaths所在数组中的序号
            pipeStream(
                path.resolve(chunkDir, chunkPath),
                //创建可写流 需要加如写入的位置（filePath）
                fse.createWriteStream(filePath, {
                    start: index * size, //0
                    end: (index + 1) * size
                }) //filename 写入路径 {}写入位置
            )
        })
    );
    console.log("文件合并成功");
}
mergeFileChunk(filePath, filename, 0.1 * 1024 * 1024);