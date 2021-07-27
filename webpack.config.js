const path = require('path');

module.exports = {
    mode: 'production',
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/build/',
        compress: true,
        port: 8080,
        proxy: {
            '/api/**': {target: 'http://localhost:3000/'}
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                excluse: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}