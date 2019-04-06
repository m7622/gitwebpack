
const path = require('path');
module.exports = {
    entry: './start/js/script.js',
    output: {
        filename: './final/assets/js/index.js',
        path: path.resolve(__dirname, './'),
    }
};