/**
 * Created by robertstjacquesjr on 10/20/16.
 */

// uses the parser module from parser.js in the same directory
var Parser = require('./parser');

// same as before, loads the file system module
var fs = require('fs');

// this works exactly the same as before until...
fs.readFile('example_log.txt', function(err, logData) {
   if(err) {
       throw err;
   }

   var text = logData.toString();

    // ... the parser is used to parse the file. make one by calling the
    // constructor that is exported from the parser module
    var parser = new Parser();

    // use the parser
    var parsed = parser.parse(text);

    //print the results
    console.log(parsed);
});