/**
 * Created by robertstjacquesjr on 10/20/16.
 */
var http = require('http'); // loads the http module

// creates a new HTTP server.  whenever a client accesses the
// server, it will call the callback function with two parameters:
//    the req(uest) from the client
//    the res(ponse) that can be used to send data back to the client
http.createServer(function(req, res) {
    // writes a 200 OK response with the specified header indicating the content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, CSC 210!'); // ends the request
}).listen(8080); // starts the server on port 8080

