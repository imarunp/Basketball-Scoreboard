let homeScore=0;
let guestScore=0;



function inrHomeOne(){
    homeScore=homeScore+1;
    document.getElementById("scorehome").innerText=homeScore;
}
function inrHomeTwo(){
    homeScore=homeScore+2;
    document.getElementById("scorehome").innerText=homeScore;
}
function inrHomeThree(){
    homeScore=homeScore+3;
    document.getElementById("scorehome").innerText=homeScore;
}

function inrGuestOne(){
    guestScore=guestScore+1;
    document.getElementById("scoreguest").innerText=guestScore;
}
function inrGuestTwo(){
    guestScore=guestScore+2;
    document.getElementById("scoreguest").innerText=guestScore;
}
function inrGuestThree(){
    guestScore=guestScore+3;
    document.getElementById("scoreguest").innerText=guestScore;
}

function reset(){
    homeScore=0;
    guestScore=0;
    document.getElementById("scorehome").innerHTML=homeScore;
    document.getElementById("scoreguest").innerHTML=guestScore;
}
