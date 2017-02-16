var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = require('./webpack.config.js');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./example/example.js'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.[hash].js'
	},
	devtool: 'eval',
	devServer: {
	},
	module: {
		loaders: webpackConfig.module.loaders.concat([])
	},
	// https://www.npmjs.com/package/html-webpack-plugin - generate our html file from a template - makes it easier to include custom stuff
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Loin example'
		})
	]
};