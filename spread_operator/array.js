/*
syntax of spread operators on arrays (...array)
Expand an array into individual Elements
*/

//copying an array(shallow copy)
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers];
console.log(newNumbers);

console.log("----------------------------------");

//merging arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArray = [...arr1, ...arr2];
console.log(mergeArray);