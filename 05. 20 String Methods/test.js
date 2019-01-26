/* 20 String Methods */

var stringOne = "learning JavaScript from Free Code CAMP.";
var stringTwo = " Beau is a good teacher for JavaScript. He is too good";

//01 charAt()
console.log(stringOne.charAt(1));

//02 charCodeAt()
console.log(stringOne.charCodeAt(1));

//03 concat()
console.log(stringOne.concat(stringTwo));

//04 endsWith()
 //"method is not working"

//05 fromCharCode()
console.log(String.fromCharCode(114));

//06 includes()
console.log(stringTwo.includes("Beau"));

//07 indexOf()
console.log(stringTwo.indexOf("good"));

//08 lastIndexOf()
console.log(stringTwo.lastIndexOf("good"));

//09 match()
console.log(stringTwo.match(/good/g));

//10 repeat()
console.log(stringOne.repeat(2));

//11 replace()
console.log(stringTwo.replace(/good/g, "GOOD"));

//12 search()
console.log(stringOne.search("Free"));

//13 slice()
console.log(stringTwo.slice(2, 4));

//14 split()
console.log(stringOne.split(" "));

//15 startsWith()
console.log(stringOne.startsWith("learning"));

//16 substr()
console.log(stringOne.substr(2, 4));

//17 substring()
console.log(stringOne.substring(2, 4));

//18 toLowerCase()
console.log(stringOne.toLowerCase());

//19 toUpperCase()
console.log(stringOne.toUpperCase());

//20 trim()
console.log(stringTwo.trim());