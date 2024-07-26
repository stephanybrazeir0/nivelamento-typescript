//1
// function conta10(array: number[]) {
//   let desconta10 = [];
//   let j: number = 0;

//   if (array.length === 10) {
//     for (let i = array.length; i > 0; i--) {
//       desconta10[j] = array[i-1];
//       j++;
//     }
//   } else {
//     return `Array Invalido!`;
//   }
//   return desconta10;
// }
// console.log(conta10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//2
// function algoritmo(array: number[]){
//   let NovoArray = [];
//   for( let i = 0; i < array.length; i++){
//     if (i % 2 === 0){
//       NovoArray[i] = array[i]*2;
//     }
//     else {
//       NovoArray[i] = array[i]*3;
//     }
//   }
//   return NovoArray;
// }

// console.log(algoritmo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));

//3
// function superOito (array: number[]){
//   let positivos= [];
//   let negativos = [];
//   let j: number = 0;
//   let k: number = 0;
//   if (array.length === 8){
//     for( let i = 0; i < array.length; i++){
//        if (array[i] > 0) {
//           positivos[j] = array[i];
//          j++;
//         }
//        else {
//          negativos[k] = array[i];
//          k++;
//        }
//      }
//     return "Positivos: " + positivos + " Negativos: " + negativos;
//   }
//   else {
//     return "Inválido: Insira um Array de até 8 elementos";
//   } 
// }
// console.log(superOito([1,-2,3,-4,5,-6,7,-8, 9, 10, 11]));                  

//4
// function conta30(array: number[]) {
//   let desconta30 = [];
//   let j: number = 0;

//   if (array.length === 30) {
//     for (let i = array.length; i > 0; i--) {
//       desconta30[j] = array[i-1];
//       j++;
//     }
//   } else {
//     return `Array Invalido!`;
//   }
//   return desconta30;
// }
// console.log(conta30([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));

//5
// function intercala (array1: number[], array2: number[]){
//   let j: number = 0;
//   let k: number = 1;
//   let arrayR = [];
//   let tamanho = array1.length + array2.length;
//   for (let i = 0; i < tamanho; i+=2){
//     arrayR[i] = array1[j];
//     arrayR[k] = array2[j];
//     j++;
//     k += 2;
//   }
//   return arrayR;
// }

// console.log(intercala([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20]));

//6
// function contanota (notas: number[], media: number){
//   let novoArray: number[] = []
//   let j: number = 0;
//   let PerCent = (media*0.1);
  
//   for (let i = 0; i < notas.length; i++){
//     if (notas[i] > (media-PerCent) && notas[i] < (media+PerCent)){
//       novoArray[j] = notas[i];
//       j++
//     }
//   }
//   return novoArray;
// }

// console.log(contanota([1,7.1,3,4,5,6,7,8,9,10, 6.9,2,3,4,5,6,7,8,9,6.7,1,2,3,4,5,6,6.4,8,9,10, 1,2,3,4,5,6,7,8,9,10, 1,2,3,4,5,6,7.2,8,9,10], 7))

//7
// function LojinhaChimas (valor: number[], vendas: number[], codigo: string[]){
//   let valorGeral: number = 0;
//   let salario: number = 400;
//   let comissao: number = 0;
//   let maisVendido: number = 0;
//   let codigoMV: string = '';
//   let valorMV: number = 0;
//   let objteste: {
//     codigo: string;
//     vendas: number;
//     valor: number;
//   }[] = []; 
  
//   for (let i = 0; i < codigo.length; i++){
//     objteste.push({
//       codigo: codigo[i],
//       vendas: vendas[i],
//       valor: valor[i]
//     });
    
//     valorGeral += vendas[i]*valor[i];
//     comissao = valorGeral * 0.05;
    
//     if (vendas[i] > maisVendido){
//       maisVendido = vendas[i];
//       valorMV = valor[i];
//       codigoMV = codigo[i];
//     }
//   }

//   return [objteste, 'Valor geral da vendas: ' + valorGeral, 'Comissão: ' + comissao,'Código do mais vendido: ' + codigoMV, "Valor: " + valorMV];
  
// }

// console.log(LojinhaChimas([200, 80, 20, 40, 10, 9, 35, 76, 90, 45],[1, 5, 19, 5, 6, 9, 12, 6, 1, 2],['Combo Chima', 'Cuia', 'Enfeite', 'Bomba', 'Cuia colorida', 'Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5']));


//8
//nome do produto
//custo do produto
//preco de venda do produto
//de 50 produtos

// function produtos(nome: string[], custo: number[], preco: number[]):any{ 
//   let lucro: number[] = [];
//   let lucroTotal: number = 0;
//   let quantMenor10: number = 0;
//   let quantEntre10e30: number = 0;
//   let quantMaior30: number = 0;
  
