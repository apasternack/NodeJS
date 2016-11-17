var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}


// 'create' creates an empty object with the prototype of the parameter passed in, 'person' in this example
var john = Object.create(person);
john.firstname = 'Adam';
john.lastname = 'Pasternack';

console.log(john);

var john = Object.create(john);
// john.firstname = 'Adam';
// john.lastname = 'Pasternack';

console.log(john.firstname);