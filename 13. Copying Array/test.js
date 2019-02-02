/* Copying Arrays */

var original = [true, true, undefined, false, null];

// slice 
var copy1 = original.slice(0);

// spread operator 
var copy2 = [...original];
console.log(copy1, copy2);

// deep copying
var deepArray = [["freeCodeCamp"]];
var shallowCopy = deepArray.slice(0);

shallowCopy[0].push('is great');
console.log(deepArray[0], shallowCopy[0]);

var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push("is great");
console.log(deepArray[0], deepCopy[0]);