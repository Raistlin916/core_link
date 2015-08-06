var path = require('path');

module.exports = {
    entry: './scripts/main.jsx',
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            { test: /\.js\w$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            echarts$: path.join(__dirname, "vendor/echarts/src/echarts.js"),
            echarts: path.join(__dirname, "vendor/echarts/src"),
            zrender$: path.join(__dirname, "vendor/zrender/src/zrender.js"),
            zrender: path.join(__dirname, "vendor/zrender/src")
        }
    }
}