//   for (let i = 0; i < preco.length; i++){
//     lucro[i] = preco[i] - custo[i];
//     lucroTotal += lucro[i];
//   }
//   for (let j = 0; j < lucro.length; j++){ 
//     if (lucro[j] < (lucroTotal*0.1)){
//       quantMenor10++;
//     } else if(lucro[j] >= (lucroTotal*0.1) && lucro[j] < (lucroTotal*0.3)) {
//       quantEntre10e30++;
//     } else{
//       quantMaior30++;
//     }
//   }
    
//     return "Lucro menor que 10%: " + quantMenor10 + " Lucro entre 10% e 30%: " + quantEntre10e30 + " Lucro maior que 30%: " + quantMaior30;
//   }


// console.log(produtos(['Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10', 'Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10','Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10','Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10','Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10'],[1, 5, 19, 5, 6, 9, 12, 6, 1, 2, 1, 5, 19, 5, 6, 9, 12, 6, 1, 2, 1, 5, 19, 5, 6, 9, 12, 6, 1, 2, 1, 5, 19, 5, 6, 9, 12, 6, 1, 2, 1, 5, 19, 5, 6, 9, 12, 6, 1, 2],[808, 80, 20, 40, 10, 9, 35, 76, 90, 45, 200, 80, 800, 40, 10, 9, 35, 76, 90, 45, 200, 570, 20, 40, 10, 2323, 125, 76, 90, 45, 900, 80, 20, 40, 800, 2000, 35, 1506, 90, 35, 2200, 80, 20, 40, 10, 9, 35, 236, 6000, 0]));

//9
// function concurso (nota: number[], nome: string[]){
// let Resultado: {
//       nome: string;
//       nota: number;
// } [] = []; 
  
//   for (let i = 0; i < nota.length; i++){
//     if (nota[i] >= 70){
//       Resultado.push({
//         nome: nome[i],
//         nota: nota[i]
//       });
//     }
//   }
//    return {Aprovados: Resultado};
// }

// console.log(concurso([10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75],['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10']));

//10
// function supCinquenta (numeros: number[]){
//   let cont50: number = 0;
//   let objeto:{
//     arrayguardar: number;
//     posicoes: number;
//   } [] = []
  
//   for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] > 50){
//       objeto.push({
//         arrayguardar: numeros[i],
//         posicoes: i,
//       });
//       cont50++;
//     }
//   }
//   if (cont50 === 0){
//     return "NÃO EXISTE"
//   } else{
//     return objeto;
//   }
 
// }
// console.log(supCinquenta([10, 20, 30, 40, 50, 190, 80, 30, 40, 70]));

//11 
// corrigir provas de múltipla escolha
// cada prova tem 8 questões
// cada questão vale 1 ponto
// 1º coisa a ser lida é o gabarito
//mostrar o numero e a nota de cada aluno
// function prova (gabarito: string[], matricula: number[], respostas: string[]) {
//   let pontuacao: number = 0;
//   let k: number = 0;
//   let aprovados: number = 0;
//   let percentual: number = 0;
//   let notas: number[] = [];
//   let objeto: {
//     matricula: number;
//     nota: number;
//   }[] = [];
  
//   for(let i = 0; i < matricula.length; i++){
    
//     for(let j = 0; j < gabarito.length; j++){
//         if (respostas[k] === gabarito[j]){
//         pontuacao++;
//       }
//       k++;
//     }    
//     notas[i] = pontuacao;
//     objeto.push ({
//       matricula: matricula[i],
//       nota: notas[i],
//     });
//     if (pontuacao >= 6){
//       aprovados++;
//     }
//     pontuacao = 0;
//   }
//   percentual = (aprovados/matricula.length)*100;
//   return {Resultado: objeto, Aprovados: percentual.toFixed(2) + "%"};
// }


// console.log(prova(['a', 'd', 'c', 'a', 'b', 'b', 'a', 'c'], [111, 222, 333, 444, 555, 666, 777, 888, 999, 100],['a', 'd', 'c', 'a', 'b', 'b', 'b', 'c', 'd', 'd', 'a', 'a', 'c', 'b', 'b', 'c', 'c', 'd', 'c', 'a', 'a', 'b', 'a', 'c', 'a', 'd', 'c', 'a', 'b', 'c', 'a', 'c', 'a', 'd', 'c', 'c', 'b', 'b', 'a', 'c', 'a', 'a', 'c', 'a', 'd', 'b', 'b', 'c', 'a', 'c', 'c', 'a', 'b', 'b', 'a', 'c', 'a', 'd', 'c', 'a', 'b', 'b', 'b', 'c', 'a', 'd', 'c', 'a', 'b', 'b', 'a', 'c', 'a', 'd', 'c', 'a', 'b', 'a', 'a', 'c'] ));

//12
// import promptSync from 'prompt-sync';

// function verificaVetor (vetorInit: number[]){
//   let VerificaVet: string;
//   let contadorS: number = 0;
//   const prompt = promptSync();

