var path = require('path');
var webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

const DEV_MODE = process.env.NODE_ENV === 'development';

var config = {   
  watch: DEV_MODE,
	mode: process.env.NODE_ENV,
  // Compile for usage in a browser-like environment
  // https://webpack.js.org/configuration/target/
  target: 'web',

  // Entry points for our main js file
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: './_src/entry.js',
  output: {
    path: path.resolve(__dirname, '_site'),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "_assets", "index.html"),
      favicon: "./_assets/images/favicon.ico",
      title: "Devlopr"
    }),
  ],
  resolve: {
    // alias: {
    //   vue$: "vue/dist/vue.runtime.esm.js",
    // 'vue-template-compiler$': 'vue-template-compiler/build.js'
    // },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					filename: 'commons.[hash].js',
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 0
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	}
};

module.exports = config;