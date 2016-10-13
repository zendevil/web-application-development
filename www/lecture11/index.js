
// unlike the JavaScript that we have used before, this code will
// will actually run on the server

// before running:
//                 npm install --save express@4.10.2
//                 npm install --save socket.io

// to run:
//                 node index.js

// to start the server, navigate to http://localhost:3000 in a browser

// initialize the application to be a function handler
var app = require('express')();
// supply the function handler to the HTTP server
var http = require('http').Server(app);
// create a socket IO instance using the http function handler
var io = require('socket.io')(http);

// this defines a route handler for '/', which is the root on the server
app.get('/', function(request, response) {
    // hello world example
    // response.send('<h1>Hello, world!</h1>');

    // send a file in response to a request.
    // __dirname is a shortcut for the current directory
    console.log('__dirname: ' + __dirname);
    response.sendFile(__dirname + '/client.html');

});

// event handler for an incoming connection from a client
io.on('connection', function(socket) {
    // print a message indicating that the client connected
    console.log('a client connected');

    socket.on('chat message', function(msg) {
       console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    // event handler that is called when the client disconnects the socket
    // to test this, close the browser tab for the page that is connected
    socket.on('disconnect', function() {
       console.log('a client disconnected');
    });
});

// starts the HTTP server listening on port 3000
http.listen(3000, function() {
    console.log('listening on *:3000');
});

// this is an event handler that catches the CTRL-C event (SIGINT) and
// performs a graceful shutdown of node.js
process.on( 'SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  process.exit();
});

// from a terminal, navigate to the directory containing this file and:
//      node index.js

// This will start the server.


