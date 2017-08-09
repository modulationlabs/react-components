import webpack from 'webpack';
import yargs from 'yargs';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

export default {
  entry: {
    app: './app/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: optimizeMinimize ? '[name].min.js' : '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/, 
        include: [path.resolve(__dirname, 'app')]
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
    new HTMLWebpackPlugin({
      template: 'app/index.html'
    })
  ],

  devtool: optimizeMinimize ? 'source-map' : false,
};