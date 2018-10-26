const merge = require('webpack-merge')

const base = require('./webpack.base.config')
const webpack = require('webpack')

// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const config = require("../config/production.config")

module.exports = merge(base, {
    mode : 'production',
    module: {
        rules: [
            // {
            //     test: /\.scss$/,
            //     use :[
            //         {
            //             loader: MiniCssExtractPlugin.loader
            //         },
            //         {
            //             loader: 'css-loader'
            //         },
            //         {
            //             loader: 'sass-loader'
            //         }
            //     ]
            // }
        ]
    },
    plugins:[
        // new MiniCssExtractPlugin({
        //   filename: 'css/app.css'
        // }),
        new webpack.DefinePlugin({
            'process' : {
                env : config
            }
        }),
        new UglifyJsPlugin(),
        new OptimizeCssAssetsPlugin()
    ]
})
