let altura = 1.65;
let peso = 75;

let imc = (peso / altura**2);

if (imc > 0 && imc < 18.5){
  console.log("Abaixo do Peso");
} else if (imc >= 18.5 && imc <= 24.9){
  console.log("Peso Normal");
} else if (imc >= 25 && imc <= 29.9){
  console.log("Sobrepeso");
} else if (imc >= 30){
  console.log("Obesidade");
}

const botao = document.querySelector('.cartao__botao');
const cartao = document.querySelector('.cartao');
botao.addEventListener('click', () => {
cartao.classList.toggle('cartao--escuro');
});