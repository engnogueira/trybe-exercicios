const numbers = [19, 22, 15, 21, 30, 3, 45];

const findDivisibleBy3And5 = (number) => (number % 3 === 0 && number % 5 === 0);

console.log(numbers.find(findDivisibleBy3And5))