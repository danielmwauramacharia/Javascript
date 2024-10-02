// creating the object 
const person = {
    name: "Nick",
    lastName: "Anderson",
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

console.log("----------------------------Renaming Properties-------------------------------------")

//Renaming variables during destructure
const {name: FullName, age: Years} = person;
console.log(FullName);
console.log(Years);

console.log("----------------------------Adding a property-------------------------------------")

// creating a default when property doesn't exist on the object
const {name: FirstName, job = 'Unemployed'} = person;
console.log(job);

console.log("---------------------------Without Destructure--------------------------------------")

/*
Destructure is often used in functions
The following examples shows 
1) Without destructuring an object in a function
2) with destructuring an object in a function
*/

//1
function joinFirstLastName(person) {
    const firstName = person.name;
    const lastName = person.lastName;
    return firstName + '-' + lastName;
}

console.log(joinFirstLastName(person));

console.log("-------------------------Destructure object to a function----------------------------------------")

//2
function joinFirstLastName({name, lastName}) {
    return name + '-' + lastName;
}
console.log(joinFirstLastName(person));

console.log("---------------------------Arrow Function--------------------------------------")

// destructure is even more pleasant with arrow function
const joinFirstLastName_ = ({name, lastName}) =>  name + '-' + lastName;
console.log(joinFirstLastName_(person));


//nested destructuring
const user = {
    id: 1,
    profile: {
        name_: "Nick",
        age_: 30
    }
}

const {profile: {name_, age_}} = user;
console.log(name_);
console.log(age_);