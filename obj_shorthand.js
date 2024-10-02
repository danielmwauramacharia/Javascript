// variable name equals to the property name
const x = 10;
const myObj = {x};
console.log(myObj.x)

// without shorthand
const name = "Nick";
const age = 30;

const person = {
    name: name,
    age: age
};

console.log(person); // Output: { name: "Nick", age: 30 }

//with shorthand
const alias = "Nick";
const years = 30;

const person1 = { alias, years }; // clean code

console.log(person1); // Output: { alias: "Nick", years: 30 }

