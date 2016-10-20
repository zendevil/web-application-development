// the filesystem module is included in node.js to make
// interacting with the file system easier
var fs = require('fs'); // l oads the file system module

// the readFile function takes two parameters:
//    the filename to read into memory
//    a callback function to call after the file is read into memory
// the function also takes two parameters:
//    an error (if there was one)
//    a buffer containing the data that was read from the file
//
fs.readFile("example_log.txt", function (err, logData) {
    if (err) { // if there is some kind of error, throw it
        throw err;
    }

    var text = logData.toString();  // convert the data to a string

    var results = {}; // dictionary used to count the numbers next to each
                      // letter in the log file

    var lines = text.split('\n'); // split the text into lines using newlines

    // this loops over the lines in the file.  the function passed in as a
    // parameter is called once for each line to process it
    lines.forEach(function(line) {
        console.log("line:'" + line + "'");
        var parts = line.split(' '); // split the line on spaces

        if(parts.length < 3) {
            return; // ignore blank lines
        }

        console.log(parts[0]); // logs the date stamp at the start of each line
        var letter = parts[1]; //  the letter following the data stamp
        var count = parseInt(parts[2]); // parses the number after the letter

        console.log(letter);
        console.log(count);

        if(!results[letter]) {  // if the letter is not yet in the dictionary
            results[letter] = 0
        }

        results[letter] += count // increment the count
    });

    console.log(results); // log the results
}); 
