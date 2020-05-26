const http = require('http')
class Mykoa {
    constructor() {
            // super();
            console.log("手动写koa")
            this.server;
        }
        //...  ：扩展运算符
    listen(...args) {
        this.server = http.createServer((req, res) => {
            res.end("OKOKOK!")

        });
        this.server.listen(...args);
    }
    use() {

        this.use();
    }
}
// 模块导出
module.exports = Mykoa;