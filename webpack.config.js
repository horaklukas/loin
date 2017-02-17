var path = require('path');

module.exports = {
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'loin.js',
    libraryTarget: 'commonjs2'// 'umd',
    //library: 'LoadingIndicator' // name of the global var
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
		    test: /\.js$/,
		    exclude: 'node_modules',
		    loader: 'babel-loader',
		    query: {
			    presets: ['es2015']
		    }
	    }
    ]
  },
  externals: {
    'react': true
  }
};