const webpack = require('webpack');
const path = require('path');
const nodeExternals = require( 'webpack-node-externals' );
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  entry: ['webpack/hot/poll?1000', './src/main.hmr.ts'],
  watch: true,
  target: 'node',
  devtool: 'source-map',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': path.resolve( __dirname, 'src/app' )
    }
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
};
