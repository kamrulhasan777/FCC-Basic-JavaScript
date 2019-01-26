// Data Types (7 in JavaScript) //

// Boolean

var data = true;

if (data){
    console.log("Booleans rule!");
}else{
    console.log("Booleans are lame.")
}

// Null

var n = null;
console.log(n * 32);

//Undefined

var a;
console.log(a + 2);

// Nubmer

var num = 3.6;
var ber = 6.4;
console.log(num + ber);

// String "Howdy"

var name = "Hasan";
console.log("Hi ! My name is " + name);

// Symbol (es6)

var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 == sym2);
console.log(String(sym1) == String(sym2));

// Object

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make);




