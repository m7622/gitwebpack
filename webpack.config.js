
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './final/assets/js/script.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.join(__dirname, './final/dist'),
        publicPath:'./final/dist/'
    },
    module:{
        rules:[{
            
            test:/\.(js)$/,
            exclude:/(node_modules)/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        },
        {
            
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                   loader: 'css-loader',
                   options: {
                      url: false
                   }
                }, {
                   loader: 'postcss-loader'
                }]
             })
            
         },
        {
            test:/\.(jpe?g|png|gif|svg)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:40000,
                    outputPath:'./images'
                }
                },
                'image-webpack-loader'
            ]
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use:{
                loader:'file-loader',
                options: {
                    outputPath: 'css/fonts',
                    name: '[name].[ext]',
                },
            }
        }
        ]
    },
    plugins:[
        new ExtractTextPlugin('./css/style.css'),
        new HtmlWebpackPlugin({
            template:'./final/assets/index.html'
        })
    ]
            
            
};