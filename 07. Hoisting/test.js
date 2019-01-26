/* Hoisting */
console.log(definedLater);

var definedLater = "Defined Now";

definedLater = "I am defined";

console.log(definedLater);

doSomethingElse();
function doSomethingElse(){
    console.log("I did it!");
}

/*functionVar();
var functionVar = function(){
    console.log("I did it!"); //give an error
}*/