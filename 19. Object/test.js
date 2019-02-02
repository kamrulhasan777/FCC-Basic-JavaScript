// Objects //

// dot notation
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.color;
console.log (myCar.make);
console.log (myCar.color);

// bracket notation
myCar["year"] = "1971";
console.log(myCar['model']);

myCar['Do I like?'] = " I hate my car ";
console.log(myCar["Do I like?"]);

// show property of an array.
function showProps(obj, objName){
    var result = "";
    for (var i in obj){

        if (obj.hasOwnProperty(i)){
            result += objName + "." + " = " + obj[i] +"\n";
        }
    }
    return result;
};
console.log(showProps(myCar, "myCar"));

// Object Creation: object initializer
var myHonda = {
    color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}
};

// Object Creation: constructor function
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
var mycar = new Car("chevy", "Malibu", 1993);
var amothercar = new Car ("Mazda", "Miata", 1990);
console.log(mycar.model);

mycar.color ="black";
console.log(mycar.color);

// Object Creation: Object.create
var Animal = {
    type: "Invertebraters",
    displayType: function(){
        console.log(this.type);
    }
}

var animal = Object.create(Animal);
animal.displayType();

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();