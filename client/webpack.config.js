const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/build",
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader"]
				})
			},
			{
				test: /\.(png|jpe?g)$/,
				use: "file-loader"
			}

			/*{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}*/
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "bundle.css"
		})
	],
	devServer: {
		port: 3000,
		proxy: [
			// allows redirect of requests to webpack-dev-server to another destination
			{
				context: ["/api", "/login"], // can have multiple
				target: "http://localhost:4000", // server and port to redirect to
				secure: false
			}
		],
		open: true,
		historyApiFallback: true,
		contentBase: "./",
		compress: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		}
	}
};
