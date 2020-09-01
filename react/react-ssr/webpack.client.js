const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.base.js');

const clientConfig = {
    mode: 'development',
    //入口文件配置
    entry: './src/client/index.js',
    //出口的配置
    output: {
        // 打包好的 文件名
        filename: 'index.js',
        //打包好的存放位置
        path: path.resolve(__dirname, 'public')
    },
};

module.exports = merge(config, clientConfig);