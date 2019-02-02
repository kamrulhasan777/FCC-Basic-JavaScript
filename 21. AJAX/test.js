// AJAX = Asynchronous JavaScript And XML

function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        };
    };
    xhttp.open("GET",
    "https://crossorigin.me/http://carnes.cc/code/ajax_example.txt", true);
    xhttp.send();

};