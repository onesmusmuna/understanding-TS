// Generic
// capturing the type of the argument in such a way that we can also use it to denote what is being returned

// =============================  Generic Arrays ==========================================

// Angle brackets, specify which type of data should go into the array
const names: Array<string> = []; // this is same as string[]

// we can also use union types
const names1: Array<string | number> = [];

// =============================  Generic Promise =========================================

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("It works");
    reject("does not work");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
