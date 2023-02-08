function verificaSeChuteValido(chute) {
    const numero = +chute;

    if (chuteInvalida(numero)){
        elementoChute.innerHTML += '<div>Valor invalido !!</div>';
        return;
    }
    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor INvalido !!</div>';
        return ;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O numero secreto era: ${numeroSecreto}</h3>
            <button id="Jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML += "O numero secreto é menor";
    }else {
        elementoChute.innerHTML += "O numero secreto é maior";
    }
}

function chuteInvalida(numero) {
    return Number.isNaN(numero);
}

function numeroInvalido(numero){
    return numero >maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})