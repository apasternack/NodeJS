var fs = require('fs');
var zlib = require('zlib');

// highWaterMark sets max size of buffer
var readable = fs.createReadStream(__dirname + '/greet1.txt');

var writable = fs.createWriteStream(__dirname + '/greet1bcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet1.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);


