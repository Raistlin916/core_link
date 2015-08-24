var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: './scripts/main.jsx'
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendors.js',
      minChunks: function (module, count) {
        return module.resource 
          && (module.resource.indexOf('vendor') !== -1
          || module.resource.indexOf('node_modules') !== -1);
      }
    })
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