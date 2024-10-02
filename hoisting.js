// var declared variables are moved at the top of scope during the execution


console.log(myVar); // undefined - no error raised
var myVar = 2;

// this is how the above code is understood by the interpreter

// var myVar;
// console.log(myVar) // undefined - no error raised
// myVar1 = 2;