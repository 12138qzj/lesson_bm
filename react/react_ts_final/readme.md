

{title:string,content : string }

ts类型约束

面向对象，面向接口(inferface)的编程是一种设计模式

运行一个ts+react 项目

1. webpack 

yarn add webpack webpack-cli webpack-dev-server
webpack-cli:命令行工具

yarn add @babel/cli @babel/core @babel/polufill @babel/preset-env

@babel/polufill:使兼容更好

//插件
 yarn add babel-loader

 yarn add awesome-typescript-loader

 yarn add html-webpack-plugin

//react 框架解析包
 yarn add react react-dom @types/react @types/react-dom

 @types/react @types/react-dom：ts类型  文件




 .tsx react组件->webpack.config.js->awesome-typescript-loader->tsconfig.json->typescript  ->babel(polyfill+env+plugin 装饰器模式)->

 react DOM->webpack-dev-server html-webpack-plugin footer script bundle.js


 
2. 使用react-scripts 
    约定 去充当webpack 配置 
