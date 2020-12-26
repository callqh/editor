const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        include: /src/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js", ".json", ".css"],
    alias: {
      // utils: path.join(srcPath, 'utils'),
      // style: path.join(srcPath, 'assets', 'style'),
      // '@': srcPath,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify("dev1"),
      ENV1: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
