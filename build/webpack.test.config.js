const webpack = require('webpack');

const helpers = require('./helpers');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					{
						loader: 'awesome-typescript-loader',
						options: { configFileName: helpers.root('.', 'tsconfig.json') }
					},
					'angular2-template-loader',
					'tslint-loader',
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'css-loader', 
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: [ '.ts', '.js' ]
	},
	/*
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					enforce: true
				},
			}
		} 
	},
	*/
	plugins: [
		// Workaround for angular/angular#11580, Fix for warnings;
		new webpack.ContextReplacementPlugin(
			/@angular(\\|\/)core(\\|\/)(@angular|esm5)/,
			helpers.root('./src')
		)
	]
};