
// Escalada da Lógica de Programação com JavaScript

// 1. Introdução à Lógica de Programação
/*
Lógica de programação é a capacidade de raciocinar sobre problemas e criar algoritmos — uma sequência de passos — para resolvê-los. É a base do desenvolvimento de qualquer sistema computacional. Aprender lógica permite pensar de forma estruturada, essencial para a programação.
*/

// 2. Primeiro Código (Olá, Mundo!)
/*
Um primeiro programa simples nos ajuda a garantir que o ambiente de desenvolvimento está funcionando. Mostramos uma mensagem no console para verificar isso.
*/
console.log("Olá, Mundo!");

// 3. Manipulando Dados e Tipos de Dados
/*
As variáveis guardam informações. Cada tipo de informação tem uma forma específica de ser representada:
- String: textos.
- Number: números inteiros ou decimais.
- Boolean: valores lógicos (true ou false).
*/
let nome = "João";
let idade = 25;
let estaEstudando = true;
console.log(nome, idade, estaEstudando);

// Exercício: Crie variáveis para representar o nome, idade e se você gosta de programar. Mostre no console.

// 3.1 var, let e const
/*
JavaScript possui três formas principais de declarar variáveis:
- var: escopo de função. Pode ser redeclarada. Pouco utilizada atualmente.
- let: escopo de bloco. Pode ser reatribuída, mas não redeclarada.
- const: escopo de bloco. Não pode ser reatribuída.
Use 'let' quando o valor puder mudar e 'const' quando ele for fixo.
*/
var linguagem = "JavaScript";
let anoAtual = 2025;
const pais = "Brasil";

if (true) {
  var linguagem = "Python";
  let anoAtual = 2023;
  const pais = "Argentina";
  console.log("Dentro do bloco:", linguagem, anoAtual, pais);
}
console.log("Fora do bloco:", linguagem, anoAtual, pais);

// Exercício: Teste o escopo de var, let e const dentro e fora de blocos de código.

// 4. Operadores
/*
Operadores permitem executar operações entre valores:
- Aritméticos: +, -, *, /, %, **
- Relacionais: >, <, >=, <=, ==, !=, ===
- Lógicos: && (e), || (ou), ! (negação)
*/
let soma = 10 + 5;
let comparacao = 10 > 5;
let logico = true && false;
console.log(soma, comparacao, logico);

// Exercício: Teste combinações de operadores com diferentes valores.

// 5. Estruturas Condicionais
/*
Permitem tomar decisões baseadas em condições.
*/
let nota = 7;
if (nota >= 6) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}

// Exercício: Peça uma idade e verifique se a pessoa é maior de idade.
// Exercício 2: Peça um número e verifique se ele é par ou ímpar.
// Exercício 3: Peça um número e verifique se ele é positivo, negativo ou zero.
// Exercício 4: Peça um número e verifique se ele é múltiplo de 3 ou 5.
// Exercício 5: Peça um número e verifique se ele está entre 1 e 10.  

// 6. Estruturas de Repetição (Loops)
/*
Repetem ações:
- for: quando se sabe o número de repetições.
- while: repete enquanto a condição for verdadeira.
*/
for (let i = 1; i <= 5; i++) {
  console.log("Repetição:", i);
}
// Exercício: Mostre os números de 1 a 5 usando for.
// Exercício 2: Mostre os números de 1 a 5 usando while.
// Exercício 3: Crie um loop que some os números de 1 a 10 e mostre o resultado.
// Exercício 4: Crie um loop que some os números de 1 a 100 e mostre o resultado.
// Exercício 5: Crie um loop que some os números de 1 a 1000 e mostre o resultado.

let contador = 0;
while (contador < 3) {
  console.log("While:", contador);
  contador++;
}


// Exercício: Mostre os números pares de 0 a 10 usando for.
// Exercício 2: Mostre os números ímpares de 0 a 10 usando while.
// Exercício 3: Crie um loop que some os números de 1 a 100 e mostre o resultado.

// 6.1 For com Arrays
/*
Permite percorrer todos os elementos de um array.
*/
let frutas = ["Maçã", "Banana", "Uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}

// Exercício: Crie um array com os dias da semana e use for para imprimir cada dia.

// 7. Funções
/*
Funções são blocos reutilizáveis de código que realizam tarefas específicas.
*/
function saudacao(nome) {
  return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));

// Exercício: Crie uma função que receba dois números e retorne a soma.

function somar(a, b) {
  return a + b;
}

// 7.1 Funções Arrow (Arrow Functions)
/*
Arrow functions são uma forma mais curta de escrever funções anônimas. Elas são úteis em funções simples e em métodos de array.

Sintaxe:
const nomeFuncao = (parametros) => expressão;

Se houver apenas um parâmetro, os parênteses são opcionais.
Se o corpo da função tiver mais de uma linha, usa-se chaves e `return`.
*/
const saudacaoArrow = nome => `Olá, ${nome}!`;
console.log(saudacaoArrow("Lucas"));

const somar = (a, b) => a + b;
console.log("Soma:", somar(3, 4));

const saudacaoCompleta = (nome, hora) => {
  if (hora < 12) {
    return `Bom dia, ${nome}!`;
  } else {
    return `Boa tarde, ${nome}!`;
  }
};
console.log(saudacaoCompleta("Joana", 10));

// Exercício: Crie uma função arrow que receba um número e diga se ele é par ou ímpar.

