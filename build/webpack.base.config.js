const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, '../dist'),
        filename : 'js/app.js'
    },
    mode : 'development',
    module : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : {
                    extractCSS : true //@todo
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
                test : /\.scss$/,
                loader : [
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer : {
        compress : true,
        overlay : true
    }
}
