var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
    Person.call(this);
    this.badgenumber = '1234';
}

Person.prototype.hey = "yo";

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();

var thisPerson = new Person();

console.log(officer.hey);

Policeman.prototype.extraPrototypeProperty = "prototypeProperty";
Policeman.extraObjectProperty = "objectProperty";

// this works because of protypical inheritance
console.log(officer.extraPrototypeProperty);
//this does not work because JS uses prototypical inheritance NOT class inheritance
console.log(officer.extraObjectProperty);