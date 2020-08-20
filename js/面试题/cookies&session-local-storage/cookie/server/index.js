const Koa = require('koa');
const path = require('path');
const router = require('koa-router')();
const app = new Koa();

let count = 10000;

let sessiontable = [{
    username: 'liming',
    userId: 1011,
    login: true,
    expire: '2021',
    id: "01"
}]

// 用户的登陆状态 的记录
/**
 * 每次将cookieId发送给前端 ， 当用户再次访问这个页面的的时候
 * 将cookie 随着http请求发送给后端
 * 服务器端拿到这个cookieId 去查找会话表(sessiontable)查看登陆是否有效
 */

router.get('/', async(ctx) => {
        const fs = require('fs');
        const html = fs.readFileSync('./index.html', 'utf-8')
        ctx.cookies.set('login', `${sessiontable[0].id}`); //, { 'sameSite': 'lax' }
        ctx.body = html;
    })
    //使用koa-router 来监听 路径来进行后端操作
router.get('/transfer', async(ctx) => {
    count -= 100;
    ctx.body = "ok"
})
router.get('/count', async(ctx) => {
    ctx.body = count;
})

router.get('/isLogin', async(ctx) => {

    // let cookies = ctx.header['cookie'].split(';')
    // let sessionCookie = cookies.find(cookie => cookie.includes("login"));
    // let [name, sessionId] = sessionCookie.split("=")
    // console.log(ctx.header['cookie'], name, sessionId);
    if (isLogin(ctx))
        ctx.body = "已登录";
    else
        ctx.body = "未登录";
})


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(9090, () => {
    console.log('server is running 9090');
});

function isLogin(ctx) {
    if (ctx.header['cookie']) {
        let cookie = ctx.header['cookie'];
        // let [name, sessionId] = cookie.split('=');
        let cookies = cookie.split(';');
        let sessionCookie = cookies.find(cookie => cookie.includes('login'));
        let [name, sessionId] = sessionCookie.split('=');
        if (sessiontable.find((item) => {
                return item.id === sessionId;
            })) {
            return true;
        } else {
            return false;
        }
    } else { return false; }
}