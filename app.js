
let tentativas;
let numeroMaximo = 10;
let numeroSecreto;
let listaDeNumerosSorteados = []

function main() {
    
    numeroSecreto = gerarNumeroAleatorio();

    tentativas = 0;

    exibirTextoNaTela('h1', "Jogo do número secreto");
    exibirTextoNaTela('p', `Tente advinhar o número que está entre 1 e ${numeroMaximo}`);
}

function exibirTextoNaTela(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random()*numeroMaximo + 1);

    if(listaDeNumerosSorteados.length == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    }

    listaDeNumerosSorteados.push(numeroSorteado);

    return numeroSorteado;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    limparCampo('input')
    tentativas++;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', "Acertou!");
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ` + (tentativas == 1? "tentativa" : "tentativas") + "!");

        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        exibirTextoNaTela('p', "O número secreto é " + (chute < numeroSecreto? "maior" : "menor") + ` que ${chute}!`);
    }
}

function reiniciarJogo() {
    main();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo(campo) {
    document.querySelector(campo).value = "";
}


main();