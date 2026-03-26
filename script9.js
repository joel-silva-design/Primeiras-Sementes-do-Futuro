let numero = 30;
let resto = (numero % 2);

if (resto === 0) {
  console.log("O número é par");
} else if (resto === 1) {
  console.log("O número é impar");
}

const botao = document.querySelector('.cartao__botao');
const cartao = document.querySelector('.cartao');
botao.addEventListener('click', () => {
cartao.classList.toggle('cartao--escuro');
});