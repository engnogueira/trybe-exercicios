const user = {
  name: "Maria",
  age: 21,
  nationality: "Brazilian",
};

const { name, age, nationality } = user;
const dadosUsuarios = [name, age, nationality];

const jobInfos = {
  profession: "Software engineer",
  squad: "Rocket Landing Logic",
  squadInitials: "RLL",
};

const { profession, squad, squadInitials } = jobInfos
const dadosJobInfos = [ profession, squad, squadInitials];

/* 
1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .
*/

const dadosTotais = [...dadosUsuarios, ...dadosJobInfos];

console.log(dadosTotais);
