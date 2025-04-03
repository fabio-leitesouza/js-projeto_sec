exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10) + 1;
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
let tentativas = 3;


function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if(tentativas === 0) {
        exibirTextoNaTela('h1', 'Suas tentativas acabaram!');
        exibirTextoNaTela('p', 'Já era! O número secreto era ' + numeroSecreto);
    } else {
        tentativas--;
        let palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas';
        if(chute === numeroSecreto) {
            exibirTextoNaTela('h1', `Parabéns! Você acertou! O número secreto é ${numeroSecreto}.`);
        } else if(chute > numeroSecreto) {
            exibirTextoNaTela('p', `Errou! O número secreto é menor. Você ainda tem ${tentativas} ${palavraTentativa}.`);
        } else {
            exibirTextoNaTela('p', `Errou! O número secreto é maior. Você ainda tem ${tentativas} ${palavraTentativa}.`);
        }
    }
}
