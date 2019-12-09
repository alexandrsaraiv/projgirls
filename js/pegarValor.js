document.getElementById("score1Fim").innerHTML = localStorage.getItem("score1fim");
document.getElementById("score2Fim").innerHTML = localStorage.getItem("score2fim");


const btplay = document.getElementById('btPlay');

var nome1,ponto1;
var nome2,ponto2;

btplay.addEventListener('click', ()=>{
    //Pegando os nomes dos dois players
    nome1 = document.getElementById("jg1").value;
    nome2 = document.getElementById("jg2").value;
    //Salvando o nome dos dois players no browser
    localStorage.setItem("player1",nome1);
    localStorage.setItem("player2",nome2);
})


