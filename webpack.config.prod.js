const path = require('path')  
const webpack = require('webpack')

export default {  
  devtool: 'source-map',

  entry: [
    './src/index.jsx'
  ],

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-3']
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        { test: /\.gif$/, loader: "url-loader" }
    ]
  }
}