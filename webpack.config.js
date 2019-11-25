const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	output: {
    	filename: 'app.bundle.js',
    	publicPath: '/'
  	},
  	plugins: [
	    new HtmlWebpackPlugin({
	      template: 'src/index.html'
	    }),
	    new MiniCssExtractPlugin({
			filename: 'bundle.css',
		}),
  	],
  	module: {
    rules: [
	    {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	          options: {
	            //plugins: ['@babel/plugin-syntax-dynamic-import'],
	            presets: ['@babel/preset-env', '@babel/preset-react']
	          }
	        }
	    },
	    {
	        test: /\.(png|jpe?g|gif|svg)$/i,
	        use: [
	          {
	            loader: 'file-loader',
	          },
	        ],
	    },
	    {
		   test: /\.(ttf|eot|woff|woff2)$/,
		  use: {
		    loader: "url-loader",
		    options: {
		      limit: 50000,
		    },
		  },
		},
		{
			test: /\.s[ac]ss$/i,
			use: [
				//'style-loader',
				MiniCssExtractPlugin.loader,
			 	'css-loader',
			 	'sass-loader',
			],
		},
		
    ]
  }
}