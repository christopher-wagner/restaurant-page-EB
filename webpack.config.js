const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwindcss = require('tailwindcss');

module.exports = {
  //mode: "development",
  entry: './src/index.js', //where you bundle the javascript code to use in entire program
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // where it goes to be bundled
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
  
        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
                {
                  // After all CSS loaders we use plugin to do his work.
                  // It gets all transformed CSS and extracts it into separate
                  // single bundled file
                  loader: MiniCssExtractPlugin.loader
              }, 
               {
                 // This loader resolves url() and @imports inside CSS
                 loader: "css-loader",
               },
               {
                 // Then we apply postCSS fixes like autoprefixer and minifying
                 loader: "postcss-loader"
               },
               {
                 // First we transform SASS to standard CSS
                 loader: "sass-loader",
                 options: {
                   implementation: require("sass")
                 }
               }
             ]
      },
      {
      // Now we apply rule for images
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
             {
               // Using file-loader for these files
               loader: "file-loader",

               // In options we can set different things like format
               // and directory to save
               options: {
                 outputPath: 'images'
               }
             }
           ]
    },      
    {
      test: /\.css$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1 } },
        "postcss-loader",
      ],
    },
    ]
  },
  
  plugins: [

    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  
  ],
  devtool: "source-map",
  mode: 'development'
};
