//Crie um programa em JavaScript que realize as seguintes operações em uma frase fornecida pelo usuário:

//1 - Peça ao usuário que digite uma frase. Armazene essa frase em uma variável.
let frase = prompt("Digite uma frase");

//2 - Peça ao usuário que digite uma palavra para procurar. Armazene essa palavra em outra variável.
let palavra = prompt("Digite uma palavra para procurar na frase")

//3 - Verifique se a frase contém a palavra procurada.
//Se contiver, exiba a mensagem: "A frase contém a palavra '[palavra_procurada]'."
//Caso contrário, exiba a mensagem: "A frase NÃO contém a palavra '[palavra_procurada]'

let verificacao = frase.includes(palavra);
if(verificacao){
    console.log(`A frase contém a palavra '${palavra}'.`);
} else {
    console.log(`A frase NÃO contém a palavra '${palavra}'.`);
}

//4 - Mostre o número total de caracteres na frase.
let totalChar = frase.length;
console.log(`O total de caracteres da frase é ${totalChar}`)

//5 - Converta a frase para letras maiúsculas e exiba-a.
let fraseMaiuscula = frase.toUpperCase();
console.log(`Veja minha frase toda em maiúsculo: ${fraseMaiuscula}`);

//6 - Crie uma função contarVogais(frase) que receba a frase como parâmetro e retorne o número de vogais (a, e, i, o, u, ignorando maiúsculas/minúsculas). Exiba o resultado.

function contarVogais(frase) {
    let vogais = "aeiouAEIOU"
    let contador = 0;
    for(let i = 0; i < frase.length; i++){
        if(vogais.includes(frase[i])){
            contador++;
        }
    }
    return contador;
}

console.log(`A minha frase tem ${contarVogais(frase)} vogais`);
