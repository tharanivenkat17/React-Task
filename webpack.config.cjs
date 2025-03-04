// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); 

// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ 
//   template: './file/index.html', 
//   filename: 'index.html', 
//   inject: 'body'
// });

// module.exports = {
//   mode: 'development',
//   entry: './file/index.js',
//   output: {
//     path: path.resolve('dist'),
//     filename: 'index_bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           { loader: "style-loader" },
//           { loader: "css-loader" }
//         ]
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       },
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       }
//     ]
//   },
//   plugins: [HtmlWebpackPluginConfig]
// };



// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); 

// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ 
//   template: './file/index.html', 
//   filename: 'index.html', 
//   inject: 'body'
// }) 

// module.exports = {
//   mode:'development',
//   entry: './file/index.js',
//   output: {
//     path: path.resolve('dist'),
//     filename: 'index_bundle.js'
//   },
//   module: {
//     rules: [
//       { test: /\.css$/,
//         use: [
//           { loader: "style-loader" },
//           { loader: "css-loader" }
//         ]
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       }, {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       }
//     ]
//   },
//   plugins: [HtmlWebpackPluginConfig] 
// }


///////////////////////////////// Loaders ///////////////////////////////////////////////
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Babel loader to JS files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // CSS loader
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/, // Sass loader to SCSS files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Process images
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Handle font files
        type: 'asset/inline',
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'), 
    compress: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
};
