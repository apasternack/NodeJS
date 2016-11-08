function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.greet = function() {
    console.log('Hello, ' +  this.firstname + ' ' + this.lastname)
};

Person.prototype.middlename = 'Todd';


// when new is used before a function, it redirects this to a new empty object which then has properties set as the function (here, Person) is run:
var john = new Person('John', 'Doe');

var jane = new Person('Jane', 'Doe');
jane.greet();

john.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);