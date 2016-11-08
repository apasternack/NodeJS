function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.greet = function() {
    console.log('Hello, ' +  this.firstname + ' ' + this.lastname)
};

Person.prototype.middlename = 'Todd';

var john = new Person('John', 'Doe');

john.greet();

console.log(john.__proto__);