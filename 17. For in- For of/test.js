/* for ... in / for ... of */


// for (variable in object){
//    statements
// }


let person = {fname: "Mahade", lname: "Hasan", arms:2};

let text = "";
for (let x in person){
    text += person [x];
    console.log(x);
};
console.log(text);

// for (variable of object){
//    statements
// }

let arr = [3, 5, 7];

    arr.foo = 'hello';

for(let i in arr){
    console.log(i);
};

for (let i of arr) {
    console.log(i);
}