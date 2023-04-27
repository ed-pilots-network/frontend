const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,

        use: [{
          loader: 'babel-loader',

          options: {
            presets: ['@babel/preset-react'],
            //            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-top-level-await'],
          },
        }],

        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
      {
        test: /\.(woff(2)?|ttf|png|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,

        use: [{
          loader: 'file-loader',

          options: {
            name: '[name].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
};
