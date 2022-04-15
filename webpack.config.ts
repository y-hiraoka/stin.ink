import CopyPlugin from "copy-webpack-plugin";
import { Configuration } from "webpack";
import path from "path";

const config: Configuration = {
  mode: "production",
  entry: "./src/client.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "client.js",
    publicPath: "",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
};

export default config;
