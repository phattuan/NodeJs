//-------basic routing---
//--example--
/*
const http = require('http');
function index(request, response) {
    response.writeHead(200);
    response.end('hello');
}
http.createServer(function (request, response) {
    if (request.url === '/') {
        return index(request, response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(1337);
*/
//If you continue to define your "routes" like this, though, you'll end up with one massive callback function--


//-- First, let's store all of our routes in an object
const http = require('http');
var routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('hello');
    },
    '/foo': function foo(request, response) {
        response.writeHead(200)
        response.end('you are now viewing "foo"');
    }
};
// Now that we've stored 2 routes in an object, we can now check for them in our main callback:
http.createServer(function (request, response) {
    if (request.url in routes) {
        return routes[request.url](request, response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(1337);