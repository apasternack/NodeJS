function greet() {
    console.log("hello!");
}

greet();

//functions are first class

function logGreeting(fn) {
    fn();
}

logGreeting(greet);

//function expression

var greetMe = function() {
    console.log('Hi Tony');
}
greetMe();
logGreeting(greetMe);

logGreeting(function() {
    console.log("OH!   IO!")
});