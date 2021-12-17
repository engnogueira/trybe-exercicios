function hydrate(bebidas){
  let contador = 0;
  let arrayBebidas = bebidas.split(' ');
  for (let index = 0; index < arrayBebidas.length; index += 1) {
    if (parseInt(arrayBebidas[index])) {
      contador += parseInt(arrayBebidas[index]);
    }
  }
  if(contador === 1){
    return `${contador} copo de água`;
  }
  return `${contador} copos de água`;
}

module.exports = hydrate;