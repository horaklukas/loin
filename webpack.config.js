var path = require('path');

module.exports = {
  entry: ['./src/indicator'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'indicator.js',
    libraryTarget: 'commonjs2'// 'umd',
    //library: 'LoadingIndicator' // name of the global var
  },
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee']
  },
  module: {
    loaders: [
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },
  externals: {
    'react': true//'React'
  }
}