// This is not a good idea, its redundant.
// TS is able to infer the already assign variable
let num1 = 5;
// If we latter change it to a string, it will error out
// Because it already gave num1 a type of number
// num1 = "a"    // Type 'string' is not assignable to type 'number'

// If the variable is not assigned to any value
// We should put the annotations
let num2: number;
num2 = 10;
