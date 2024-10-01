function myFunction() {
    var myVar = "Nick";
    if (true) {
        var myVar = "John"; // how the Var can be reassigned
        console.log(myVar);
    }
    console.log(myVar);
}
console.log(myVar); // Raises a reference Error due to out of scope

myFunction();