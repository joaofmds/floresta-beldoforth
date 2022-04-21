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
  
    function hobbit1() {
      let pergunta = "1) ele pega o bilhete, o rasga e joga no lixo\n2) ele analisa o bilhete e decide fazer as malas e parte para a aventura";
      let wins = "../hobbit/hobbit2.html";
      let gameOver = "../hobbit/hobbitGameOver1.html";
      escolha(pergunta, wins, gameOver);
    }

    function hobbit2() {
      let pergunta = "1) permanece no acampamento com a fogueira\n2) sai em busca de alimento";
      let wins = "../hobbit/hobbit3.html";
      let gameOver = "../hobbit/hobbitGameOver2.html";
      escolha(pergunta, wins, gameOver);
    }

    function hobbit3() {
      let pergunta = "1) um caminho livre e bem demarcado\n2) um caminho escuro, com espinhos e sinuoso";
      let wins = "../hobbit/hobbit4.html";
      let gameOver = "../hobbit/hobbitGameOver3.html";
      escolha(pergunta, wins, gameOver);
    }

    function hobbit4() {
      let pergunta = "1) foge e volta para o conforto da sua casa\n2) procura uma maneira de distrair o Golem e entra na caverna";
      let wins = "../hobbit/hobbitWins.html";
      let gameOver = "../hobbit/hobbitGameOver4.html";
      escolha(pergunta, wins, gameOver);
    }

    function reiniciar(){
      window.location.href = "../../index.html"
    }
    
    