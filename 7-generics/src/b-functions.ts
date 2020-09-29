// Generic functions
// We want to create a function that takes 2 objects, and returns a new object.

// lets start with plain js
function merge1(obj1: object, obj2: object) {
  return Object.assign(obj1, obj2);
}

const joinedObjects1 = merge1({ name: "Onesmus" }, { age: 21 });

// the problem with code above is, we can not access name && age property.
//   Even if we know they'll be there, TS does not know this: Eg
// joinedObjects1.name  // ERROR 'name' does not exist on type 'object'

// We can also do type casting: Eg
const joinedObjects2 = merge1({ name: "Muna" }, { age: 21 }) as {
  name: string;
  age: number;
};

joinedObjects2.name; // Muna
// The above works, but it is cumbersome

// ======================================================================================
//! Generics saves the day
// ======================================================================================

function merge2<T, U>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const mergedObjects1 = merge2({ job: "developer" }, { company: "dianimall" });

// We could also as below, but it would be redundunt
const mergedObjects2 = merge2<{ schools: string[] }, { university: string }>(
  { schools: ["Gentiana", "Kahuho"] },
  { university: "cuea" },
);

// When we use Generics <>, Typescript inferrs the values of argument we are passing in the function
// So we dont need to explicitly put generic types when we are calling a funtion
