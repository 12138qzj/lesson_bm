const express = require('express')
const fs = require('fs')
const md5 = require('md5')

const app = express();

app.get('/big.js', (req, res) => {
    console.log("objecfdsagthyjtryet");
    const jsContent = fs.readFileSync('./big.js', 'utf-8');

    //content-type 
    //强缓存 ：请求不会到服务器
    // 200 from memory/disl cache  从内存/磁盘缓存
    res.setHeader('Cache-Control', 'max-age=20')

    //协商缓存 ： 请求会到达服务器
    const Etag = md5(jsContent);
    const oldEtag = req.headers['if-none-match'];
    if (oldEtag === Etag) {
        //要告诉浏览器 文件没有变化 叫浏览器从缓存里面取内容。
        //使用304来告诉

        console.log("文件没有变化");
        res.sendStatus(304).end();
    } else {
        res.setHeader('Etag', Etag)
    }
    res.end(jsContent);
})

app.listen(9000, () => {
    console.log("正在监听9000端口....")
})