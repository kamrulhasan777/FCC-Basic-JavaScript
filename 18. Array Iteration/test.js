/* Array iteration: 8 methods */

// forEach
[1, 2, 3].forEach(function(item, index){
    console.log(item, index);
});

// map 
const three = [1, 2, 3];
const doubled = three.map(function (item){
    return item * 2;
});
console.log(doubled);

// filter
const ints = [1, 2, 3, 4, 5];
const evens = ints.filter(function (item){
    return item %2 == 0;
});
console.log(evens);

// reduce
const items = [1, 2, 3];
const sum = items.reduce(function (result, item){
    return result + item;
}, 0);
console.log(sum)

// some
const negativeNumbers = [1, 2, 3, -1, 4];
const hasNegativeNumber = negativeNumbers.some(function(item){
    return item < 0;
});
console.log(hasNegativeNumber);

// every
const positiveNumbers = [1, 2, 3];
const allPositiveNumber = positiveNumbers.every(function(item){
    return item > 0;
});
console.log(allPositiveNumber);

// find
const objects = [{ id: 'a'}, { id: 'b'}, { id: 'c'}];
const found = objects.find(function (item){
    return item.id === 'b';
});
console.log(found);

// find index
const objects2 = [{ id: 'a'}, { id: 'b'}, { id: 'c'}];
const foundIndex = objects2.findIndex(function (item){
    return item.id === 'b';
});
console.log(foundIndex);