var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: true, //just run once by default
    frameworks: [ 'mocha', 'chai', 'sinon-chai', 'sinon' ],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      //preprocess with webpack and our sourcemap loader
      //'tests.webpack.js': [ 'webpack', 'sourcemap' ]
      'tests.webpack.js': [ 'webpack' ]
    },
    //reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      //just do inline source maps instead of the default
      //devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.js', '.cjsx', '.coffee']
      },
      module: {
        loaders: [
          { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
          { test: /\.coffee$/, loader: 'coffee' },
          { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};