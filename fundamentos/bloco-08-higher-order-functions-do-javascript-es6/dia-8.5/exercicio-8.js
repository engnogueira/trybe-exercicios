// escreva greet abaixo
const greet = (name, mens = 'Hi') => `${mens} ${name}`

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

/* 
8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
Dica: use default params .
 */

console.log(greet('Gilson','Boa tarde'))
