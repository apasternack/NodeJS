var fs = require('fs');

// highWaterMark sets max size of buffer
var readable = fs.createReadStream(__dirname + '/greet1.txt', { encoding: 'utf8', highWaterMark: 16 * 1024});

var writable = fs.createWriteStream(__dirname + '/greet1copy.txt');

//look in the documentation to find that an event emitted by the ReadStream is an event called 'data'
readable.on('data', function (chunk) {

    console.log(chunk.length);
    writable.write(chunk);
});

