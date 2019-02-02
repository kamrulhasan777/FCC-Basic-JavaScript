// Promises //
// Basic Usage
var p = new Promise(function(resolve, reject){
    if (good_condition){
        resolve('Success!');
    }
    else{
        reject('Failure!');
    }
});
 
p.then(function(){
    /* do something with the result */
}).catch(function(){
    /* error */
})

// Real example
var PromiseCount = 0;

function testPromise(){
    var thisPromiseCount = ++PromiseCount;
    console.log(thisPromiseCount + ': Started - Sync code started');
    // example asynchronism
    var p1 = new Promise(function(resolve, reject){
        console.log(thisPromiseCount + ': Promise started - Async code started');
        window.setTimeout(
            function(){
                resolve(thisPromiseCount);
            }, Math.random() * 2000 + 1000);
    });

    p1.then(function(val){
        console.log(val + ': Promise fulfilled - Async code terminated');
    }).catch(function(reason){
        console.log('Handle rejected promise ('+reason+') here');
    });

    console.log(thisPromiseCount + ': Promise mode - Sync code terminated');

}

testPromise();
testPromise();
testPromise();