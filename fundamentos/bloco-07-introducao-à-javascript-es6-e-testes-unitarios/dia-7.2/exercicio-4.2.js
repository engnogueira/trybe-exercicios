/* 
4 - Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals

Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe".
 */

const skills = ['JavaScript', 'ReactJS', 'React Native', 'NodeJS', 'TypeScript', 'Python'];

const trocaLetra = (palavra, letra, novaLetra) => {
  const novaPalavra = palavra.replace(letra, novaLetra);
  return novaPalavra;
}

const entradaTrocaLetra = trocaLetra("Tryber x aqui!", "x", "Gilson");

const concatenaSkills = (habilidades, entradaTrocaLetra) => {
  const skillsOrdenadas = habilidades.sort();
  const primeiraParteScript = `${entradaTrocaLetra} Minhas cinco principais habilidades são:\n`
  let segundaParteScript = ``;
  const terceiraParteScript = `... #goTrybe`;
  for (let index = 0; index < skillsOrdenadas.length; index += 1){
    segundaParteScript += `${skillsOrdenadas[index]};\n`;
  }
  return primeiraParteScript + segundaParteScript + terceiraParteScript;
}
console.log(concatenaSkills(skills, entradaTrocaLetra));
