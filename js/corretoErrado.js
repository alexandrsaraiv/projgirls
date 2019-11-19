//Setando o nome dos players nas divs
document.getElementById("name1").innerHTML = localStorage.getItem("player1");
document.getElementById("name2").innerHTML = localStorage.getItem("player2");

function acertou(){
	
	//div da maça
	document.getElementById('maca').style.display="none";
	//div do acerto
	document.getElementById('check').style.display="block";

}

function errou(){
}

