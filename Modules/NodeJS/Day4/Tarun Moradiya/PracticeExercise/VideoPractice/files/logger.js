// ( function(exports, require, module, __filename, __dirname) { //module wrapper function

console.log(__dirname)
console.log(__filename)

url = 'http://mylogger.io/log';

function log(message) {
    //Send an http request
    console.log(message);
}

// module.exports.log = log;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = log;

// })