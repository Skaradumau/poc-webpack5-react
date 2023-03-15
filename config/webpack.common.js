const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT = path.resolve('./');
const PATH = {
  build: path.resolve(ROOT, "build"),
  public: path.resolve(ROOT, "public"),
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: PATH.build,
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(PATH.public, "index.html") }),
  ],
  module: {
    rules: [
      // babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // assets
      {
        test: /\.(png|jpg|jpeg|svg|gif)/,
        type: 'asset/resource'
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};