function add(num1: number, num2: number) {
  return num1 + num2;
}

// Function types
// We tell TS, we want to store a fuunction.
// That takes 2 numbers and return a number
let addition: (a: number, b: number) => number;

addition = add;

addition(23, 7); // 30
