
const path = require('path');
module.exports = {
    entry: './final/assets/js/script.js',
    output: {
        filename: './final/assets/js/index.js',
        path: path.resolve(__dirname, './'),
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
        }
        ]
    }    
            
            
};