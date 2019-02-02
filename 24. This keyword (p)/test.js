// This //

console.log(this.document === document);

console.log(this  === window);

this.a = 37;
console.log(window.a);

// strict mode
function f1(){
    //'use strict';
    return this;
}
console.log(f1() === window);

// call & apply method
/*function add(c, d){
    return this.a + this.b + c + d;
}
var o = {a: 1, b: 3};
console.log(add.call(o, 5, 7));

console.log(add.apply(o, [10, 20]));

*/
function f(){
    return this.a;
}

var g = f.blind({a: 'unicycle'});
console.log(g());

var h = g.blind({a: 'cereal'}); // won't work a second time
console.log(h());

var o = {a: 8, f: f, g: g, h: h };
console.log(o.f(), o.g(), o.h());