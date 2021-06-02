const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: path.resolve(__dirname, 'main.ts'),
	output: {
		path: path.resolve(__dirname, '../website-dist'),
		filename: 'bundles.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
				loader: "url-loader"
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'template.html')
		})
	]
}