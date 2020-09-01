const path = require('path');
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js');
// import merge from 'webpack-merge';
const { merge } = require('webpack-merge');
const serverConfig = {
        //打包代码 使用的平台
        target: 'node',
        //版本为开发版本
        mode: 'development',
        //入口
        entry: './src/server/index.js',

        //打包完输出的位置
        output: {
            filename: 'bundle.js', //输出文件名
            //输出位置
            path: path.resolve(__dirname, "build"),
        },
        //node 内置的模块排除在外
        externals: [nodeExternals()]
    }
    // module.exports = serverConfig;
module.exports = merge(baseConfig, serverConfig)