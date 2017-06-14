var path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'index.built.js',
		path: path.resolve(__dirname, 'dist/scripts')
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: 'style-loader' // creates style nodes from JS strings
			}, {
				loader: 'css-loader' // translates CSS into CommonJS
			}, {
				loader: 'sass-loader' // compiles Sass to CSS
			}]
		}]
	}
};