const parOuImpar = numero => {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

const parOuImpar = numero => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

// Exercício 2: Crie uma função arrow que receba um número e retorne o dobro dele.
// Exercício 3: Crie uma função arrow que receba um número e retorne o quadrado dele.
// Exercício 4: Crie uma função arrow que receba um número e retorne o fatorial dele.
const fatorial = num => {
  if (num === 0 || num === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = num; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
  
}
// Exercício 5: Crie uma função arrow que receba um número e retorne a soma de todos os números de 1 até ele.
const somaTodos = num => {
  resultado = 0
  for(let i = 1; i <= num; i++){
    resultado = resultado + i;
  }
  return resultado;
}
console.log(somaTodos(5));

// Exercício 6: Crie uma função arrow que receba um número e retorne a soma de todos os números pares de 1 até ele.
const somaTodosPares = num => {
  resultado = 0
  for(let i = 1; i <= num; i++){
    if(i % 2 === 0){
      resultado = resultado + i;
    }    
  }
  return resultado;
}
console.log(somaTodosPares(5));

// 8. Estruturas de Dados

// 8.1 Arrays
/*
Arrays são listas ordenadas. Cada item tem um índice.
*/
let cores = ["Azul", "Verde", "Amarelo"];
console.log(cores[1]);

// Exercício: Crie um array de 3 cores favoritas. Mostre a segunda cor.

// 8.2 Objetos
/*
Objetos armazenam dados como pares chave-valor.
*/
let pessoa = { nome: "Ana", idade: 30 };
console.log(pessoa.nome);

// Exercício: Crie um objeto com as propriedades nome, idade e hobby.

// 9. Trabalhando com Strings
/*
Strings têm métodos úteis como:
- .length: tamanho
- .toUpperCase(): maiúsculas
- .includes(): verifica se contém
*/
let frase = "JavaScript é divertido!";
console.log(frase.length);
console.log(frase.toUpperCase());
console.log(frase.includes("divertido"))

// Exercício: Peça uma frase e verifique se ela contém a palavra "JS".

// 10. Módulos e Bibliotecas (ex: Math)
/*
Bibliotecas como Math oferecem utilitários prontos:
- Math.sqrt(): raiz quadrada
- Math.random(): aleatório entre 0 e 1
*/
console.log(Math.sqrt(16));
console.log(Math.random());

// Exercício: Gere um número aleatório de 1 a 100.

// 11. Tratamento de Erros
/*
Permite lidar com erros que podem ocorrer durante a execução.
*/
try {
  let resultado = 10 / 0;
  if (!isFinite(resultado)) throw "Divisão inválida";
} catch (erro) {
  console.log("Erro detectado:", erro);
}

// Exercício: Crie um código que tente dividir um número por outro e trate divisão por zero.

// 12. Introdução à Orientação a Objetos
/*
Permite organizar o código em objetos com propriedades e métodos.
*/
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

let aluno = new Pessoa("Carlos", 20);
console.log(aluno.apresentar());

// Exercício: Crie uma classe "Carro" com propriedades marca e ano. Crie um método que descreve o carro.

// 13. Extras sugeridos:
/*
- JSON: formato de troca de dados.
- Promises e async/await: para ações assíncronas.
*/

// 14. Métodos de Arrays
/*
Permitem transformar ou filtrar valores de arrays:
- map: aplica uma função em cada item e retorna um novo array
- filter: retorna um novo array com os itens que passaram no teste
- reduce: reduz o array a um único valor
*/
const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map(n => n * 2);
console.log("Dobros:", dobro);

const pares = numeros.filter(n => n % 2 === 0);
console.log("Pares:", pares);

const somaTotal = numeros.reduce((acc, n) => acc + n, 0);
console.log("Soma total:", somaTotal);

// Exercício: Crie um array com números e use map para multiplicar por 3, filter para manter apenas os maiores que 10, e reduce para somar tudo.

// 14.1 Desafio: Crie um programa que peça ao usuário seu nome e idade, e mostre uma mensagem personalizada. Depois, crie um array de números e faça operações com map, filter e reduce.

// 14.2 Desafio: Crie um programa que peça ao usuário seu nome e idade, e mostre uma mensagem personalizada. Depois, crie um array de números e faça operações com map, filter e reduce.

// 14.3 Desafio: Crie um programa que peça ao usuário seu nome e idade, e mostre uma mensagem personalizada. Depois, crie um array de números e faça operações com map, filter e reduce.

// 14.4 Desafio: Crie um programa que peça ao usuário seu nome e idade, e mostre uma mensagem personalizada. Depois, crie um array de números e faça operações com map, filter e reduce.

// 14.5 Desafio: Crie um programa que peça ao usuário seu nome e idade, e mostre uma mensagem personalizada. Depois, crie um array de números e faça operações com map, filter e reduce.

// 14.6 Desafio: Crie um programa que peça ao usuário seu nome e idade, e mostre uma mensagem personalizada. Depois, crie um array de números e faça operações com map, filter e reduce.

// 14.7 Desafio: Crie um programa que peça ao usuário seu nome e idade, e mostre uma mensagem personalizada. Depois, crie um array de números e faça operações com map, filter e reduce.

//Atividade Final: Crie um programa que peça ao usuário seu nome e idade, e mostre uma mensagem personalizada. Depois, crie um array de números e faça operações com map, filter e reduce.
