const Webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const webpackConfig = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');
const WorkboxPlugin = require('workbox-webpack-plugin');

/**
 * Workaround to the issue:
 * https://github.com/GoogleChrome/workbox/issues/1790
 */
webpackConfig.plugins = webpackConfig.plugins.filter(plugin => !(plugin instanceof WorkboxPlugin.GenerateSW));
webpackConfig.plugins.push(
  new CopyPlugin({
    patterns: [{ from: './src/service-worker.js' }]
  })
);

const compiler = Webpack({
  ...webpackConfig,
  performance: {
    maxAssetSize: 500_000,
    maxEntrypointSize: 500_000,
  },
  cache: true,
  watch: true,
  mode: 'development',
});

const server = new WebpackDevServer({
  open: true,
  compress: true,
}, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
