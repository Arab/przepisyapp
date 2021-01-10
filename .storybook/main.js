const path = require("path");

module.exports = {
  stories: ['../src/stories/*.stories.*'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (webpackConfig) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === 'ModuleScopePlugin',
      )

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1)

      webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      "~/": path.resolve(__dirname, "../src/"),
      "@components": path.resolve(__dirname, "../src/Components"),
    };
    webpackConfig.resolve.extensions.push(".ts", ".tsx");
      return webpackConfig
    }
}
