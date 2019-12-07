//Setando o nome dos players nas divs
document.getElementById("name1").innerHTML = localStorage.getItem("player1");
document.getElementById("name2").innerHTML = localStorage.getItem("player2");


//AUMENTA PONTUAÇÃO DO JOGADOR 1
function play1_score(){
	var score1 = parseInt(document.getElementById('score1').innerText)+100;
	parseInt(document.getElementById('score1').innerHTML = score1);
}

//AUMENTA PONTUAÇÃO DO JOGADOR 2
function play2_score(){
	var score2 = parseInt(document.getElementById('score2').innerText)+100;
	parseInt(document.getElementById('score2').innerHTML = score2);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////ATIVIDADE 1////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//ATIVIDADE 1 TELA DE ACERTO
function acertou(){
	document.getElementById('maca').style.display="none";
	document.getElementById('check').style.display="table-cell";
}
//ATIVIDADE 1 TELA DE ERRO
function errou(){
	document.getElementById('maca').style.display="none";
	document.getElementById('wrong').style.display="table-cell";
}
//ATIVIDADE 1 RESETAR TELA
function reset(){
	document.getElementById('wrong').style.display="none";
	document.getElementById('check').style.display="none";
	document.getElementById('maca').style.display="table-cell";
}
//ATIVIDADE 1 TELA DE FIM DE JOGO
function fimAtv1(){
	document.getElementById('wrong').style.display="none";
	document.getElementById('check').style.display="none";
	document.getElementById('divFinal').style5.display="table-cell";
}
/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////FIM DA ATIVIDADE 1////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////ATIVIDADE 2///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//AUDIO ATIVIDADE 2
function audio(){
	const audio = document.querySelector('audio');
	audio.play();
}
//VERIFICA SE O DIGITADO É A PALAVRA CORRETA
function verificaAtv2(){
	digitado = document.getElementById("resp-atv2").value;
	if(digitado.toLowerCase() == 'palavra'){
		if(vez==1){
			play1_score();
		}
		if(vez==2){
			play2_score();
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////FIM DA ATIVIDADE 2////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////




