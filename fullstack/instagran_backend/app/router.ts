import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // controller url=>controller->render View


  //nginx 服务器代理 ip http://www.baidu.com  ->ip 地址 -> ngnix 80(监听等待)(服务器的任务分配)
  // （负载均衡内网的那台机器上去）->转发到Egg.js 7000端口 
  //  路由解构  nginx:而在实际的运作中，可以支持二万至四万个并行连接。


  //后台路由 首页 --->controller 处理 返回 index.html =-->  首页启动index.html 启动root被挂载的地方  /请求数据的API启动
  //前端路由 react build js 挂载 SPA （前端路由跳转  更快 ）

  //前后端连接 useEffext ->reducer action--> api ->后台/api路径访问数据---> 接收数据
  router.get('/', controller.home.index);

  router.get('/login', controller.login.index);

};
