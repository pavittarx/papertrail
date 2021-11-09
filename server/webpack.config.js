const path = require("path");

module.exports = {
  mode: "development",
  entry: "./server/index.js",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },

  resolve: {
    roots: [path.resolve(__dirname, "server")],
    modules: ["node_modules", "./server"],
    extensions: [".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
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

  target: "node",
  externals: {
    'express': "commonjs express",
    "@aws-sdk/client-s3": "@aws-sdk/client-s3",
    "mongoose": "commonjs mongoose",
    "bcrypt": "commonjs bcrypt"
  }
}



