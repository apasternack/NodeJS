var greet = require('./greet1');
greet();

// var greet2 = require('./greet2');
// greet2.greet();
var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'changed hello world!';

//require CASHES THINGS so whenever it is called subsequently EVEN FROM A DIFFERENT FILE, a reference to the origional object set to module.exports is returned 
var greet3b = require('./greet3');
greet3b.greet();

// returning a Constructor function instead of a new object made by the constructor function is a way around the above limitation 
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();