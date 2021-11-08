const path = require("path");
const jsConfig = require("./jsconfig.json");

module.exports = {
  include: ["./**/*"],
  ignore: ["node_modules", "logs", "local", ".git"],
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
      },
    ],
    [
      "module-resolver",
      {
        root: [path.resolve(jsConfig.compilerOptions.baseUrl)],
      },
    ],
  ],
};