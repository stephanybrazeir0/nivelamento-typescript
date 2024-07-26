import { alunas } from "./dados";

const medias = alunas.map((aluna) => ({
  nome: aluna.nome,
  media: parseFloat(((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3).toFixed(1)),
  aprovada: ((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3 >= 7),
}));

const aprovadas = medias.filter(aluna => aluna.aprovada === true).map(aluna => aluna.nome);

const reprovadas = medias.filter(aluna => aluna.aprovada === false).map(aluna => aluna.nome);

const MaiorNota = medias.sort((a, b) =>  b.media - a.media).map(aluna => aluna.nome)[0];

const MenorNota = medias.sort((a, b) =>  a.media - b.media).map(aluna => aluna.nome)[0];

const mediaTotal = (medias.map(aluna => aluna.media).reduce((accumulator, currentValue) => (accumulator + currentValue))/medias.length).toFixed(1);

console.log (medias);
console.log({Aprovadas: aprovadas});
console.log({Reprovadas: reprovadas});
console.log('Maior nota: ' + MaiorNota);
console.log("Menor nota: " + MenorNota);
console.log ("Média Geral: " + mediaTotal);

