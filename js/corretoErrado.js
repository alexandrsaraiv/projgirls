//Setando o nome dos players nas divs
document.getElementById("name1").innerHTML = localStorage.getItem("player1");
document.getElementById("name2").innerHTML = localStorage.getItem("player2");

function play1_score(){
	var score1 = parseInt(document.getElementById('score1').innerText)+100;
	parseInt(document.getElementById('score1').innerHTML = score1);
}

function play2_score(){
	var score2 = parseInt(document.getElementById('score2').innerText)+100;
	parseInt(document.getElementById('score2').innerHTML = score2);
}

function acertou(){

	//div da ma�a
	document.getElementById('maca').style.display="none";
	//div do acerto
	document.getElementById('check').style.display="table-cell";

}


function errou(){

	document.getElementById('maca').style.display="none";
	document.getElementById('wrong').style.display="table-cell";
}

function reset(){

	document.getElementById('wrong').style.display="none";
	document.getElementById('check').style.display="none";
	document.getElementById('maca').style.display="table-cell";
}

function fimAtv1(){
	document.getElementById('wrong').style.display="none";
	document.getElementById('check').style.display="none";
	document.getElementById('divFinal').style.display="table-cell";
}

