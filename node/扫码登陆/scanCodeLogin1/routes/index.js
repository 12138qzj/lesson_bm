const router = require("koa-router")();
var qr = require("qr-image");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});
let random_img_id = "";
const user = {
  userName: "admin",
  password: "123456",
};
let img_status = 0;
let token = "";
let random_token = "";
router.post("/change_img_status", async (ctx, next) => {
  const body = ctx.request.body;
  if (body.code === random_img_id) {
    img_status = 1;
    random_token = "";
    for (let i = 0; i < 10; i++) {
      random_token += `${Math.floor(Math.random() * 10)}`;
    }
    ctx.body = {
      random_token,
    };
  }
});

// 二维码生成
router.get("/create_qrcode", async (ctx, next) => {
  random_img_id = "";
  for (let i = 0; i < 10; i++) {
    random_img_id += `${Math.floor(Math.random() * 10)}`;
  }
  // var img = qr.image(random_img_id, { size: 10 })
  var img = qr.image('我爱我可爱滴小宝宝，狂亲亲😙', { size: 10 })

  console.log('random_img_id', random_img_id)
  ctx.set('content-Type', 'image/png') 
  ctx.body = img;
});


module.exports = router;
