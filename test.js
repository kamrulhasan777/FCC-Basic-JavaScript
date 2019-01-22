// Variables //
var myName;
myName = "Mahade Hasan";

var state = "Khulna";

console.log("My name is " + myName);

console.log("I live in " + state);

state = "Dhaka";
console.log("I live in " + state);



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


// Numbers // 
var number = 12; 

number++;

console.log(number++);
console.log(number);

// Strings (dot notation)//

var myName = "Mahade Hasan";

var sentence = "My Name Is \"Mahade Hasan\" ";

console.log(sentence);

var fullName = "Mahade " + "hasan";

console.log("My name is " + fullName);


//Strings [bracket notation]

var firstName = "Mahade";
var lastName = "Hasan";
console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);
console.log(firstName[3]);
console.log(firstName[4]);
console.log(firstName[5]);

console.log(lastName[lastName.length - 1])
console.log(lastName[lastName.length - 2])
console.log(lastName[lastName.length - 3])
console.log(lastName[lastName.length - 4])
console.log(lastName[lastName.length - 5])

var newFirstName = "Hasan";
var newLastName = "Mahade";
console.log(newFirstName +" "+ newLastName);


/* 20 String Methods */

var stringOne = "learning JavaScript from Free Code CAMP.";
var stringTwo = " Beau is a good teacher for JavaScript. He is too good";

//01 charAt()
console.log(stringOne.charAt(1));

//02 charCodeAt()
console.log(stringOne.charCodeAt(1));

//03 concat()
console.log(stringOne.concat(stringTwo));

//04 endsWith()
 //"method is not working"

//05 fromCharCode()
console.log(String.fromCharCode(114));

//06 includes()
console.log(stringTwo.includes("Beau"));

//07 indexOf()
console.log(stringTwo.indexOf("good"));

//08 lastIndexOf()
console.log(stringTwo.lastIndexOf("good"));

//09 match()
console.log(stringTwo.match(/good/g));

//10 repeat()
console.log(stringOne.repeat(2));

//11 replace()
console.log(stringTwo.replace(/good/g, "GOOD"));

//12 search()
console.log(stringOne.search("Free"));

//13 slice()
console.log(stringTwo.slice(2, 4));

//14 split()
console.log(stringOne.split(" "));

//15 startsWith()
console.log(stringOne.startsWith("learning"));

//16 substr()
console.log(stringOne.substr(2, 4));

//17 substring()
console.log(stringOne.substring(2, 4));

//18 toLowerCase()
console.log(stringOne.toLowerCase());

//19 toUpperCase()
console.log(stringOne.toUpperCase());

//20 trim()
console.log(stringTwo.trim());


/* Functions */

var head = "Wearing a Red hat on head";

function dress(){
    var head = "Wearing a Blue hat on head"
    console.log(head);
}

dress();
console.log(head);

// function nesting

function addSquares(a, b){
    function square(x) { 
        return x * x;
    };
    return square(a) + square(b);
}

a = addSquares(2, 3);
b = addSquares(3, 4);
c = addSquares(4, 5);

console.log(a);
console.log(b);
console.log(c);

/* Hoisting */
console.log(definedLater);

var definedLater = "Defined Now";

definedLater = "I am defined";

console.log(definedLater);


doSomethingElse();
function doSomethingElse(){
    console.log("I did it!");
}

functionVar();
var functionVar = function(){
    console.log("I did it!"); //give an error
}

