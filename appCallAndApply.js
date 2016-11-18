var obj = {
    name: 'Hillary Clinton',
    greet: function(p1, p2) {
        console.log(`Hello ${ this.name}.  ${p1} and ${p2}!`);
    }
}

obj.greet('apples', 'oranges');

//only difference between call and apply is the format of how I pass parameters (if there are any, to the functionÍ)
obj.greet.call({ name: "Donald Trump"}, 'potato', 'tomato');
obj.greet.apply({ name: "mike pence"}, ['this', 'that']);
