
const btplay = document.getElementById('btPlay');

var nome1;
var nome2;

btplay.addEventListener('click', ()=>{
    //Pegando os nomes dos dois players
    nome1 = document.getElementById("jg1").value;
    nome2 = document.getElementById("jg2").value;
    //Salvando o nome dos dois players no browser
    localStorage.setItem("player1",nome1);
    localStorage.setItem("player2",nome2);
})

