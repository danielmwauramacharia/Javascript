/*
for the find array method:
-Takes an array and returns;
- The first element in the array that satisfies the testing function
*/

const numbers = [1, 2, 3, 4, 5];
const firtEven = numbers.find(num => num % 2 ===0);
console.log(firtEven)