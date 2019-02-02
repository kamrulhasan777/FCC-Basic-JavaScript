// setTimeout and setInterval //

// setTiemout
var timeoutID = setTimeout(bye, 3000);
console.log('hello');

clearTimeout(timeoutID);

function bye(){
    console.log('goodbye');
}

// setInterval
var count = 0;
var inId = setInterval(counter, 1000);

function counter(){
    console.log(++count);
}
