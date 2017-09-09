const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		index: './src/js/index.js'
	},
	output: {
		filename: 'scripts/[name].built.js',
		chunkFilename: 'scripts/[id].built.js',
		path: path.resolve(__dirname, 'dist/')
	},
	module: {
		loaders: [
			// Extract scss files
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!sass-loader'
				})
			}
			// You could also use other loaders the same way. I. e. the autoprefixer-loader
		]
	},
	// Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
	plugins: [
		new ExtractTextPlugin('styles/[name].built.css')
	]
};