alert("Escreva um numerador e um denominador");

let numerador= prompt("Digite o numerador");

let denominador= prompt("Digite o denominador");

let resultado= numerador / denominador;

if(denominador==0)
alert(`${numerador} não é possivel dividir por ${denominador}`);
else if(denominador>0)
alert(`${numerador} dividido por ${denominador} é= ${resultado}`);