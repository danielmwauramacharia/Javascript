// Importing named Exports - we use the same names used during export
import { PI, add, subtract } from './mathUtils.js';

console.log(PI);            // Output: 3.14
console.log(add(2, 3));      // Output: 5
console.log(subtract(5, 2)); // Output: 3


// importing default exports
import greet from './greetings.js';

console.log(greet('Nick'));  // Output: Hello, Nick!


// import default and named export that were exported together in calculator.js
import divide, { multiply } from './calculator.js';
console.log(multiply(4, 2)); // Output: 8
console.log(divide(8, 2));   // Output: 4