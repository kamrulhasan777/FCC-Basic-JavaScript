//10 Array Methods //

var arr = ["a", "b", "c"];

//01 push()
arr.push("d");
console.log(arr);

//02 pop()
console.log(arr.pop());
console.log(arr);

//03 concat()
var arr2 = ["e","f"];
console.log(arr.concat(arr2));

//04 join()
console.log(arr.join(""));

//05 reverse()
console.log(arr.reverse());

//06 shift()
console.log(arr.shift());
console.log(arr);

//07 unshift()
console.log(arr.unshift("j"));
console.log(arr);

//08 slice()
console.log(arr.slice(1,3));
console.log(arr);

//09 sort()
arr.push("k", "p");
console.log(arr);
console.log(arr.sort());

//10 splice()
console.log(arr.splice(2,2));