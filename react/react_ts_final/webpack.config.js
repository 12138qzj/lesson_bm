const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const basePath = __dirname;
module.exports = {
    //基础路径  去解析这个里面的所有文件夹
    context: path.join(basePath, "src"),
    //抛出 钩子 拦住后缀为这个的文件  交给module模块去解析
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    //@bable/polyfill 垫片 使用这个将es6代码降级为es5代码 让代码***兼容性***更好

    //
    entry: ["@babel/polyfill", "./app.tsx"],
    //编译完了 向外输出编译好文件
    output: {
        path: path.join(basePath, "dist"),
        filename: "bundle.js"
    },
    //源码映射  当有错误 跳到源码中解决
    devtool: "source-map",
    //使用这个服务启动dist目录下编译好的文件
    devServer: {
        contentBase: "./dist",
        //没有这个文件 实时监听
        inline: true, //监听  更新 enable watch and live reload
        host: "localhost",
        port: 8080,
        stats: "errors-only"
    },
    module: {
        rules: [{
            //编译文件
            test: /\.(ts|tsx)$/,
            //去除这个文件夹下的所有文件
            exclude: /node_modules/,
            //使用这个包来加载 转换到tsconfig.js 根据配置 转换为jsx 
            loader: "awesome-typescript-loader",

            //编译选择  去找.  文件
            options: {
                //使用预处理 和插件
                useBabel: true,
                //解码 
                babelCore: "@babel/core"
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            hash: true
        })
    ]
}