const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  mode: "development",
  // Point d'entrée de Webpack
  entry: {
    myApp: ["./src/main.ts"],

  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // pour les fichiers se terminant pas ts ou tsx
        exclude: /node_modules/, // sans prendre en compte les dépendances
        use: "ts-loader",
      },
      {
        test: /.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),

  },
  //plugins: [new HtmlWebpackPlugin()],
  plugins: [new HtmlWebpackPlugin({ template: __dirname + '/src/index.html' })],
  devServer: { open: true },
};
module.exports = config;