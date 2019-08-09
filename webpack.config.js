const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const { scss } = require('svelte-preprocess');


const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const isInline = process.env.inline;

module.exports = {
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
			'@Components': path.resolve(__dirname, 'src/Components/'),
			'@Services': path.resolve(__dirname, 'src/Services/'),
			'@Assets': path.resolve(__dirname, 'src/Assets/'),
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|mjs|svelte)$/,
				exclude: /node_modules\/(?!svelte)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread']
					}
				},
			},
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true,
						preprocess: require('svelte-preprocess')([
							scss()
						])
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					"postcss-loader"
				]
			},
			{
				test: /\.(png|jpe?g|gif|mp4|svg|ttf)$/,
				use: [
					{
						loader: 'file-loader'
					},
				],
			},
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			inlineSource: isInline ? '.(js|css)$' : '',
			hash: isInline ? false : true,
			template: './src/index.html',
			title: 'svelte-boilerplate'
		}),
		new HtmlWebpackInlineSourcePlugin()
	],
	devtool: prod ? false : 'source-map',
	devServer: {
		port: 3000
	}
};
