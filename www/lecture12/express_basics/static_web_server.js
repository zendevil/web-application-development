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
// not that the '/' can be left off if the path is root
app.use('/', express.static(__dirname + '/public'));
// multiple calls to use can set up redirection to the same or different
// locations in the file system.
app.use('/example', express.static(__dirname + '/public'));

var port = 8080;
app.listen(port, function() {
   console.log("Express application listening on port " + port);
});



// sets up a faux admin server on port 8088.  note that for a real
// admin server, https should be enabled.
var admin_port = 8088;
admin = express();
admin.use('/', express.static(__dirname + '/admin'));
admin.listen(admin_port, function() {
   console.log("Faux admin listening on port " + admin_port);
});




