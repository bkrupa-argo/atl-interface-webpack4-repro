const path = require('path');

module.exports = {
  entry: {
    'component': path.join(__dirname, './src/index.ts'),
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  devtool: 'source-map',
};
