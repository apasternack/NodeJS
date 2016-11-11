function Emitter() {
    this.events = {};
}

// a 'listener' is merely the code that responds to an event, in Javascripts case the listener will be a function
Emitter.prototype.on = function (type, listener) {

    this.events[type] = this.events[type] || [];  // make it this.events[type] otherwise make it []
    this.events[type].push(listener);

}

Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;