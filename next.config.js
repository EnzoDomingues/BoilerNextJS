const { resolve } = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  // cssModules: false,
  webpack(config, options) {
    config.resolve = {
      extensions: [
        '.js',
        '.jsx',
        '.json',
        '.scss',
        '.css',
        '.svg',
        '.pdf',
        '.zip'
      ],
      alias: {
        static: resolve(__dirname, './static'),
        styles: resolve(__dirname, './src/styles'),
        javascripts: resolve(__dirname, './src/javascripts')
      }
    };
    return config;
  }
});
