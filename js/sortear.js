const menorValor = 1;
const maiorValor = 100;
console.log("Chamada do js");
const numeroSecreto = gerarNumero();
function gerarNumero(){
    return parseInt((Math.random() * (maiorValor + 1)));
}

console.log("Numero Gerado:", numeroSecreto);

const box = document.querySelector(".box");
box.textContent = numeroSecreto;
const elementoMaiorValor = document.getElementById("maior-valor");
const elementoMenorValor = document.getElementById("menor-valor");
elementoMaiorValor.textContent = maiorValor;
elementoMenorValor.innerHTML = menorValor;