// Gera número aleatório entre 1 e 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Atualiza a imagem do dado
  function updateDice(numero, seletor) {
    var img = document.querySelector(seletor);
    img.src = "./images/dice" + numero + ".png";
    img.classList.remove("rolling");
    void img.offsetWidth; // força reflow
    img.classList.add("rolling");
  }
  
  // Atualiza o título baseado nos resultados
  function updateTitle(n1, n2) {
    var titulo = document.querySelector("h1");
  
    if (n1 > n2) {
      titulo.textContent = "🎲 Player 1 Wins";
    } else if (n1 < n2) {
      titulo.textContent = "Player 2 Wins 🎲";
    } else {
      titulo.textContent = "🫟 Draw 🫟";
    }
  }
  
  // Fluxo principal
  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");
  
  // anima os dois
  img1.classList.add("rolling");
  img2.classList.add("rolling");
  
  // sincronização única
  setTimeout(function() {
  
    var numero1 = rollDice();
    var numero2 = rollDice();
  
    updateDice(numero1, ".img1");
    updateDice(numero2, ".img2");
  
    updateTitle(numero1, numero2);
  
  }, 500);

  document.querySelector("button").addEventListener("click", function(){
    setTimeout(function() {
    var numero1 = rollDice();
    var numero2 = rollDice();
  
    updateDice(numero1, ".img1");
    updateDice(numero2, ".img2");
  
    updateTitle(numero1, numero2);})
  })