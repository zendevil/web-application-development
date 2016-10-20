/**
 * Created by robertstjacquesjr on 10/20/16.
 */
// loads the express module, and creates an express app
// this WILL NOT WORK if express is not installed:
//    npm install express
var express = require('express'),
    app = express();

// __dirname is a shortcut for the directory in which the express
// server is running.
// this app will look for any file requested in the a 'public'
// subdirectory under the current directory and, if it's there,
// return it.
app.use(express.static(__dirname + '/public'));

app.listen(8080);

