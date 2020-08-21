const Koa = require('koa');
//中间件
const KoaViews = require('koa-views');
const Router = require('koa-router');
const path = require('path')

//实例化
const app = new Koa();

app.use(KoaViews(
    path.resolve(__dirname, './views'), {
        extension: 'ejs'
    }
))

const router = Router();

router.get('/', async(ctx) => {

    //编码规则

    function html_encode(s) {

        s = s.replace('<', '&lt')
        s = s.replace('>', '&gt')
        return s;

    }

    function js_encode(s) {
        let t
        for (let char of s) {
            let c = char.charcodeAt(0).toString(16);
            c = '\\x' + c;
            t += c
        }
        return t;

    }

    let dataFromDB = `<iframe src='http://www.baidu.com'></iframe>`
    const { xss = "" } = ctx.query;
    console.log("object", xss);

    await ctx.render('index', {
        username: 'lihua',
        xss: html_encode(xss),
        dataFromDB: html_encode(dataFromDB)
    })
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(9090, () => {
    console.log("正在监听9090端口。。。。。");
})