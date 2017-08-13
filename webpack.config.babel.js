import webpack from 'webpack';
import yargs from 'yargs';
import path from 'path';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

export default {
  entry: {
    components: './components/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: optimizeMinimize ? '[name].min.js' : '[name].js',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'components'),
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'components')],
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
          path.resolve(__dirname, 'components'),
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
