import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    const { ctx } = this;
    // node HTTP 协议 基于应答式 ctx=request+response
    const query = ctx.query;
    // ctx.body = await ctx.service.test.sayHi('egg');
    if(query.username==="123")
    // ctx.body = await ctx.service.test.sayHi('登陆成功');
    {
        ctx.body=JSON.stringify({
            msg:"登陆成功"
        })
    }
  }
}


