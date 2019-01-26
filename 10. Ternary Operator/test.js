// Ternary Operator //

var age = 18;

if (age >= 18){
    console.log("You are an adult");
}else{
    console.log("You are a kid");
};

age = 15
console.log( (age >= 18)? "You are an adult" : "You are a kid");

var fristCheck = false,
    secondCheck = false,
    access = fristCheck ? "Access granted" : secondCheck ? "Access granted" : "Access denied";

    console.log(access);