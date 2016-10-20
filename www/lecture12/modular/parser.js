// creates a constructor for a new type: Parser
var Parser = function() {

};

// create a function that, given a blob of text, parses it and returns
// the results as a dictionary of letter:count pairs.
Parser.prototype.parse = function(text) {
    // this code should look familiar: it is the code used to parse
    // the log files from the basics example
    var results = {};
    var lines = text.split('\n');
    lines.forEach(function(line) {
        console.log(line);
        var parts = line.split(' ');
        if(parts.length < 3) {
            return;  // accounts for blank lines
        }

        var letter = parts[1];
        var count = parseInt(parts[2]);

        if(!results[letter]) {
            results[letter] = 0;
        }

        results[letter] += count
    });
    return results;
};

// export the Parser type from this module so that it can be used
// in other JavaScript programs.
module.exports = Parser;
