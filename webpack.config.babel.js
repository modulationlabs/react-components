import webpack from 'webpack';
import yargs from 'yargs';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

export default {
  entry: {
    app: './app/index.jsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: optimizeMinimize ? '[name].min.js' : '[name].js',
  },

  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'app'),
          path.resolve(__dirname, 'shared'),
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'app')],
      },
      {
        test: /\.scss$/,
        use: [
         'style-loader', 
         { loader: 'css-loader', options: { importLoaders: 2 } },
         'postcss-loader', 
        ],
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'app'),
          path.resolve(__dirname, 'shared'),
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          'react-svg-loader',
        ],
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'assets')],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
    new HTMLWebpackPlugin({
      template: 'app/index.html',
    }),
  ],

  devServer: {
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    proxy: [
      {
        path: '/api',
        target: 'https://www.google.com',
        secure: false,
      },
    ],
  },
  devtool: optimizeMinimize ? 'source-map' : false,
};
