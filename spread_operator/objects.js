/*
syntax (...objects)
*/

//shallow copy
const person = {name: "Nick", age: 30};
const copiedPerson = {...person};
console.log(copiedPerson);

console.log("--------------------------");

//merging objects
const obj1 = {alias: "Nick"};
const obj2 = {ages: 30};
const person1 = {...obj1, ...obj2};
console.log(person1)