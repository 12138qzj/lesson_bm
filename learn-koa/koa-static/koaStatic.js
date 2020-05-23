const koa = require('koa')

const app = new koa();

const main = ctx => {
    ctx.response.body = "ok"
}
app.use(main)
app.listen(8088, () => {
    console.log('正在监听8088端口。。')
})