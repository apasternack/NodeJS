
// This buffer is pure vanilla JS, NOT a feature of NODE, although NODE does have a buffer

var buffer = new ArrayBuffer(8); //the number specifies the amount of bytes, so 8 bytes = 64 bits in this case
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;

console.log(view);
