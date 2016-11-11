//my event listener/emitter....its just an object!!!

var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('someone somewhere said hello')
});

emtr.on('greet', function() {
    console.log('A greeting occurred!');
});

emtr.on('lunch', function() {
    console.log('Lunch time!');
});

emtr.on('lunch', function() {
    console.log('what would you like to eat?');
});


console.log("Hello!");
//manually triggering event
emtr.emit('greet');

emtr.emit('lunch');