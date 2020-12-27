const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                include: /src/,
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    // 启用本地服务
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 5501,
        open: true,
    },
}
