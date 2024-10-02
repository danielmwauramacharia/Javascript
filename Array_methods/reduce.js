/*
for reduce method:
-Takes an array
-Aggregates to a single value
*/

const numbers = [1, 2, 3, 4, 5];
const summed = numbers.reduce((acc, num) => acc + num, 0);
console.log(summed);