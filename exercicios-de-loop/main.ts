//1
// for(let i = 0; i < 41; i++){
//   console.log(i);
// }


// 2
// function leiaNumero(numero: number){
//   let resultado = [];
//   for(let i = 0; i <= numero; i++){
//    resultado[i] = i;
//   }
//   return resultado;
// }

// console.log(leiaNumero(7));


// 3
// function leiaDoisNumeros(m: number, n:number){
//   if(m < n){
//     for(let i = m; i <= n; i++){
//       console.log(i)
//     }
//   }
// }

// console.log(leiaDoisNumeros(5,10));

// //4 
// function leiaDoisNumerosImpares(m: number, n: number) {
//   for (let i = m; i <= n; i++) {
//     if (i % 2 !== 0) {
//       console.log(i)
//     }
//   }
// }

// console.log(leiaDoisNumerosImpares(0, 10));

//5
// function leiaDoisNumerosPares (m: number, n: number) {
//   let contador: number = 0;
//   for (let i = m; i <= n; i++) {
//     if (i % 2 === 0 && i != 0) {
//       console.log(i);
//       contador++;
//     }
//   }
//   return "Total: " + contador;
// }

// console.log(leiaDoisNumerosPares(0, 10));

//6
// function leiaDoisNumerosDiv3 (m: number, n: number) {
//   for (let i = m; i <= n; i++) {
//     if (i % 3 === 0 && i != 0) {
//       console.log(i);

//     }
//   }
// }

// console.log(leiaDoisNumerosDiv3(0, 10));

//7
// function leiaM (m: number, id: number, n: number) {
//   for (let i = 0; i < n; i++) {
//     console.log(m)
//     m += id;
//   }

// }

// console.log(leiaM(6, 3, 4));

// 8
// function MaiorMenor(quant: number, array: number[]) {
//   let maior = array[0];
//   let menor = array[0];
//   for (let i = 0; i < quant; i++) {

//     if (array[i] > maior) {
//       maior = array[i];
//     }
//     else if (array[i] < menor) {
//       menor = array[i];
//     }
//   }
//   console.log(maior, menor);
//   return `Maior: ${maior} Menor: ${menor}`;
// }


// console.log(MaiorMenor(8, [9, 2, 7, 8, 3, 6, 2, 1]));

//9
// function leianumeros (n: number[]){
//   n.sort((a, b) => b - a);
//   for (let i = 0; i < 3; i++){
//     console.log(n[i])
//   }
// }

// console.log(leianumeros([6, 2, 1, 399, 2, 3, 1]))

//10

// function naodeterminada (m: number, n: number){
//   if (m >= n){
//     return;
//   }
//   else {
//     for (let i = m; i <= n; i++){
//       console.log(i, n)
//     }
//   }
// }

// console.log(naodeterminada(10,18));

//11
// function numerosPositivos(array: number[]){
//   let contador: number = 0;
//   for(let i = 0; i < array.length; i++){
//     if(array[i] > 0){
//       contador += 1;
//     }
//     else if(array[i] === -1){
//       return contador;
//     }
//     else {
//       return `Número não aceito!`;
//     }
//   }
// }

// console.log(numerosPositivos([1, -5, 3, -1, 5, 6, 5]));

//12

// function contadorNumPositivos(array: number[]){
//   let soma: number = 0;
//   for(let i = 0; i < array.length; i++){
//     if(array[i] > 0){
//       soma += array[i];
//     }
//     else if(array[i] === -1){
//       return soma;
//     }
//     else {
//       return `Número não aceito!`;
//     }
//   }
// }
// console.log(contadorNumPositivos([1, -5, 10, 20, -1, 30]));

//13

// function numerosParesImpares(array: number[]){
//   let impar: number = 0;
//   let par: number = 0;
//   for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//       par++;
//     }
//     else if (array[i] % 2 !== 0 && array[i] !== -1){
//       impar++;
//     }
//     else if(array[i] === -1){
//       return "Pares: " + par + " Impares: " + impar;
//     }
//     else {
//       return `Número não aceito!`;
//     }
//   }
// }
// console.log(numerosParesImpares([2, 3, 4, 5, 6, -1, 20]));

