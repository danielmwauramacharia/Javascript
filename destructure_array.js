const myArray = ["a", "b", "c"];

//without destructuring
const x = myArray[0];
const y = myArray[1];
console.log(x);
console.log(y);

//with destructure
const [a, b] = myArray;
console.log(a);
console.log(b);

//you can skip items in an array during destructuring by leaving a space
const [c, ,d] = myArray;
console.log(c);
console.log(d);

//setting default values
const myColors = ["Red", "Green"];
const [firstColor, secondColor, thirdColor = "Blue"] = myColors
console.log(thirdColor);

//nested array destructure
const points = [[1, 2], [3, 4], [5, 6]];
const [[x1, y1], [x2, y2]] = points;
console.log(x1, y1);
console.log(x2, y2);