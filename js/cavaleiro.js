function escolha(pergunta, wins, gameOver) {
  while (true) {
      let resposta = prompt(pergunta);

      if (resposta == 1) {
          window.location.href = wins;
          break;
      } else if (resposta == 2) {
          window.location.href = gameOver;
          break;
      } else {
          alert("Digite 1 ou 2");
      }
  }
}

function cavaleiro1() {
    let pergunta = "1 – Pegar a esquerda\n2 – Pegar a direita";
    let wins = "../cavaleiro/cavaleiro2.html";
    let gameOver = "../cavaleiro/cavaleiroGameOver1.html";
    escolha(pergunta, wins, gameOver);
  }
  
  function cavaleiro2() {
    let pergunta = "1 – Ajudar o amigo do hobbit\n2 – Ignorar o empréstimo do álcool e seguir seu caminho"
    let wins = "../cavaleiro/cavaleiro3.html";
    let gameOver = "../cavaleiro/cavaleiroGameOver2.html";
    escolha(pergunta, wins, gameOver);
  }
  
  function cavaleiro3() {
    let pergunta = "1 – Interpretar a dica do ferido hobbit como a necessidade de acender uma tocha\n2 – Seguir seus instintos e encarar a caverna em sua forma natural"
    let wins = "../cavaleiro/cavaleiro4.html";
    let gameOver = "../cavaleiro/cavaleiroGameOver3.html";
    escolha(pergunta, wins, gameOver);
  }

  function cavaleiro4() {
    let pergunta = "1 - Tentar subir a corda\n2 - Descer a ribanceira em direção ao clarão"
    let wins = "../cavaleiro/cavaleiroWins.html";
    let gameOver = "../cavaleiro/cavaleiroGameOver4.html";
    escolha(pergunta, wins, gameOver);
  }

  function reiniciar(){
    window.location.href = "../../index.html"
  }