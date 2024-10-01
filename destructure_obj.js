// creating the object 
const person = {
    name: "Nick",
    age: 30,
    country: "USA"
}

/*
//without destructure the code below should be used
const name = person.name
const age = person.age
console.log(name);
console.log(age);
*/

//with object destructure
const  { name, age } = person;
console.log(name);
console.log(age);

//Renaming variables during destructure
const {name: FullName, age: Years} = person;
console.log(FullName);
console.log(Years);

// creating a default when property doesn't exist on the object
const {name: FirstName, job = 'Unemployed'} = person;
console.log(job);
