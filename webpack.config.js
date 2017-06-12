var path = require('path');
//需要用到webpack内置的一些插件
var webpack = require('webpack');
//文件单独输出
var extractText = require('extract-text-webpack-plugin');
//html单独输出
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口js
    entry: {
        main: './app/index.js'
    },
    //输出配置
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './temporaryServer')
    },
    //模块
    module: {
        rules: [{
                test: /\.(woff|ttf|png)$/,
                //保留原始路径名称到输出目录
                use: ['file-loader?name=[name].[ext]&outputPath=style/assets/&publicPath=/']
            },
            {
                test: /\.css$/,
                use: extractText.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.less$/,
                use: extractText.extract({
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    //插件
    plugins: [
        new extractText("style/dependence.css"),
        new HtmlWebpackPlugin({
            title: 'hello webpack!',
            filename: 'index.html',
            template: './template.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    //小型服务器
    devServer: {
        compress: true,
        port: 9000
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};