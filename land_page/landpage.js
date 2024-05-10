// Ronda Game JavaScript Example

// Print "Hello, Ronda!" to the console
console.log("Hello, Ronda!");

// Add two numbers and display the result
function addNumbers(a, b) {
    return a + b;
}

const num1 = 10;
const num2 = 5;
const sum = addNumbers(num1, num2);
console.log(`Sum of ${num1} and ${num2} is ${sum}`);

// Calculate the square root of a number
function squareRoot(number) {
    return Math.sqrt(number);
}

const inputNumber = 25;
const sqrtResult = squareRoot(inputNumber);
console.log(`Square root of ${inputNumber} is ${sqrtResult}`);

// Swap two variables
let x = 10;
let y = 20;
console.log(`Before swapping: x = ${x}, y = ${y}`);
[x, y] = [y, x];
console.log(`After swapping: x = ${x}, y = ${y}`);

// Your additional game logic and features go here...

// Feel free to explore more JavaScript concepts and build upon this foundation!