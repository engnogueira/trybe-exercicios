/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

const newEmployees = (newEmail) => {
  // https://pt.stackoverflow.com/questions/399451/capitalizar-texto-em-javascript-ignorando-abrevia%c3%a7%c3%b5es/399457#399457
  const capitalize = require('capitalize-pt-br');
  const employees = {
    id1: capitalize(newEmail('Pedro Guerra').split("@")[0].split("_").join(' ')), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: capitalize(newEmail('Luiza Drumond').split("@")[0].split("_").join(' ')), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: capitalize(newEmail('Carlos Paiva').split("@")[0].split("_").join(' ')), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

function newEmail(nomeCompleto) {
  let nome = nomeCompleto.toLowerCase().split(" ").join("_");
  return `${nome}@trybe.com`
}

console.log(newEmail('Gilson Nogueira'));
console.log(newEmployees(newEmail));