const path = require("path");
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 入口文件
    entry: "./src/main.js",
    // 输出目录+文件名
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        clean: true
    },
    resolve: {
        alias: {
            vue: path.resolve(__dirname, "../node_modules/vue/dist/vue.esm.js")
        }
    },
    module: {
        rules: [
            // loaders
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '考研系统后台管理平台',
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ]
}
