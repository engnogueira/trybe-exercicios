/*
3 - Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

const botao = document.getElementById("cliqueBotao");
const contador = document.getElementById("contador");
let clickCount = 0;

botao.addEventListener("click", () => {
  clickCount += 1;
  contador.innerHTML = clickCount;
});
