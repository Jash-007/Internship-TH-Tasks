// webpack.config.js
const path = require('path');
const htmlplugin = require('html-webpack-plugin')
// const clean = require('clean-webpack-plugin')
const cssclean = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }, {
                test: /\.(css)$/,
                use: [
                    cssclean.loader,
                    //'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlplugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        // new clean(),
        new cssclean({ filename: '[name].css' })
    ],
    devServer: {
        port: 8700,
        host: 'localhost',
        compress: true,
        open: true
    }
};
