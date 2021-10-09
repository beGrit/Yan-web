'use strict'

const {merge} = require("webpack-merge");
const baseConfig = require("./base.config");
const path = require("path");
const webpack = require('webpack');


module.exports = merge(baseConfig, {
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },

        open: false, // 是否运行后打开浏览器
        hot: true, // 是否热部署(实时监听)
        compress: true,

        /**
         * 服务器host相关配置
         */
        host: '127.0.0.1',
        port: 9001,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
    ],
    mode: 'development',
})
