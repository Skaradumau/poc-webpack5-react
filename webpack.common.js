const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATH = {
  build: path.resolve(__dirname, "build"),
  public: path.resolve(__dirname, "public"),
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: PATH.build,
    assetModuleFilename: 'assets/[hash][ext][query]',
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