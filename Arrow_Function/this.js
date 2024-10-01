//this , equal to the value of enclosing execution context
function myFunc() {
    this.myVar = 0;
    setTimeout(() => {
        this.myVar++;
        console.log(this.myVar)
    }, 0);
}

myFunc();