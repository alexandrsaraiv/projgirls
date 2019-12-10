document.getElementById("score1Fim").innerHTML = localStorage.getItem("score1");
document.getElementById("score2Fim").innerHTML = localStorage.getItem("score2");

var score1 = parseInt(document.getElementById('score1Fim').innerHTML);
var score2 = parseInt(document.getElementById('score2Fim').innerHTML);

//player 1 ganhou
if(score1>score2){
    document.getElementById('pley2').style.display="none";
    document.getElementById('score1Fim').style.color="#40C057";
}
//player 2 ganhou
if(score2>score1){
    document.getElementById('pley1').style.display="none";
    document.getElementById('score2Fim').style.color="#40C057";
}
//empate
if(score1==score2){
    document.getElementById('score1Fim').style.color="#40C057";
    document.getElementById('score2Fim').style.color="#40C057";
}