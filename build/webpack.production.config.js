const merge = require('webpack-merge')

const base = require('./webpack.base.config')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use :[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
          filename: 'css/app.css',
          // chunkFilename: "[id].css"
        })
    ]
})
