"use strict"
var tls = require('tls');
var fs = require('fs');

const PORT = 1337;
const HOST = '127.0.0.1';

//đưa cert cho máy chủ và để nó biết để xử lý ngay cả những việc không được phép
var client = tls.connect(PORT, HOST, options, function () {
    // kiểm tra xen ủy quyèn có hoạt động biết
    if (client.authorized) {
        console.log("Connection authorized by a Certificate Authority.");
    } else {
        console.log("Connection not authorized: " + client.authorizationError)
    }
    // gửi 1 thông điệp
    client.write("I am the client sending you a message.");
});
client.on("data", function (data) {
    console.log('Received: %s [it is %d bytes long]',
        data.toString().replace(/(\n)/gm, ""),
        data.length);
    // Close the connection after receiving the message
    client.end();
});
client.on('close', function () {
    console.log("Connection closed");
});
// When an error ocoures, show it.
client.on('error', function (error) {
    console.error(error);
    // Close the connection after the error occurred.
    client.destroy();
});