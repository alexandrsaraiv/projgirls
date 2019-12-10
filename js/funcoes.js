//Setando o nome dos players nas divs
document.getElementById("name1").innerHTML = localStorage.getItem("player1");
document.getElementById("name2").innerHTML = localStorage.getItem("player2");

var vez=0,vez_atv3=0,vez_atv4=0,vez_atv5=0,score1,score2;
var final1, final1;
//AUMENTA PONTUAÇÃO DO JOGADOR 1
function play1_score(){
	score1 = parseInt(document.getElementById('score1').innerText)+100;
	parseInt(document.getElementById('score1').innerHTML = score1);
}

//AUMENTA PONTUAÇÃO DO JOGADOR 2
function play2_score(){
	score2 = parseInt(document.getElementById('score2').innerText)+100;
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
	document.getElementById('divFinal').style.display="table-cell";
}
/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////FIM DA ATIVIDADE 1////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////ATIVIDADE 2///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//AUDIO ATIVIDADE 2
function audio(){
	const audio = document.querySelector('#audio2');
	audio.play();
}
function audio2(){
	const audio = document.querySelector('#audio5');
	audio.play();
}
//VERIFICA SE O DIGITADO É A PALAVRA CORRETA
function verificaAtv2(){
	vez++;
	digitado = document.getElementById("resp-atv2").value;
	if(digitado.toLowerCase() == 'atrapalhado'){
		if(vez==1){
			play1_score();
			acertouAtv2();
		}
		if(vez==2){
			play2_score();
			acertouAtv2();
			alert('Resposta Correta, Finalizando atividade!');
			fimAtv2();
		}
	}else{
		if(vez==1){
			errouAtv2();
		}
		if(vez==2){
			errouAtv2();
			alert('Resposta errada, Finalizando atividade!');
			fimAtv2();
		}
	}
}

function acertouAtv2(){
	document.getElementById('digitar-palavra').style.display="none";
	document.getElementById('check2').style.display="table-cell";
}

function errouAtv2(){
	document.getElementById('digitar-palavra').style.display="none";
	document.getElementById('wrong2').style.display="table-cell";
}

function reset2(){
	document.getElementById('wrong2').style.display="none";
	document.getElementById('check2').style.display="none";
	document.getElementById('digitar-palavra').style.display="table-cell";
}

function fimAtv2(){
	document.getElementById('wrong2').style.display="none";
	document.getElementById('check2').style.display="none";
	document.getElementById('fimAtv2').style.display="table-cell";
}

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////FIM DA ATIVIDADE 2////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////ATIVIDADE 3///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

function atv3(){

if (window.SpeechRecognition || window.webkitSpeechRecognition) {
				vez_atv3++;
				console.log(vez_atv3);
                // captura a voz
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();
                // inicia reconhecimento
                recognition.start();
                // resultado do reconhecimento
                recognition.addEventListener('result', function(e) {
                    console.log(e);
                    var result = e.results[0][0].transcript;
					console.log(result);
					if(result.toLowerCase() == 'chave'){
						if(vez_atv3==1){
							play1_score();
							acertouAtv3();
						}
						if(vez_atv3==2){
							play2_score();
							acertouAtv3();
							alert('Resposta Correta, Finalizando atividade!');
							fimAtv3();
						}
					}else{
						if(vez_atv3==1){
							errouAtv3();
						}
						if(vez_atv3==2){
							errouAtv3();
							alert('Resposta Errada, Finalizando atividade!');
							fimAtv3();
						}
					}


                }, false);
            } else {
                alert('Este navegador não suporta esta funcionalidade ainda!');
			}
}
function acertouAtv3(){
	document.getElementById('atv3-jogar').style.display="none";
	document.getElementById('check3').style.display="table-cell";
}

function errouAtv3(){
	document.getElementById('atv3-jogar').style.display="none";
	document.getElementById('wrong3').style.display="table-cell";
}

