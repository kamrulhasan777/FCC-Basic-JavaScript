// Notifications API //

// Simple way to create Notification

/*Notification.requestPermission();

new Notification("Subscribe! please");*/

function notifyMe(){
    if(!("Notification" in window)){
        alert("This browser does not support system notifications")
    }
    else if(Notification.permission === "granted"){
        notify();
    }
    else if(Notification.permission !== 'denied'){
        Notification.requestPermission(function(permission){
            if (permission === "granted"){
                notify()
            }
        });
    }
    function notify(){
        var notification  = new Notification('TITLE OF NOTIFICATION', {
            icon: "Mahade",
            body: "Programming"
        });
        
        Notification.onclick = function(){
            window.open("http://carnes.cc");
        };
        setTimeout(notification.close.bind(notification),3000);
    }
};

notifyMe();