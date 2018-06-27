const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      // JavaScript linter configuration
      {
        enforce: 'pre', // This makes sure this rule is run first
        test: /\.jsx?$/, // Load .js and .jsx files
        exclude: /node_modules/, // Do not lint node_modules
        loader: 'eslint-loader',
      },
      // Babel JSX transpiling configuration
      {
        test: /\.jsx?$/, // Load .js and .jsx files
        exclude: /node_modules/, // Do not transpile node_modules (we assume they are always compiled for release)
        loader: 'babel-loader',
      },
      // CSS loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // File loader (for images and other static files)
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
