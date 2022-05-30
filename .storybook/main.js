const webpack = require("webpack");
const webpackConfig = require("./../app/webpack.config");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new webpack.ProvidePlugin({
          React: "react",
        }),
      ],

      resolve: { ...(config.resolve || []), ...webpackConfig.resolve },
      module: {
        rules: [...(config.module.rules || []), ...webpackConfig.module.rules],
      },
    };
  },
  core: {
    builder: "webpack5",
  },
};
