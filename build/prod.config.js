const {merge} = require("webpack-merge");
const baseConfig = require("./base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
    ],
    mode: 'production'
})