function reset3(){
	document.getElementById('wrong3').style.display="none";
	document.getElementById('check3').style.display="none";
	document.getElementById('atv3-jogar').style.display="table-cell";
}

function fimAtv3(){
	document.getElementById('wrong3').style.display="none";
	document.getElementById('check3').style.display="none";
	document.getElementById('fimAtv3').style.display="table-cell";
}

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////FIM DA ATIVIDADE 3////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////ATIVIDADE 4///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
function atv4(){

	if (window.SpeechRecognition || window.webkitSpeechRecognition) {
					vez_atv4++;
					console.log(vez_atv4);
					var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
					var recognition = new SpeechRecognition();
					recognition.start();
					recognition.addEventListener('result', function(e) {
						console.log(e);
						var result = e.results[0][0].transcript;
						console.log(result);
						if(result.toLowerCase() == 'zero1' || result.toLowerCase() == 'z'){
							if(vez_atv4==1){
								play1_score();
								acertouAtv4();
							}
							if(vez_atv4==2){
								play2_score();
								acertouAtv4();
								alert('Resposta Correta, Finalizando atividade!');
								fimAtv4();
							}
						}else{
							if(vez_atv4==1){
								errouAtv4();
							}
							if(vez_atv4==2){
								errouAtv4();
								alert('Resposta Errada, Finalizando atividade!');
								fimAtv4();
							}
						}
					}, false);
				} else {
					alert('Este navegador não suporta esta funcionalidade ainda!');
				}
	}
	function acertouAtv4(){
		document.getElementById('atv4-jogar').style.display="none";
		document.getElementById('check4').style.display="table-cell";
	}
	
	function errouAtv4(){
		document.getElementById('atv4-jogar').style.display="none";
		document.getElementById('wrong4').style.display="table-cell";
	}
	
	function reset4(){
		document.getElementById('wrong4').style.display="none";
		document.getElementById('check4').style.display="none";
		document.getElementById('atv4-jogar').style.display="table-cell";
	}
	
	function fimAtv4(){
		document.getElementById('wrong4').style.display="none";
		document.getElementById('check4').style.display="none";
		document.getElementById('fimAtv4').style.display="table-cell";
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////FIM DA ATIVIDADE 4////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////ATIVIDADE 5///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
function atv5(){

	if (window.SpeechRecognition || window.webkitSpeechRecognition) {
					vez_atv5++;
					console.log(vez_atv5);
					var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
					var recognition = new SpeechRecognition();
					recognition.start();
					recognition.addEventListener('result', function(e) {
						console.log(e);
						var result = e.results[0][0].transcript;
						console.log(result);
						if(result.toLowerCase() == 'a vida é boa eu vivo à toa onde eu nasci'){
							if(vez_atv5==1){
								play1_score();
								acertouAtv5();
							}
							if(vez_atv5==2){
								play2_score();
								acertouAtv5();
								alert('Resposta Correta, Finalizando atividade!');
								fimAtv5();
							}
						}else{
							if(vez_atv5==1){
								errouAtv5();
							}
							if(vez_atv5==2){
								errouAtv5();
								alert('Resposta Errada, Finalizando atividade!');
								fimAtv5();
							}
						}
					}, false);
				} else {
					alert('Este navegador não suporta esta funcionalidade ainda!');
				}
	}
	function acertouAtv5(){
		document.getElementById('atv5-jogar').style.display="none";
		document.getElementById('check5').style.display="table-cell";
	}
	
	function errouAtv5(){
		document.getElementById('atv5-jogar').style.display="none";
		document.getElementById('wrong5').style.display="table-cell";
	}
	
	function reset5(){
		document.getElementById('wrong5').style.display="none";
		document.getElementById('check5').style.display="none";
		document.getElementById('atv5-jogar').style.display="table-cell";
	}
	
	function fimAtv5(){
		document.getElementById('wrong5').style.display="none";
		document.getElementById('check5').style.display="none";
		document.getElementById('fimAtv5').style.display="table-cell";
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////FIM DA ATIVIDADE 5////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////