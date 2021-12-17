function techList(techs, name) {
  let vetorOrdenado = techs.sort();
  let vetor = [];
  for (let index = 0; index < vetorOrdenado.length; index += 1) {
    vetor.push({
      tech: vetorOrdenado[index],
      name: name,
    });
  }
  return vetor;
}

module.exports = techList;
