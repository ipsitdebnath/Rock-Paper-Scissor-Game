let playerMove = prompt("Enter Rock , Paper, Scissor");
playerMove = playerMove.toLowerCase();
playerMove = playerMove[0].toUpperCase() + playerMove.slice(1);
let random = Math.random()
let comp;
if (random <= 0.3) {
    comp = "Rock";
}
else if (random > 0.3 && random <= 0.6) {
    comp = "Paper";
}
else {
    comp = "Scissor";
}

let alerts;
if (playerMove === comp){
alerts="Tied";
alert(`Tied, Computer chose ${comp}`)}
else if (playerMove==="Rock" && comp==="Paper"){
alerts="Computer Won";
alert(`Computer Won, Computer chose ${comp}`)
}
else if (playerMove==="Rock" && comp==="Scissor"){
alerts="You Won !!!!";
alert(`You Won !!!! Computer chose ${comp}`)
}
else if (playerMove==="Paper" && comp=="Scissor"){
alerts="Computer Won";
alert(`Computer Won, Computer chose ${comp}`)
}
else if (playerMove==="Paper" && comp==="Rock"){
alerts="You Won !!!!";
alert(`You Won !!!! Computer chose ${comp}`)
}
else if (playerMove==="Scissor" && comp==="Paper"){
alerts="You Won !!!!";
alert(`You Won !!!! Computer chose ${comp}`)
}
else if (playerMove ==="Scissor" && comp==="Rock"){
alerts="Computer Won";
alert(`Computer Won, Computer chose ${comp}`)
}

let player=document.getElementById("player");
let computer=document.getElementById("computer");
player.innerText="Player : "+playerMove;
computer.innerText="Computer : "+comp;
let result=document.getElementById("result");
result.innerText=alerts+"\nReload the page to play more..";