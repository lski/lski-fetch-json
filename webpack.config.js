/* eslint-env node */
const path = require('path');
const webpackAutoInject = require('webpack-auto-inject-version');

module.exports = (env, argv) => {

	const dev = argv && argv.mode === 'development';
console.log(dev);

	const filename = dev ? 'fetch-json.js' : 'fetch-json.min.js';
	const plugins = [new webpackAutoInject({ autoIncrease: false, injectByTag: false })];

	// if (prod) {
	// 	plugins.push(new webpack.optimize.UglifyJsPlugin());
	// }

	return {
		context: path.resolve(__dirname, './'),
		entry: {
			app: './index.js',
		},
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: filename,
			library: 'fetchJson',
			libraryTarget: 'umd'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				}
			]
		},
		plugins: plugins
	};
};