const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
  };
  config.optimization = {
    ...config.optimization,
    minimize: false,
    splitChunks: {
        chunks: 'all',
        name: true
    },
    runtimeChunk: true,
  };
  return config;
};