//   do {
//      VerificaVet = prompt("Insira um valor para verificar: ");
//      for (let i = 0; i < vetorInit.length; i++){
//       if (parseInt(VerificaVet) === vetorInit[i]){
//         contadorS++;
//       }

//     }
//     if(contadorS > 0){
//        console.log('Exite no vetor');
//        contadorS = 0;
//      } else{
//        console.log('Não existe no vetor');
//      }
//   }
//   while (parseInt(VerificaVet) > 0);

//   return `Fim da operação`;
// }

// console.log(verificaVetor([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));

//13
//8 nomes clientes em um vetor
// DVD locados em 2012 por cada cliente vetor 2
// Para cada 10 locação ganha 1 de graça
// retorne os nomes dos clientes e quantidade que tem de locação gratis
// function LocadoraChimas(clientes: string[], locacoes: number[]): object{
//   let contMimos: number = 0;
//   let obj: {
//     nome: string;
//     mimos: number;
//   }[] = []
//   for (let i = 0; i < clientes.length; i++){
//     if (locacoes[i] >= 10){
//       for (let j = 10; j <= locacoes[i]; j+= 10){
//         contMimos++;
//       }
//     }
//     obj.push ({
//       nome: clientes[i],
//       mimos: contMimos,
//     });
//     contMimos = 0;
//   }
//   return {Mimos_2012: obj};
// }

// console.log(LocadoraChimas(['Cliente 1','Cliente 2','Cliente 3','Cliente 4','Cliente 5','Cliente 6','Cliente 7','Cliente 8','Cliente 9', 'Cliente 10'],[15, 8, 45, 11, 4, 2, 20, 6, 7, 10]));

//14
// function contaElementos(vetor: number[]) {
//   let guardaRep: number[] = [];
//   let repeticao: number = 0;
//   let obj: {
//     numero: number;
//     repeticao: number;
//   }[] = [];

  
//   for(let i = 0; i < vetor.length; i++){
    
//     for(let j = i+1; j < vetor.length; j++){
//       if(vetor[i] === vetor[j]){
//         repeticao++;
//         guardaRep[i] = vetor[i];
//       }
//     }
    
//     if (repeticao !== 0){
//       obj.push({
//         numero: guardaRep[i],
//         repeticao: repeticao,
//       }); 
//       vetor = vetor.filter(function(rep){
//         return rep !== guardaRep[i];
//       })
//       i -= 1;
//     }
//     repeticao = 0;
//   }


//   return obj;
  
// }

// console.log(contaElementos([1, 2, 3, 5, 1, 1, 5, 2, 2, 2, 8, 1]));

//15
// function carroEconomico (modelos: string[], consumo: number[]){
//   let carroEconomico: number = consumo[0];
//   let ModeloEconomico: string = '';
//   let milKM: number[] = [];
//   let obj: {
//     Modelo: string;
//     Litros_1000KM: number;
//     }[] = [];
  
//   for(let i = 0; i < modelos.length; i++){
//     milKM[i] = 1000/consumo[i];
//     if (consumo[i] > carroEconomico){
//       carroEconomico = consumo[i];
//       ModeloEconomico = modelos[i];
//     }
//     obj.push ({
//       Modelo: modelos[i],
//       Litros_1000KM: milKM[i],
//     });
//   }
//   return {obj, ModeloEconomico};
// }

// console.log(carroEconomico(['Modelo 1', 'Modelo 2', 'Modelo 3', 'Modelo 4', 'Modelo 5'],[5, 8, 3, 4, 7]));

//16
//vetor de 20 posiçoes inteiros
//coloque ordem crescente
//selecionar o menor número
// troque este valor pelo primeiro

// function ordemCrescente (numeros: number[]): number[]{
//   let menorValor: number = numeros[0];
//   let j: number = 0;
  
//   for (let i = 0; i < numeros.length; i++){
//     j = i;
//     for(let k = i + 1; k < numeros.length; k++){
//       if(numeros[k] < numeros[j]){
//           menorValor = numeros[k];
//           j = k;
       
//       }
//     }

//     if( j !== i) {
//       let valorAtual = numeros[i];
//       numeros[j] = valorAtual; 
//       numeros[i] = menorValor; 
//     }
//   }
//   return numeros;
// }

// console.log(ordemCrescente([20, 19, 18, 9, 1, 3, 10, 14, 9, 11, 7, 3, 4, 5, 17, 14, 12, 18, 0, 30]));

//17
// function BubbleSort (array: number[]){
//   let controle: number;
//   for(let i = 0; i < array.length; i++){
//     for (let j = i + 1; j < array.length; j++){
//       if (array[i] > array[j]){
//         controle = array[i];
//         array[i] = array[j];
//         array[j] = controle;
//       }
//     }
    
//   }
//   return array;
// }

// console.log(BubbleSort([20, 1, 1, 9, 1, 3, 10, 14, 20, 30, 1, 7, 40, 4, 5, 17, 17, 20, 20]));