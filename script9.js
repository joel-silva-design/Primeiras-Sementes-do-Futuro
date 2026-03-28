let altura = 0;
let peso = 79;

let imc = (peso / altura**2);

if (imc > 0 && imc < 18.5){
  console.log("Abaixo do Peso");
} else if (imc >= 18.5 && imc <= 24.9){
  console.log("Peso Normal");
} else if (imc >= 25.0 && imc <= 29.9){
  console.log("Sobrepeso");
} else if (imc >= 30.0 && imc <= 34.9){
  console.log("Obesidade Leve");
} else if (imc >= 35.0 && imc <= 39.9){
  console.log("Obesidade Moderada");
} else if (imc >= 40.0 && imc <= 50.0){
  console.log("Obesidade Mórbida");
} else if (imc > 50.0 && imc != 'Infinity') {
  console.log("Super Obesidade");
} else {
  console.log("IMC invalido");
}

let info = `Seu imc é ${imc.toFixed(2)}`;

if (imc > 0 && imc != 'Infinity'){
console.log (info);
} else {
  console.log("Digite valores validos para Altura e Peso"); 
}
const botao = document.querySelector('.cartao__botao');
const cartao = document.querySelector('.cartao');
botao.addEventListener('click', () => {
cartao.classList.toggle('cartao--escuro');
});