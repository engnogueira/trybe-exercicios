const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome) =>(nome.length === 5?  true : false);

console.log(names.find(findNameWithFiveLetters));