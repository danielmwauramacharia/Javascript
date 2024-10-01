/* let and var are almost the same but;
    - let are scope based
    - cannot be accessed before declared
    - cannot be re-declared in the same scope
*/

function myFunction() {
    let myVar = "Nick";
    if (true) {
        /*
        - let being scope based this is a new variable
        - its independent from let myVar = "Nick"; created above
        - cannot be accessed outside this scope
        */
        let myVar = "John";
        console.log(myVar);
    }
    console.log(myVar);
}

console.log(myVar); // Reference Error Occurs

myFunction();