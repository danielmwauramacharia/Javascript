// if function has no parameter use empty parentheses ()
//Example 1
const greet = () => console.log("Hello");
greet();

//Example 2
const myFunction = () => {
    const x = 2;
    return x;
}

console.log(myFunction());

/*
if only one parameter the parentheses can be avoided
instead of const double1 = (x) => x * 2;
*/
const double1 = x => x * 2; 
console.log(double1(2)); //4


//To imlicitly return an object, parentheses need to be used
const getPerson = () => ({name: "Nick", age: 24});
console.log(getPerson()); //{ name: 'Nick', age: 24 } is the output

//multiple parameters
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));

