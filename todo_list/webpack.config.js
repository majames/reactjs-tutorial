module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './dist/js/main.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },

  devServer: {
    contentBase: './dist',
    colors: true,
    hot: true,
    inline: true
  },

  devtool: 'source-map'
};