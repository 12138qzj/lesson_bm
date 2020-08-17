presets :预设
plugins ：插件

Webpack学习
 书写框架， 模块化导出
 
 - 入口文件：entry:'./index.js'
 - 导入模块
    1. 该test属性标识应转换的文件。 
        - webpack编译器在require()/ import语句中遇到解析为'.txt'文件的路径时，
        请先使用对其相应**use使用的模块(babel-loader)**进行转换，然后再将其添加到包中
    2. 该use属性指示应使用哪个加载程序进行转换。

## 支持热更新的包
cnpm  i webpack-dev-server -D
 - webpack配置
    ```js
      devServer: {
            contentBase: './dist',
            hot: true
        },
    ```
    代码变了 然后就会自动更新 打包 
    contentBase: './dist', 这个将我们dist目录 推向端口处被访问
    支持热更新 相当于启动了一个服务

## package.json scipts的配置
    打包为生产模式："build": "webpack --mode production",
    测试为开发模式："start": "webpack-dev-server --mode development"

## webpack中 plugin配置
使用 yarn add -D html-webpack-plugin 本地安装
```js
//加入这个插件 不会直接对dist目录下的index.html文件操作 ，而是对模板文件操作 然后在进行打包
    new HtmlWebpackPlugin({
        template: './public/index.html',//需要操作的模板文件（在这个文件上做扩展 在打包这个文件，放到dist目录下）
        filename: 'index.html'//扩展之后生成的文件名

    })
```

## 将静态资源也拷贝到dist目录下
```js

//导入 const CopyPlugin = require('copy-webpack-plugin');
     new CopyPlugin({
            patterns: [
                //从我们静态目录  到dist生产目录下
                { from: './public/520.png', to: './' }
            ],
        }),
```

- 使用 import 导入图片文件
- 需要使用 file-loader 来打包
- 可以使用 url-loader 来打包成base64 的格式加载到文件中
##  使用webpack打包加载css
```js
{
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
},
```
    - css-loader:这个包会将css的样式 import 语句解析出来 当时样式不生效。

    - style-loader：这个包将 解析出来的css文件内容插到html中去（将css注入到DOM节点中去）
 ### 解决css命名冲突问题
    使用css-module来解决
    在打包的时候 使用
```js
  {
    test: /\.css$/i,
    use: ['style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: {
                    mode: 'local',
                    localIdentName: '[hash:base64:5]'//去将css名字hash去前五位数
                }
            }
        }
    ],
},
```


 
