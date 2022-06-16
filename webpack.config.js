const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8079,
    }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
          filename: './styles/main.css'
      })
  ],
  module: {
      rules: [
          {
              test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
              type: 'asset/inline'
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [ '@babel/preset-env', ]
              }
            }
          },
          {
              test: /\.html$/i,
              loader: 'html-loader'
          },
          {
              test: /\.css$/i,
              use: [
                MiniCssExtractPlugin.loader, 'css-loader'
              ]
          },
          {
              test: /\.scss$/i,
              use: [
                MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
              ]
          }
      ]
  },
  ...devServer(develop),
});
