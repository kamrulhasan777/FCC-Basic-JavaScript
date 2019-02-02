/* While & Do while Loop */

var n = 0;

while (n < 5){
    n++;

    if (n==3) continue;
    console.log("n = " + n);
}

var i = 0;

do{
    i++;
    console.log("i = " + i);
} while (i < 5);
