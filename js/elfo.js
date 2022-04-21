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
  
  function elfo1() {
      let pergunta = "1) acha que os lacaios estavam mentindo\n2) como não tem nada para fazer, decide descobrir se é verdade";
      let wins = "../elfo/elfo2.html";
      let gameOver = "../elfo/elfoGameOver1.html";
      escolha(pergunta, wins, gameOver);
    }
    
    function elfo2() {
      let pergunta = "1) Segue pelas árvores, onde tem total domínio\n2) segue pelo rio, onde avista um barco"
      let wins = "../elfo/elfo3.html";
      let gameOver = "../elfo/elfoGameOver2.html";
      escolha(pergunta, wins, gameOver);
    }
    
    function elfo3() {
      let pergunta = "1) Ela decide seguir pela esquerda\n2) Ele decide ir pela direita"
      let wins = "../elfo/elfo4.html";
      let gameOver = "../elfo/elfoGameOver3.html";
      escolha(pergunta, wins, gameOver);
    }
  
    function elfo4() {
      let pergunta = "1) desafiar o monstro usando seu arco e flecha\n2) esperar para ver se o monstro dormia"
      let wins = "../elfo/elfoWins.html";
      let gameOver = "../elfo/elfoGameOver4.html";
      escolha(pergunta, wins, gameOver);
    }

    function reiniciar(){
      window.location.href = "../../index.html"
    }