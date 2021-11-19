const express = require('express');
const app = express();
//---can define routes like this------
app.get('/hotuanphat', function (req, res, next) { })

//----------------------------------------------------
// cấu trúc này hoạt động cho tất cả các phương thức trong http
// GET www.domain.com/myPath
app.get('/myPath', function (req, res, next) {})
// POST www.domain.com/myPath
app.post('/myPath', function (req, res, next) {})
// PUT www.domain.com/myPath
app.put('/myPath', function (req, res, next) {})
// DELETE www.domain.com/myPath
app.delete('/myPath', function (req, res, next) {})

//----------------------------------------------------------------
// nếu bạn muốn định nghĩa toàn bộ các hoạt động cho cùng 1 tuyến đường, you can use:
app.all('/myPath', function (req, res, next) {})
// or
app.use('/myPath', function (req, res, next) {})
//or 
app.use('*', function (req, res, next) {})//kí tự đại diện * sẽ hướng đến all paths

// có thể xâu chuỗi các phương thức như sau:
app.route('/myPath')
 .get(function (req, res, next) {})
 .post(function (req, res, next) {})
 .put(function (req, res, next) {})

 //để làm cho code cleaner hơn, và tránh việc quá nhiều lệnh trong 1 file thì :
 // other.js
exports.doSomething = function(req, res, next) {/* do some stuff */};
// then in the file containing your routes
const other = require('./other.js');
app.get('/someUri', myFunction, other.doSomething);
