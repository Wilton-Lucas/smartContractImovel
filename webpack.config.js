const path = require('path')

module.exports = {
  // O frontend fica dentro da pasta src
  entry: path.join(__dirname, 'src/js', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js' // O arquivo final será criado em dist/build.js
  },
  module: {
    rules: [{
      test: /\.css$/, // Para carregar o CSS no React
      use: ['style-loader', 'css-loader'],
      include: /src/
    }, {
      test: /\.jsx?$/, // Para carregar arquivos JS e JSX
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-2']
      }
    }]
  }
}