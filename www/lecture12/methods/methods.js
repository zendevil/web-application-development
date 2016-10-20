/**
 * Created by robertstjacquesjr on 10/20/16.
 */
var express = require('express');
app = express();

// http get
// curl -X GET http://localhost:8080/
app.get('/', function(req, res) {
   res.send('Response to GET\n');
});

// http post
// curl -X POST http://localhost:8080/
app.post('/', function(req, res) {
   res.send("POSTED\n");
});

// curl -X PUT http://localhost:8080/put-test
app.put('/put-test', function(req, res) {
   res.send("PUTTED!\n");
});

// curl -X DELETE http://localhost:8080/del-test
app.delete('/del-test', function(req, res) {
    res.send('DELETED!\n');
});

app.listen(8080, function() {
    console.log("listening for incoming HTTP methods...\n");
});


