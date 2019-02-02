// Immediately Invoked Function Expression (IIFE) //
(function (){
    console.log("My favorite number is 7");
})();

(favNumber =  function (num = 3){
    console.log("My favorite number is " + num);
})();

favNumber(5);

// Useage of IIFE
var a = 2;
(function(){
    var a = 3;
    console.log(a);
})();

console.log(a);

// without IIFE
let b = 2;
 {
     let b =3;
     console.log(b);
 }

 console.log(b);