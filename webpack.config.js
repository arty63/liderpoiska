const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    cart: './src/pages/cart.js',
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Лидер поиска',
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'],
      favicon: './assets/icons/logo.png',
    }),
    new HtmlWebpackPlugin({
      title: 'Лидер поиска - Корзина',
      filename: 'cart.html',
      template: './src/pages/cart.html',
      chunks: ['exampleEntry'],
      favicon: './assets/icons/logo.png',
    }),
  ],
};
