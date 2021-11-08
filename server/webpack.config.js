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
    extensions: [".js", ".json"],
    // alias: {
    //   assert: "assert",
    //   buffer: "buffer",
    //   console: "console-browserify",
    //   constants: "constants-browserify",
    //   crypto: "crypto-browserify",
    //   domain: "domain-browser",
    //   events: "events",
    //   http: "stream-http",
    //   https: "https-browserify",
    //   os: "os-browserify/browser",
    //   path: "path-browserify",
    //   punycode: "punycode",
    //   process: "process/browser",
    //   querystring: "querystring-es3",
    //   stream: "stream-browserify",
    //   _stream_duplex: "readable-stream/duplex",
    //   _stream_passthrough: "readable-stream/passthrough",
    //   _stream_readable: "readable-stream/readable",
    //   _stream_transform: "readable-stream/transform",
    //   _stream_writable: "readable-stream/writable",
    //   string_decoder: "string_decoder",
    //   sys: "util",
    //   timers: "timers-browserify",
    //   tty: "tty-browserify",
    //   url: "url",
    //   util: "util",
    //   vm: "vm-browserify",
    //   zlib: "browserify-zlib"
    // }
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



