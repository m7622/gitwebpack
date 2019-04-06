
const path = require('path');
module.exports = {
    entry: './start/js/script.js',
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
        }]
    }    
            
            
};