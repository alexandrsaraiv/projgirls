//Setando o nome dos players nas divs
document.getElementById("name1").innerHTML = localStorage.getItem("player1");
document.getElementById("name2").innerHTML = localStorage.getItem("player2");

function acertou(){
	var m = document.getElementsById("atv1"); 
	c = m.style;
	c.color = "#c00";
	c.backgroundColor = "#eee";
	c.width = "200px";
	c.height = "100px";
	c.borderColor = "#f00";

}

function errou(){
}

