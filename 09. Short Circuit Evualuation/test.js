// Short-Circuit Evaluation //

var text = true;

var isTrue = function(){
    console.log('Text is true.');
};

var isFalse = function(){
    console.log('Text is false.');
};

if(text){
    isTrue();
};
(text && isTrue() );

text = false;

if(text){
    isFalse();
};
(text || isFalse() );

function newFullName(name){
    name = name || "hasan"; 
    console.log("My full name is " + name);
};

newFullName();
newFullName('Mahade Hasan');