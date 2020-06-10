
# 这个为项目模板
仿作音乐类的react

单页应用？Single Page Application SPA


yarn add lazyload //这个包是图片延迟加载的包  在recommend/Recommend 中使用
HashRouter ：锚链接（单页应用）  pc端兼容性好些
BrowserRouter：手机端跟好兼容

components 路由级别组件

Loading 服务于任何listAPI 列表组件 通用组件

## 目录设计
 公共组件 ： common
 页面组件 ： pages

- api/ 分层的能力， 职责是分离 ，是代码复杂，项目大型化
    每个路由模板都封装一个js 去请求数据  便于维护和代码阅读




