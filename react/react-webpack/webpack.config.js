//将你react中的节点自动插入到 index.html文件中去
const HtmlWebpackPlugin = require('html-webpack-plugin')
    // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//把静态资源复制到你打包的文件（dist）下去 
const CopyPlugin = require('copy-webpack-plugin');
//对css的分离打包
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//对图片进行压缩打包的 
var ImageminPlugin = require('imagemin-webpack-plugin').default;

//提升打包速度的包
const HappyPack = require('happypack');

//使用Dll 来对 一些不常用的 依赖进行独立打包
// Dll是webpack内置的功能
const webpack = require('webpack');

//对图片的压缩打包


//1. 分离基础库 （react /react-dom）：：可以缓存时间比较久的

//2. 分离 业务代码，代码文件经常被改的的

//优化打包速度

//提升打包速度的包 ： 对于复杂项目---使用happyPack这个包


const config = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //将基础库的依赖 排除打包之外，不打包在 静态资源里面
    //将你需要排除在外的 依赖 手动添加在 入口文件中
    // externals: {
    //     react: 'React'
    // },


    //chunk
    optimization: {
        //切割chunk
        splitChunks: {
            // 分离的时候 设置规则

            //让所有的文件 经过这个这里分离
            chunks: 'all',
            cacheGroups: {
                // 自定义一个规则组

                //  符合这个规则，那就将之分到这个组 打包出来则是这个文件名vendors
                vendors: {
                    //规则
                    test: /[\\/]node_modules[\\/]/,
                },
            }
        }

    },
    devServer: {
        contentBase: './public',
        hot: true
    },
    module: {
        rules: [{
                test: /(.js|.jsx)$/,
                // use: ['babel-loader'],
                use: 'happypack/loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                //变量的hash的替换
                                localIdentName: '[hash:base64:5]'
                            }
                        }
                    }
                ],
                //css-loader css 这个模块
                //style-loader css内容 插到html 的 style标签之内
                // css-module
            },
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: {
            //                     mode: 'local',
            //                     //变量的hash的替换
            //                     localIdentName: '[hash:base64:5]'
            //                 }
            //             }
            //         }
            //     ],
            //     //css-loader css 这个模块
            //     //style-loader css内容 插到html 的 style标签之内
            //     // css-module
            // },
        ]
    },
    plugins: [
        // 将节点自动插入 你想插的html中去  
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        // new BundleAnalyzerPlugin(),

        //静态资源的 （图片）复制过来
        new CopyPlugin({
            patterns: [
                { from: './public/ip6x2.png', to: './' },
            ],
        }),
        //图片压缩打包
        // new CopyWebpackPlugin([{
        //     from: 'images/'
        // }]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),

        new MiniCssExtractPlugin(),
        //提高打包速度
        new HappyPack({
            // 3) re-add the loaders you replaced above in #1:
            // threads:3,  设置使用内核数量  默认有三个
            loaders: ['babel-loader']
        }),

        // 当我们需要使用动态链接库时 首先会找到manifest文件 得到name值记录的全局变量名称 然后找到动态链接库文件 进行加载
        new webpack.DllReferencePlugin({
            /**
             * 在这里引入 manifest 文件
             */
            manifest: require('./dist/dll/vendor-manifest.json'),
        })
    ],
}
module.exports = config

// dist 存着 就是一个 最终打包的结果
// dist 最终上线的一个 文件夹