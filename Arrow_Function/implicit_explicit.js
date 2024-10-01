/*
 Traditional way
 you explicitly tell the function what to return
 */

function double(x) {
    return x * 2
}

console.log(double(2)); //4

/*
Arrow Function with implicit return
*/

const double1 = x => x * 2;
console.log(double1(2)); //4

