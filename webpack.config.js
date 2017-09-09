const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
					use: 'css-loader!postcss-loader!sass-loader'
				})
			},
			{
				test: /\.(png|jpg|svg)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'dist/',
					useRelativePath: true
				}
			}
		]
	},
	// Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
	plugins: [
		new ExtractTextPlugin('styles/[name].built.css'),
		new HtmlWebpackPlugin({
			title: 'Foo',
			template: 'src/html/index.html'
		})
	]
};
