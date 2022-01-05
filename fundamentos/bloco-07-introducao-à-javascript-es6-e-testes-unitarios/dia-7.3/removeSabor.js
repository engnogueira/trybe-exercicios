const bebidas = [
  "coca-cola",
  "sukita",
  "agua",
  "garapa",
  "suco de laranja",
  "groselha",
];

const removeBebida = (bebidas, bebida) => {
  for (let index = 0; index < bebidas.length; index += 1) {
    if (bebidas[index] === bebida) {
      bebidas.splice(bebidas.indexOf(bebida), 1);
    }
  }
  return bebidas;
};

// console.log(removeBebida(bebidas, "garapa"));


module.exports = removeBebida;
