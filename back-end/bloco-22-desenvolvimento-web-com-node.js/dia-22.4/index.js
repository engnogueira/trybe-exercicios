const express = require('express');
const app = express();

const recipes = [
  {id: 1, name: 'Lasanha', price: 40, waitTime: 30},
  {id: 2, name: 'Bolo de cenoura', price: 20, waitTime: 10},
  {id: 3, name: 'Pizza', price: 50, waitTime: 40},
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

function arraySORT (array, key) {
  return array.sort(function (a, b) {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}

app.get('/recipes', function (req, res){
  return res.json(arraySORT(recipes, 'name'));
});

app.get('/drinks', function (req, res){
  return res.json(arraySORT(drinks, 'name'));
})

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});
