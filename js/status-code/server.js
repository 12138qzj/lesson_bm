const http = require('http');
const fs = require('fs');
const users = require('./users.json')
http.createServer((req, res) => {
    let status = fs.statSync('users.json');
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" })
        fs.createReadStream('./users.html').pipe(res);
    } else if (req.url == '/users') {
        console.log("用户数据请求")
        if (req.headers['if-modified-since']) {
            if (req.headers['if-modified-since'] == status.mtime) {
                console.log("未修改文件返回304")
                res.writeHead(304, { "Content-Type": "text/html;charset=utf8" });
                res.end();
                return;
            } else {
                res.setHeader('Last-Modified', status.mtime);
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                console.log('修改了返回修改数据')
                res.end(JSON.stringify(users))
                return;
            }
        }
        console.log("用户数据第一次")
        res.setHeader('Last-Modified', status.mtime);
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
        res.end(JSON.stringify(users))
    } else {
        res.end("null")
    }
}).listen('8088', () => {
    console.log('监听8088')
})