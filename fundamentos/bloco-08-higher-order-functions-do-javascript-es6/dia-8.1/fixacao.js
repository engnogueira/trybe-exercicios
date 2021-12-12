// Ao chamar a função doingThings:
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const doingThings = (atividade) => {
  console.log(atividade());
};

const acordar = () => "Acordando!!";
const lanchar = () => "Bora tomar café!!";
const dormir = () => "Partiu dormir!!";

doingThings(acordar);
doingThings(lanchar);
doingThings(dormir); 


