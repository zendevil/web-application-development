/**
 * Created by robertstjacquesjr on 10/20/16.
 */
var PythonShell = require('python-shell'); // npm install python-shell
var http = require('http');

http.createServer(function(req, res) {
    PythonShell.run('example.py', function (err, results) {
        if (err) {
            res.writeHead(500, {'Content-type': 'text/plain'});
            res.end("Error on the server: " + err.message);
        }
        else {
            res.writeHead(200, {'Content-type': 'text/html'});
            var response = ''
            results.forEach(function(line) {
               response = response + line + '\n';
            });

            res.end(response);
        }
    });
}).listen(8888);
