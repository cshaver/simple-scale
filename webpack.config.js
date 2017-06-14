var path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'index.built.js',
		path: path.resolve(__dirname, 'dist/scripts')
	},
};
