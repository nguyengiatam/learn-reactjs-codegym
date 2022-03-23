const numbers = [13, 122, 12, 4, 17, 3, 44];
let evenList = numbers.filter(number => number % 2 === 0);
let result = evenList.reduce((previous, current) => previous + current);
console.log(result);