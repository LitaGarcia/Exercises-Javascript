// Dado tres arrays de números, sacar en un nuevo array la intersección de estos.

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const concat = new Set(arrNumber1.concat(arrNumber2).concat(arrNumber3));

let numbers = [];
concat.forEach((n) => {
  if (
    arrNumber1.includes(n) &&
    arrNumber2.includes(n) &&
    arrNumber3.includes(n)
  ) {
    numbers.push(n);
  }
});

console.log(numbers);
