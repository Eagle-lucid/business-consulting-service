const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js', // Entry point for the application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the dist folder before building
  },
  devtool: 'eval-source-map', // Useful for debugging
  devServer: {
    static: './dist', // Serve files from the dist folder
    watchFiles: ['./src/main.html'], // Watch for changes in HTML
    port: 8080,
    open: true, // Automatically open the app in the browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html', // Source HTML file
      filename: 'index.html', // Output file
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Extracted CSS file name
    }),
    new CleanWebpackPlugin(), // Cleans the output directory
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Process CSS files
      },
      {
        test: /\.html$/i,
        use: ['html-loader'], // Process HTML files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Handle image files
      },
      {
        test: /\.(mp4|webm)$/i, // Handle video files using file-loader
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/videos', // Output directory for videos
              name: '[name].[hash].[ext]', // Naming pattern for videos
            },
          },
        ],
      },
    ],
  },
};
