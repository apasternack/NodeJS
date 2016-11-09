var greeting = 'Hello world!!!!';

function greet() {
    console.log(greeting);
}


//this helps encapsulate our code; "Revealing Module Pattern", expose only proerties and methods you want via a returned object
//in this case var greetings is protected from any modifications from outside the module

module.exports = {
    greet: greet
}