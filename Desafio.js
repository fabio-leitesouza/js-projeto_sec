//01

const anoAtual = 2025;
let nomeUsuario = prompt("Digite seu nome completo:");

let idadeUsuario = parseInt(prompt("Digite sua idade"));

let anoNascimento = anoAtual - idadeUsuario;
console.log(anoNascimento);

console.log(`meu nome é ${nomeUsuario}, tenho ${idadeUsuario}, e nasci em ${anoNascimento}`);


//2
let numero = parseInt(prompt("Digite um número inteiro"));
if (numero < 0) {
    console.log("negativo")
} else if (numero === 0) {
    console.log("Zero")
} else {
    console.log("Positivo")
}

if (numero % 2 === 0) {
    alert("O número é par")
} else {
    alert("O número é impar")
}

if (numero % 3 === 0 && number % 5 === 0) {
    console.log("O número é divisível por 3 e 5");
} else {
    console.log("O número não é divisível por 3 e nem 5")
}