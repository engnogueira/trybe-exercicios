const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

/* 
5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
 */

const containsA = (names) => {
  return names.reduce((acc, name) => {
    return name.toLowerCase().includes("a")
      ? name.toLowerCase().split('').reduce((acc, letra) => {
        return letra === "a" ? acc + 1 : acc;
      }, 0) + acc
  : name }, 0);
};

console.log(containsA(names));

/* 
console.log(
  "banana".split('').reduce((acc, letra) => {
    return letra === "a" ? acc + 1 : acc;
  }, 0)
);
 
console.log("banana".split('').join());
 */