//14

// function numerosMultiplos(array: number[]){
//   let mult2e5: number = 0;
//   let mult2e3: number = 0;
//   for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0 && array[i] % 3 === 0){
//       mult2e3++;
//     }
//     else if (array[i] % 2 === 0 && array[i] % 5 === 0){
//       mult2e5++;
//     }
//     else if(array[i] === -1){
//       return "Multiplos de 2 e 5: " + mult2e5 + " Multiplos de 2 e 3: " + mult2e3;
//     }
//     else {
//       return `Número não aceito!`;
//     }
//   }
// }
// console.log(numerosMultiplos([20, 12, 40, 30, -1, 100]));

//15

// function leiaArray (array: number[]){
//   let par: number = 0;
//   let impar: number = 0;
//   let medPar: number = 0;
//   let medT: number = 0;
//   let somaPar: number = 0;
//   let somaT: number = 0;
  
//   for (let i = 0; i < array.length; i++){
//     if (array[i] > 0){
//       somaT += array[i];
//       if (array[i] % 2 ===0){
//         par++;
//         somaPar += array[i];
//       }
//       else {
//         impar++;
//       }
//     }
//     else if (array[i] === 0){
//       medPar = somaPar/par;
//       medT = somaT/(array.length - 1);
//       return "Pares: " + par + " Impares: " + impar + " Media de Pares: " + medPar + "Media Total: " + medT;
//     }
//     else{
//       return `Número não aceito`;

//     }
//   }
// }
// console.log(leiaArray([7, 2, 3, 4, 5, 0]));

// 16

// function NotaAluno (notas: any[]){
//   let maiorMedia: number = 0;
//   let nome;
//   for (let i = 0; i < notas.length; i+=2){ 
//     if (parseInt(notas[i]) > maiorMedia){
//       maiorMedia = notas[i];
//       nome = notas[i+1];
//     }
//   }
//   return `Maior média: ${maiorMedia} do aluno(a): ${nome}`;
// }
// console.log(NotaAluno([8, 'Jorge', 2, 'Pedro', 0, 'Julia', 10, 'Marina']));

//17

// function alunonota (alunos: any[]){
//   let NumAlunos: number = 0;
//   let todasNotas = [];
//   let c = 0;
//    for (let i = 0; i < alunos.length; i++){ 
//       if (typeof alunos[i] === "number"){
//         NumAlunos++;
//         todasNotas[c] = alunos[i];
//          c++;
//       }
//      else if (alunos[i] === 'fim'){
//        return "Todas as médias: " + todasNotas + " Quantidade de alunos: " + NumAlunos;
//      }
//    }
// }[]
// console.log('aaaaaaaa');
// console.log(alunonota(['Jose', 5, 'Pedro', 7, 'Julia', 8, 'fim']));

//18
//1pol = 2.54cm
//1 a 20

// function conversao(): number[] {
//   let convertidos = [];
//   for (let i = 1; i <= 20; i++){
//     convertidos [i-1] = i * 2.54;
//   }
//   return convertidos;
// }

// console.log(conversao());

//19

// function tabuada (numero: number): number[]{
//   let tabu = [];
//   for (let i = 0; i <= 10; i++){
//     tabu[i] = i*numero;
//   }
//   return tabu;
// }


// console.log(tabuada(5));

//20
// function raizQuadrada (numeros: number[]){
//   let contador: number = 0;
//   for(let i = 0; i < numeros.length; i++){
//     let resultado = Math.sqrt(numeros[i]);
//     if(resultado % 1 === 0 && resultado !== 0){
//       contador++;
//     }
//     else if (numeros[i] === 0){
//       return contador;
//     } 
//   }
// }

// console.log(raizQuadrada([4, 9, 144, 34, 0, 12, 100]));

//21 
// function primo (numero: number):string{
//   for (let i = 2; i < numero; i++){
//     if (numero % i === 0){
//       return "Não é primo!!";
//     }
//   }
//   return "É primo!!";
// }

// console.log(primo(300));
// console.log(primo(21));

