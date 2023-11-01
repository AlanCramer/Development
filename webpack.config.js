// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Files to be processed by the loader
        exclude: /node_modules/, // Don't process node_modules
        use: {
          loader: 'babel-loader', // Use the babel-loader
          options: {
            presets: ['@babel/preset-env'] // Specify presets
          }
        }
      }
    ]
  },
  mode: 'development' // Use development mode (or 'production' for production)
};

