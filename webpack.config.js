var path = require('path');
//需要用到webpack内置的一些插件
var webpack = require('webpack');
//文件单独输出
var extractText = require('extract-text-webpack-plugin');
let extractIndexLess = new extractText('index.css')
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
        rules: [
            {
                test:/\.(woff|ttf)$/,
                use:['file-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: extractIndexLess.extract({
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
        extractIndexLess,
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