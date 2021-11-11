const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "React App",
  mode: "development",
  target: "web",

  entry: './app/index.js',
  
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  resolve: {
    roots: [path.resolve(__dirname, "app")],
    modules: ["node_modules", "./app"],
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(j|t)(s|sx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              ["module-resolver"],
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true,
                },
              ],
            ]
          }
        }
      }, {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "app/public"),
      serveIndex: true,
      watch: true,
    },
    compress: true,
    port: 9000,
    watchFiles: [
      "./app/**/*.js",
      "./app/**/*.ts",
      "./app/**/*.jsx",
      "./app/**/*.tsx"
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "index.html")
    }),
    new webpack.ProvidePlugin({
      React: "react"
    })
  ]
}