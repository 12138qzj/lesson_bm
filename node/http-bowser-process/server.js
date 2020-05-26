const http = require('http');
http.createServer((req, res) => {
        // let str;
        // req.on('data', function(chunk) { //request 接收前端的数据
        //     str += chunk;
        // })
        // console.log(str)
        // console.log(str)


        res.end('okok');
    })
    .listen(8088, () => {
        console.log('正在监听8088');
    })