var path = require('path');
//需要用到webpack内置的一些插件
var webpack = require('webpack');
//文件单独输出
var extractText = require('extract-text-webpack-plugin');
let extractIndexLexx = new extractText('index.css')
let extractContent = new extractText('content.css')
//html单独输出
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './app/index.js',
        moment: 'moment',
        lodash: 'lodash'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /index\.less$/,
                use: extractIndexLexx.extract({
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /[^d][^e][^x]\.less$/,
                use: extractContent.extract({
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        extractIndexLexx,
        extractContent,
        new HtmlWebpackPlugin({
            title: 'hello webpack!',
            filename: 'index.html',
            template: './template.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};