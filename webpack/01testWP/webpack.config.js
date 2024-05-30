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
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

module.exports = config;