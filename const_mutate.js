/* 
const variables are not immutable
const declared objects and arrays can be mutated
*/

const person = {
    name : "Nick"
};
person.name = "John";
console.log(person.name);