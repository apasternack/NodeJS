var buf = new Buffer('Hello','utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wd');
console.log(buf.toString());