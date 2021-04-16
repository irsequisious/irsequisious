/*
 * Copyright (c) 2017-2020.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2020-02-09 22:19:44 CST
 */

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { name, author, version } = require("./package.json");

const copyright = new webpack.BannerPlugin({
	banner: `Copyright (c) 2021.
Alberto Organista Ramírez (https://soybeto.dev) - All rights reserved.
Project Name: ${name}
Version: ${version}
Hash: [fullhash]`
});
const variables = ((env) => {
	return new webpack.DefinePlugin(Object.assign({}, { NAME_PACKAGE: JSON.stringify(name), AUTHOR_PACKAGE: JSON.stringify(author), VERSION_PACKAGE: JSON.stringify(version) }));
})(process.env);

/** @param env.production boolean */
module.exports = [(env) => ({
	entry: {
		"browser": ["./src/style/lib/html.less", "./src/hydrate/browser.tsx"]
	},
	output : {
		path: path.resolve(__dirname, "public", "build"),
		filename: (data) => {
			fs.writeFileSync(path.resolve(__dirname, "public", "build", data.runtime + ".json"),  JSON.stringify({
				hash: data?.chunk?.renderedHash,
				filename: env?.production ? data?.chunk?.renderedHash : data.runtime
			}));
			return env?.production ? "[chunkhash].js" : "[name].js"
		}
	},
	target : "web",
	mode: env && env.production ? "production": "development",
	devtool: env && env.production ? undefined : "eval-source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: [{
				loader: "ts-loader",
				options: {
					onlyCompileBundledFiles: true,
					transpileOnly: !(env && env.production)
				}
			}]
		}, {
			test: /\.less$/,
			exclude: /node_modules/,
			use: [{
				loader: MiniCssExtractPlugin.loader
			}, {
				loader: "css-loader",
				options: {
					modules: {
						localIdentName: (env && env.production) ? '[md5:hash:base64:12]' : '[path][name]__[local]--[md5:hash:base64:12]',
						exportLocalsConvention: "camelCaseOnly"
					}
				}
			},  {
				loader: "less-loader"
			}]
		}, {
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [{
				loader: "file-loader",
				options: {
					name: "[contenthash].[ext]",
					outputPath: "images",
					publicPath: env?.production ? (process?.env?.IRSEQUISIOUS_STATIC_DOMAIN_NAME || "https://1127.0.0.1:3000/build") + "/images" : "/build/images"
				}
			}]
		}]
	},
	plugins: [
		copyright,
		variables,
		new MiniCssExtractPlugin({
			filename: env?.production ? "[chunkhash].css" : "[name].css"
		})
	],
	optimization: {
		minimizer: [new TerserPlugin({ extractComments: false }), new OptimizeCSSAssetsPlugin({})]
	}
})];
