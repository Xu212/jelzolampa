window.addEventListener("load", init);
var szin;
var i = 0;
function init(){
    document.getElementById("bal").innerHTML="kocsi";
    setInterval(menet,6000)
}
function piros(){
    document.getElementById("piros").style.backgroundColor="red";
}
function sarga(){
    document.getElementById("sarga").style.backgroundColor="yellow";
}
function clear(){
    document.getElementById("piros").style.backgroundColor="";
    document.getElementById("sarga").style.backgroundColor="";
    document.getElementById("zold").style.backgroundColor="";
}
function zold(){
    document.getElementById("zold").style.backgroundColor="green";
}
function jobbkocsi(){
    if(i%2===0){
        document.getElementById("bal").innerHTML=""
        document.getElementById("jobb").innerHTML="kocsi"
    }
    else{
        document.getElementById("jobb").innerHTML=""
        document.getElementById("bal").innerHTML="kocsi"
    }
    i++;
}
function menet(){
    setTimeout(piros, 1000)
    setTimeout(sarga, 3000);
    setTimeout(clear, 4000);
    setTimeout(zold, 4000);
    setTimeout(clear, 5000);
    setTimeout(sarga, 5000);
    setTimeout(clear, 6000);
    setTimeout(jobbkocsi, 4500);
}