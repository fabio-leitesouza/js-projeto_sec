//Exercício 3: Gerador de Sequências e Verificador de Números
//Crie um programa em JavaScript que combine loops, condicionais e funções para gerar sequências e verificar propriedades de números.

//1 - Crie uma função gerarNumerosPares(limite) que receba um número limite como parâmetro. Esta função deve usar um loop for para gerar e retornar um array contendo todos os números pares de 0 até o limite (inclusive). Exiba o resultado da chamada da função com um limite de 20.

function gerarNumerosPares(limite) {
    const numerosPares = [];
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

console.log(gerarNumerosPares(20));

//2 - Crie uma função verificarPrimo(numero) que receba um número inteiro como parâmetro e retorne true se o número for primo, e false caso contrário. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

const verificarPrimo = (numero) => {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// 4 - Peça ao usuário para digitar um número inteiro.

let numeroUsuario = parseInt(prompt("Digite um número inteiro:"));

// 5 - Utilize a função verificarPrimo() para determinar se o número digitado pelo usuário é primo. Exiba uma mensagem informando se o número é primo ou não.

if (verificarPrimo(numeroUsuario)) {
    console.log(`${numeroUsuario} é um número primo.`);
} else {
    console.log(`${numeroUsuario} não é um número primo.`);
}

// 6 - Crie um loop while que solicite ao usuário um número diferente de zero. O loop deve continuar pedindo um número até que o usuário digite 0. Para cada número diferente de 0 digitado, exiba se ele é "Positivo", "Negativo" ou "Zero".

let numero = parseInt(prompt("Digite um número diferente de zero (0 para sair):"));

while (numero !== 0) {
    if (numero > 0) {
        console.log(`${numero} é Positivo.`);
    } else if (numero < 0) {
        console.log(`${numero} é Negativo.`);
    }
    numero = parseInt(prompt("Digite um número diferente de zero (0 para sair):"));
}

