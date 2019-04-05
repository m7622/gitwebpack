
const path = require('path');
module.exports = {
    entry: './assets/js/script.js',
    output: {
        filename: './dist/bundle.js',
        path: path.resolve(__dirname, './'),
    }
};