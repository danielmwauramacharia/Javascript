function myFunction() {
    var myVar = "Nick";
    if (true) {
        var myVar = "John";
        console.log(myVar);
    }
    console.log(myVar);
}
console.log(myVar); // Raises a reference Error due to out of scope

myFunction();