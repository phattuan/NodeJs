const http = require('http');
const fun = function (req, res, next) {
    res.write('i\'m HO TUAN PHAT');
}
module.exports.ca = fun;