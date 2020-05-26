const net = require('net');
//从应用层 去做http请求
// const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
//     let json = JSON.stringify({ a: 'wsad' })
//     client.write('POST / HTTP/1.1\r\n'); //\r回车  \n换行
//     client.write('HOST: 127.0.0.1\r\n');
//     client.write('Content-Type: application/json\r\n');
//     client.write(`Content-Length: ${json.length}\r\n`) //设置长度

//     client.write('\r\n') //
//     client.write(json)

//     client.write('\r\n') //

// })
// client.on('data', data => {
//     console.log(data.toString())
// })
// client.on('end', () => {
//     console.log("接收完成！")
// })


// 源端口号  目的地端口号
// 客户端：http.get  xhr
// const net = require('net');
class Xmlhttprequest {
    constructor() {
        this.method = null;
        this.url = null;
        this.headers = null;
        this.body = null;
    }
    open(method, url) {
        this.method = method;
        this.url = url;
    }
    setHeader(headers) {
            this.headers = headers;
        }
        // send(body) {
        //     // 浏览 http 请求  -> 拼接 http 报文
        //     this.body = body;
        //     const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
        //         client.write(`${this.method} ${this.url} HTTP/1.1\r\nHOST: 127.0.0.1\r\nContent-Type: application/json\r\nContent-Length: ${this.body.length}\r\n\r\n${this.body}\r\n`)
        //         client.end();
        //     })
        //     client.on('data', (chunk) => {
        //         console.log('jsonstring', JSON.stringify(chunk.toString()));

    //         console.log('receive:', chunk.toString());
    //     })
    //     client.on('end', () => {
    //         console.log('disconnect');
    //     })
    // }

    parse(string) {
        // 解析
        // console.log("string", string)
        const lines = string.split('\r\n');
        console.log(lines);
        this.resStatusLine = lines[0];
        this.statusCode = this.resStatusLine.split(' ')[1];
        // [)
        this.resHeaders = lines.slice(1, lines.length - 1);
        this.response = lines[lines.length - 1];
    }
    send(body) {
        // 浏览 http 请求  -> 拼接 http 报文
        this.body = body;
        const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
            client.write(`${this.method} ${this.url} HTTP/1.1\r\nHOST: 127.0.0.1\r\nContent-Type: application/json\r\nContent-Length: ${this.body.length}\r\n\r\n${this.body}\r\n`)
            client.end();
        })
        client.on('data', (chunk) => {
            // 玩具浏览器    http ->    ->  ->  页面
            // 服务端返回给 浏览器的 也是一个原始的 http 报文
            // 解析报文
            console.log('receive:', JSON.stringify(chunk.toString()));
            this.parse(chunk.toString());
            this.onload();
        })
        client.on('end', () => {
            console.log('disconnect');
        })
    }

}
// ajax
const xhr = new Xmlhttprequest();
xhr.open("POST", "/");
xhr.setHeader({
    'Content-Type': 'application/json'
})
xhr.onload = function() {
    // 
    console.log('接受到响应了');
    console.log(xhr.statusCode)
    console.log(xhr.response)
    console.log(xhr.resHeaders)
}
xhr.send(JSON.stringify({ a: 1 }))