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


 
