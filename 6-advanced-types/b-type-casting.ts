// Type casting

const userInput = document.getElementById("username");

// Here we get an error, since TS has no idea what this is
// username.value;

//* The esclamation mark, after the 2 statements, tells TS that it will never yield null

// There are 2 ways of type casting
//* one
const userInput1 = <HTMLInputElement>document.getElementById("username")!;
userInput1.value;

//* two
const userInput2 = document.getElementById("username")! as HTMLInputElement;
userInput2.value;
