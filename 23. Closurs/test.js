// Closures //
function makeFunc(){
    var name = "JS Nuggets";
    function displayName(){
        console.log(name); // accessing variable into the child function from parent function.
    }
    return displayName;
};

var myFunc = makeFunc();
myFunc();


// Immediately Invoked Function
var counter = (function(){
    var privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }
    return {
        increment: function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        value: function(){
            return privateCounter;
        }
    }
})();

console.log(counter.value());
counter.increment();
counter.increment();

console.log(counter.value());
counter.decrement();
console.log(counter.value());

