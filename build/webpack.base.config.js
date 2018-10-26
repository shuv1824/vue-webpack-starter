const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, '../dist'),
        filename : 'js/app.js'
    },
    resolve : {
        alias : {
            '@' : path.resolve('./src'),
            'styles' : path.resolve('./src/assets/styles')
        },
        extensions : ['.js', '.vue', '.scss']
    },
    module : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : {
                    extractCSS : process.env.NODE_ENV === "production"
                }
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                options : {
                    presets : ['@babel/preset-env']
                }
            },
            {
                test : /\.(png|jpg|gif|svg)$/,
                loader : 'file-loader',
                options : {
                    name : '[name].[ext]',
                    outputPath : 'img/'
                }
            },
            {
                test :  /\.scss$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/app.css'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}
