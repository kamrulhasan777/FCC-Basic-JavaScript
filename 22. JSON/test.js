// JSON //

var myJSON = {
    "name": {
        "firstName": "Mahade",
        "lastName": "Hasan"
    },
    "age": 33,
    "skills": ["juggling", "stiltwalking", "coding"],
    "married": true,
    "superpowers": null
}

// stringify method
var stringified = JSON.stringify(myJSON);
console.log(stringified);

// perse method
var stringJSON = '{"name":"Mahade", "status":"Unmarried"}';
var MyParse = JSON.parse(stringJSON);
console.log(MyParse);