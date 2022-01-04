// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'abacaxi', 'maca'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'hortelã', 'granola'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