//22
// function subdiv(n1: number, n2: number):number {
//   let contador: number = 0;
//   while (n1 > 0) {
//     n1 -= n2;
//     contador++;
//   }
//   return contador;
// }

// console.log(subdiv(20, 5));

//23

// function raizQuadrada(numero:number):number{
//   let contador: number = 0;
//   for(let i=1; i <= numero; i+=2){
//     numero -= i;
//     contador++;
//   }
//   return contador;
// }

// console.log(raizQuadrada(49));

//24

// function contaA (A: number[]):string{
//   let contaNeg: number = 0;
//   for (let i=0; i < A.length; i++){
//     if (A[i] < 0){
//       contaNeg += 1;
//     }
//   }
// return contaNeg + " valores são negativos";
// }


// console.log(contaA([1, 2, -3, -4, 5]));

//25
// 26,90/h
//homens tem desconto de 10%
//mulheres desconto de 6%
//ponto de parada código de usuário -11
// salario bruto sem desconto
// salario liquido com desconto

// function mediaSalario (funcionarios: any[]){
//   let mediaM: number = 0;
//   let mediaF: number = 0;
//   let contM: number = 0;
//   let contF: number = 0;
//   let salarioBM: number = 0;
//   let salarioBF: number = 0;
//   let salarioLM: number = 0;
//   let salarioLF: number = 0;

//   for (let i = 0; i < funcionarios.length; i++){
//     if (funcionarios[i] === -11){
//     return "Media F: " + (mediaF/contF) + " Media M: "+(mediaM/contM);
//     }
//     else if (funcionarios[i] === 'M'){
//       contM += 1;
//       salarioBM = (26.90 * (parseInt(funcionarios[i+1])));
//       let descontoM = (salarioBM * 0.1);
//       salarioLM = (salarioBM - descontoM);
//       mediaM += salarioLM;
//     }
//     else if (funcionarios[i] === 'F'){
//       contF += 1;
//       salarioBF = (26.90 * (parseInt(funcionarios[i+1])));
//       let descontoF = (salarioBM * 0.06);
//       salarioLF = salarioBF - descontoF;
//       mediaF += salarioLF;
//     }
//   }
// }

// console.log(mediaSalario([1, 'M', 40, 2, 'F', 36, 3, 'F', 28, 4, 'M', 20, -11]));

//26

// function pesquisaprefeitura(dados: number[]) {
//   let contSalario: number = 0;
//   let contFilhos: number = 0;
//   let contador: number = 0;
//   let medSalario: number = 0;
//   let medFilhos: number = 0;
//   let maiorSalario: number = 0;
//   let contMenoscem: number = 0;
//   let percSalario: number = 0;

//   for (let i = 0; i < dados.length; i += 2) {

//     if (dados[i] < 0) {
//       medFilhos = contFilhos / contador;
//       medSalario = contSalario / contador;
//       percSalario = (contMenoscem / contador) * 100;
//       return "Média do Salário: " + medSalario + " Média de Filhos: " + medFilhos + " Maior Salário: " + maiorSalario + " Percentual de pessoas com salário até R$ 100: " + percSalario;
//     }
//     else {
//       contador += 1;
//       contSalario += dados[i];
//       contFilhos += dados[i + 1];
//       if (dados[i] > maiorSalario) {
//         maiorSalario = dados[i];
//         if(dados[i] <= 100){
//           contMenoscem++;
//         }
//       }
//       else if (dados[i] <= 100) {
//         contMenoscem++;
//       }
//     }
//   }
// }

// console.log('aaaaaaa');
// console.log(pesquisaprefeitura([90, 1, 40, 3, 560, 2, -4]));

//27

// function EuTentei (): number{
//   let altChico = 1.5;
//   let altZe = 1.1;
//   let contador = 0;
//   for (let i = 0; altZe <= altChico; i++){
//     altChico += 0.02;
//     altZe += 0.03;
//     contador++;
//     console.log("Chico: " + altChico);
//     console.log("zé: " +altZe);
//   }
//   return contador;
// }

// console.log(EuTentei());