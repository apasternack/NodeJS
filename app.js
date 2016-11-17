//my event listener/emitter....its just an object!!!

var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('someone somewhere said hello')
});

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting occurred!');
});

emtr.on(eventConfig.LUNCH, function() {
    console.log('Lunch time!');
});

emtr.on(eventConfig.LUNCH, function() {
    console.log('what would you like to eat?');
});


console.log("Hello!");
//manually triggering event
emtr.emit('greet');

emtr.emit('lunch');