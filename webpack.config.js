var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname);
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/src/js/entry.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: './'
	},
	devServer: {
		contentBase: './build', //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true, //实时刷新,
		port: '3001',
        host: '192.168.1.19',
        publicPath:'/'
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|svg|mp4|woff2?|eot|ttf|otf)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'images/[name].[hash:8].[ext]'
				}
			},
			// {
			// 	test: /\.(png|svg|jpg|gif)$/,
			// 	use: {
			// 		loader: 'file-loader'
			// 	}
			// }
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/js/index.tmpl.html' //new 一个这个插件的实例，并传入相关的参数
		})
	],

	resolve: {}
};
