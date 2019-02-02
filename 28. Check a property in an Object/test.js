// Check if a property is in an object //
var myObject = {
    fullName: "Mahade Hasan"
}

if(myObject.fullName){
    console.log('It is in!')
}

console.log(myObject.hasOwnProperty('fullName'));
console.log('fullName' in myObject);

console.log(myObject.hasOwnProperty('valueOf'));
console.log('valueOf' in myObject); // 'value of' default property of all object.    