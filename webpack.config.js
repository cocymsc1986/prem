const path = require('path');

// env
const buildDirectory = './dist/';

module.exports = {
  entry: './client/index.js',
  devServer: {
    hot: true,
    inline: true,
    port: 5000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'bundle.js',
    publicPath: 'http://localhost:5000/static'
  },
  devTool: 'eval-source-map',
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  plugins: []
};
