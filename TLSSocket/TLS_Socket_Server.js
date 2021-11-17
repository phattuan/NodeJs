'use strict' // chế độ quản lý code 1 cách nghiêm ngặt trong Js // 
var tls = require('tls');
var fs = require('fs');

const PORT = 1337;
const HOST = '127.0.0.1';

var options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('private-csr.pem')
};

var server = tls.createServer(options, function (socket) {
    //send a fr smg
    socket.write('i am tuan phat');
    // print the data that we received
    socket.on('data', function (data) {
        console.log('received: %s[it is %d bytes long]',
            data.toString().replace(/(\n)/gm, ""),
            data.length);
    });
    //cho biết khi nào đường truyền sẽ kết thúc 
    socket.on(end, function () {
        console.log('end');
    });
});
//bắt đầu lắng nghe cổng port và đại chỉ cụ thể 
server.listen(PORT, HOST, function () {
    console.log('i am listening', HOST, PORT);
});

// khi gặp lỗi , hiển thị
server.on('error', function (error) {
    console.error(error);
    server.destroy();
});
