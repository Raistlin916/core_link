var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: './scripts/main.jsx',
    vendor: ['react', 'material-ui', 
    , 'react-router', 'react-tap-event-plugin', 'moment'
    , 'echarts', 'zrender'],
  },
  output: {
    filename: 'bundle.js',
    path: 'dist',
    publicPath: 'http://localhost:8091/assets/dist'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.js')
  ],

  // externals: {
  //   'react': 'React'
  // },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      echarts$: path.join(__dirname, 'vendor/echarts/src/echarts.js'),
      echarts: path.join(__dirname, 'vendor/echarts/src'),
      zrender$: path.join(__dirname, 'vendor/zrender/src/zrender.js'),
      zrender: path.join(__dirname, 'vendor/zrender/src')
    }
  }
};