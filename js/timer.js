var countDownDate = new Date("Jul 14, 2022 00:00:00").getTime();


var x = setInterval(function(){
    
    var now  = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24) )/ (1000 * 60 * 60));
    var mints = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((distance % (1000 * 60)) / (1000));
   
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + mints + "m " + secs + "s";

    if(distance < 0){
        clearInterval();
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);