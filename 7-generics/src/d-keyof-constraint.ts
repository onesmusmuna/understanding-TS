// keyof constraint

// we want to create a function with 2 parameters.
// 1st param, takes in an object.
// 2nd param, takes in a property of, 1st param's object.
// And the function returns key of the object, access from the object

function myFunc<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(myFunc({ name: "Onesmus" }, "name"));
