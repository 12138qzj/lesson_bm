### 项目搭建
#### wabpack 的安装
        1 .yarn add  webpack webpack-cli --save-dev
            添加webpack的命令行
        2. yarn add  webpack-dev-server --save-dev
 
        3.在启动文件中添加这个 "start": "webpack-dev-server --mode development --inline --hot --open" 

#### 插件的安装
- 安装运行tsx文件的插件：yarn add awesome-typescript-loader
- 安装ts
  yarn add  typescript --save-dev
  将js转化为ts文件。


- webpack-dev-server 3000 在这个端口下启动该项目

- typescript  tsconfig.json 在根目录下ts的配置
  * 文件内容为：
  ``` json
            {
        "compilerOptions": {
        "target": "es6",
        "module": "es6",
        "moduleResolution": "node",
        "declaration": false,
        "noImplicitAny": false,
        "sourceMap": true,
        "jsx": "react",
        "noLib": false,
        "suppressImplicitAnyIndexErrors": true
        },
        "compileOnSave": false,
        "exclude": [
        "node_modules"
        ]
        }
    ```
- yarn add  @babel/core @babel/preset-env --save-dev 
    .babelrc 处理js 转码器

- yarn add bootstrap 加载css框架


- yarn add html-webpack-plugin mini-css-extract-plugin


- 安装依赖包  yarn add  react react-dom --save


安装流程 说明：
 @babel/react @types/react-dom 安装ts+react之间的连接


webpack.config.js 文件内容
``` js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const basePath = __dirname;


module.exports = {
 context: path.join(basePath, 'src'),
 resolve: {
   extensions: ['.js', '.ts'],
 },
 entry: {
   app: './index.ts',
   vendorStyles: [
     '../node_modules/bootstrap/dist/css/bootstrap.css',
   ],
 },
 output: {
   path: path.join(basePath, 'dist'),
   filename: '[name].js',
 },
 module: {
   rules: [
     {
       test: /\.ts$/,
       exclude: /node_modules/,
       loader: 'awesome-typescript-loader'
     },
     {
       test: /\.css$/,
       use: [MiniCssExtractPlugin.loader, 'css-loader'],
     },
     {
       test: /\.(png|jpg|gif|svg)$/,
       loader: 'file-loader',
       options: {
         name: 'assets/img/[name].[ext]?[hash]',
       },
     },
   ],
 },
 // For development https://webpack.js.org/configuration/devtool/#for-development
 devtool: 'inline-source-map',
 devServer: {
   port: 8080,
   noInfo: true,
 },
 plugins: [
   // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
   new HtmlWebpackPlugin({
     filename: 'index.html', // Name of file in ./dist/
     template: 'index.html', // Name of template in ./src
     hash: true,
   }),
   new MiniCssExtractPlugin({
     filename: '[name].css',
     chunkFilename: '[id].css',
   }),
 ],
};
```
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.ts'],
    },
    entry: {
        app: './index.ts',
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
        ],
    },
    output: {
        path: path.join(basePath, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',

            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/img/[name].[ext]?[hash]',
                },
            },
        ],
    },
    // For development https://webpack.js.org/configuration/devtool/#for-development
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        noInfo: true,
    },
    plugins: [
        // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', // Name of file in ./dist/
            template: 'index.html', // Name of template in ./src
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
```
