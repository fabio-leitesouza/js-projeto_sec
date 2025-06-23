//Desenvolva um programa em JavaScript que gerencie notas de alunos.

//1 - Crie um array chamado notas e preencha-o com 5 notas de alunos (números decimais, por exemplo: [7.5, 8.0, 6.2, 9.1, 5.8]).

const notas = [7.5, 8.0, 6.2, 9.1, 5.8];

//2 - Calcule a média das notas utilizando o método reduce() e exiba-a. Arredonde a média para duas casas decimais.

let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

//3 - Filtre as notas que são maiores ou iguais a 7 (notas de aprovação) usando o método filter() e armazene-as em um novo array chamado notasAprovadas. Exiba notasAprovadas.
const notasAprovadas = notas.filter(nota => nota >= 7);
console.log(`Notas aprovadas: ${notasAprovadas}`);