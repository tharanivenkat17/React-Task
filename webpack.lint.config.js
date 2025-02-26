const ESLintPlugin = require('eslint-webpack-plugin'); 
const path = require('path'); 

module.exports = { 
  mode: 'development', 
  entry: './file/index.js', 
  output: { 
    path: path.resolve('dist'), 
    filename: 'index_bundle.js' 
  }, 

  module: { 
    rules: [ 
      { 
        test: /\.(js|jsx)$/i, 
        exclude: /node_modules/, 
        use: ['babel-loader'], 
      }, 

      { 
        test: /\.css$/i, 
        use: ['style-loader', 'css-loader'], 
      }, 
    ] 
  }, 

  plugins: [ 
    new ESLintPlugin({ 
      extensions: ['js', 'jsx'], 
      fix: true,  
      context: path.resolve(__dirname, 'file'), 
    }), 

    new HtmlWebpackPlugin({ 
      template: './file/index.html', 
      filename: 'index.html', 
      inject: 'body', 
    }),  ], 

  resolve: { 
    extensions: ['.js', '.jsx'], 
  }, 
}; 