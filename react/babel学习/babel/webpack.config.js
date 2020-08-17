const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const config = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', 'jsx']
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [{
                test: /(.js|.jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[hash:base64:5]'
                            }
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'

        }),
        new BundleAnalyzerPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './public/520.png', to: './' }
            ],
        }),
    ]
}
module.exports = config;


// dist 是项目打包 是最终上线的文件