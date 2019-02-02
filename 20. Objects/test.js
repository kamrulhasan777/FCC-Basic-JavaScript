/* Objects Part - 2 */

// using Objects for Lookups
var alpha = {
    1:"z",
    2:"Y",
    3:"X",
    4:"W"
};
console.log(alpha[2]);

// Remove Object Properties
let dishes = {
    plates: 8,
    cups: 10,
    forks: 28,
    bowls: 13
};
delete dishes.cups;
console.log(dishes);

// Testing Objects for Properties
console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty('cups'));

// Accessing and Modifying Nested Objects
var ourStorage = {
    "desk":{
        "drawer": "stapler"
    },
    "cabinet":{
        "top drawer":{
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);

ourStorage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);

// Generate an Array of All Object Keys
console.log(Object.keys(ourStorage));