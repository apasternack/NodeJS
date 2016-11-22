var fs = require('fs');

// .readFileSync makes following code execution wait for this I/O function to complete before preceeding
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
    //example of "error first callbacks", where first parameter will be null if no errors, else an object defining the error
    function(err, data) {
        console.log(data);
});

console.log("Done!");