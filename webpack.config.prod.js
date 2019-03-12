const webpack = require('webpack');
const path = require('path');
const nodeExternals = require( 'webpack-node-externals' );
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  entry: ['./src/main.ts'],
  watch: false,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  mode: "production",
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app')
    }
    },
  plugins: [
  ],
    output: {
      filename: 'bundle.js',
    },
};
