/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-05 12:40:36 CDT
 */

const path = require("path");
const webpack = require("webpack");
const NodeExternals = require("webpack-node-externals");
const TerserPlugin = require('terser-webpack-plugin');
const { name, author, version } = require("./package.json");
const { filename } = require("./public/build/browser.json");

const copyright = new webpack.BannerPlugin({
	banner: `Copyright (c) 2018-2021.
Alberto Organista Ramírez (https://soybeto.dev) - All rights reserved.
Project Name: ${name}
Version: ${version}
Hash: [fullhash]`
});
const variables = ((env) => {
	return new webpack.DefinePlugin(Object.assign({
		//
		IRSEQUISIOUS_DOMAIN_NAME: JSON.stringify(env?.IRSEQUISIOUS_DOMAIN_NAME || "http://127.0.0.1:3000"),
		IRSEQUISIOUS_STATIC_DOMAIN_NAME: JSON.stringify(env?.IRSEQUISIOUS_STATIC_DOMAIN_NAME || "http://127.0.0.1:3000/static"),
		//
		IRSEQUISIOUS_ASSETS_BROWSER_NAME: JSON.stringify(env?.production ? env.IRSEQUISIOUS_STATIC_DOMAIN_NAME + "/" + filename : "/build/" + filename)
		//
	}, { NAME_PACKAGE: JSON.stringify(name), AUTHOR_PACKAGE: JSON.stringify(author), VERSION_PACKAGE: JSON.stringify(version) }));
})(process.env);

module.exports = [env => ({
	entry: ["./server.ts"],
	output : {
		filename: "server.js",
		path: path.resolve(__dirname)
	},
	target: "node",
	node: {
		__dirname: false, __filename: false
	},
	mode: env && env.production ? "production" : "development",
	devtool: env && env.production ? undefined : "eval-source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	module: {
		rules : [{
			test: /\.(ts|tsx)$/,
			exclude: /node_modules/,
			use: [{
				loader: "ts-loader",
				options: {
					transpileOnly: !(env && env.production),
					onlyCompileBundledFiles: true
				}
			}]
		}, {
			test: /\.(less)$/,
			exclude: /node_modules/,
			use: [{
				loader: "css-loader",
				options: {
					modules: {
						localIdentName: (env && env.production) ? '[md5:hash:base64:12]' : '[path][name]__[local]--[md5:hash:base64:12]',
						exportLocalsConvention: "camelCaseOnly",
						exportOnlyLocals: true
					}
				}
			}, {
				loader: "less-loader"
			}]
		}, {
			test: /\.(gif|png|jpe?g)$/i,
			use: [{
				loader: "file-loader",
				options: {
					emitFile: false,
					name: "[contenthash].[ext]",
					outputPath: "images",
					publicPath: env?.production ? (process.env.IRSEQUISIOUS_STATIC_DOMAIN_NAME || "http://127.0.0.1:3000/build") + "/images" : "/build/images"
				}
			}]
		}]
	},
	externals: [NodeExternals({ allowlist: [/@cubous/, /@irsequisious/] })],
	plugins: [
		copyright,
		variables
	],
	optimization: {
		minimizer: [new TerserPlugin({ extractComments: false })]
	}
})];
