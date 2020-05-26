// const Koa = require("koa");
// const app = new Koa();

// app.use((ctx) => {
//     ctx.body = "hello Koa"
// }).listen(3300, () => {
//     console.log("正在监听端口3300")
// })

const MyKoaapp = require('./lib/application')
const MyKoa = new MyKoaapp()
MyKoa.use();
MyKoa.listen(3300, () => {
    console.log("正在监听3300端口....")
})