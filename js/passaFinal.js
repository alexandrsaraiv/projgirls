const btFim = document.getElementById('btFim');

var score1;
var score2;

btFim.addEventListener('click', ()=>{
    //Pegando os nomes dos dois players
    score1 = parseInt(document.getElementById('score1').innerHTML);
    score2 = parseInt(document.getElementById('score2').innerHTML);
    //Salvando o nome dos dois players no browser
    localStorage.setItem('score1',score1);
    localStorage.setItem('score2',score2);
})
