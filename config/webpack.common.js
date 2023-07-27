const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const ROOT = path.resolve('./');
const PATH = {
  build: path.resolve(ROOT, 'build'),
  public: path.resolve(ROOT, 'public'),
};

module.exports = (env) => {
  const variables = JSON.stringify({
    'EXAMPLE': env.EXAMPLE || 'TEST VARIABLE',
    'NODE_ENV': env.MODE || 'development',
  });

  return {
    entry: './src/index.jsx',
    output: {
      filename: '[name].[contenthash].js',
      path: PATH.build,
      assetModuleFilename: 'assets/[contenthash][ext]',
      clean: true,
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.join(PATH.public, 'index.html') }),
      new DefinePlugin({ 'process.env': variables })
    ],
    module: {
      rules: [
        // babel
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        // assets
        {
          test: /\.(png|jpg|jpeg|svg|gif)/,
          type: 'asset/resource'
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
  };
};
