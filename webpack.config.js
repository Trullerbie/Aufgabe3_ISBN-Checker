const path = require('path')

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/checkisbn.js')
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'main.bunde.js'
    }
}