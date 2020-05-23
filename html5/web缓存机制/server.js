const http = require('http');
const fs = require('fs');
const server = http.createServer(
    function(req, res) {
        //response 数据返回

        if (req.url == '/') {
            //res.writeHead(200,
            //设置返回的类型  后端告诉前端 返回的内容为什么类型读取的编码方式
            // )
            //res.end('<h2>dong</h2>'); //将数据返回到前端
            //去读取文件
            //const file = fs.readFileSync('./http.html', { conding: 'utf-8' })
            res.writeHead(200, { "Content-Type": "text/html;charset=utf8" })
            console.log("首页")
            const readstream = fs.createReadStream('./storagesession.html');
            readstream.pipe(res);
            return;
        }
        res.writeHead(200,
                //设置返回的类型  后端告诉前端 返回的内容为什么类型读取的编码方式
                { 'Content-Type': 'text/html;charset=utf-8' })
            //res.end('<h2>dong</h2>'); //将数据返回到前端
            //去读取文件
        const file = fs.readFileSync('./storageLocal.html', { conding: 'utf-8' })
            //console.log("第二部的")
        res.end(file) //只能返回一次
    }
);

server.listen(8082, () => {
    console.log('正在监听8082端口...')
})