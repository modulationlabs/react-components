import webpack from 'webpack';
import yargs from 'yargs';
import path from 'path';

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
        loader: 'babel', 
        exclude: /node_modules/, 
        include: [path.resolve(__dirname, 'app')]
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],

  devtool: optimizeMinimize ? 'source-map' : false,
};