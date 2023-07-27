const { merge } = require('webpack-merge');
const path = require("path");

const common = require('./webpack.common.js');

module.exports = (env) => {

  return merge(common(env), {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.resolve(path.resolve('./'), "build"),
      },
      port: env.PORT || 3000,
    },
  });
};
