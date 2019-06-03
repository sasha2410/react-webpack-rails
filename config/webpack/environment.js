const { environment } = require('@rails/webpacker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module: {
  rules: [
    {
      test: /\.js(\.erb)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { modules: false }]
        ]
      }
    }
  ]
};

// Styles
environment.loaders.insert('sass', {
  test: /\.(css|sass|scss)$/i,
  use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
});

// HTML
environment.loaders.insert('html', {
  test: /\.html$/,
  use: 'raw-loader'
});

module.exports = environment;
