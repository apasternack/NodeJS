var fs = require('fs');

// highWaterMark sets max size of buffer
var readable = fs.createReadStream(__dirname + '/greet1.txt');

var writable = fs.createWriteStream(__dirname + '/greet1bcopy.txt');

//look in the documentation to find that an event emitted by the ReadStream is an event called 'data'
readable.pipe(writable);



