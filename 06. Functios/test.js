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