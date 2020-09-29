// Working with constraints
// we set constraints using the extends keyword

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const mergedObjects = merge({ name: "Onesmus" }, {});

// Now, I can only pass objects when calling the merge function. thanks to constraints

// ===========================================================================
//? Another function with constraints
// ===========================================================================

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let describe = "Has no value";

  if (element.length > 1) {
    describe = `Has ${element.length} values`;
  }
  return [element, describe];
}

console.log(countAndDescribe("hello word!")); // works fine
console.log(countAndDescribe(["Apple", "boy", 34, 789])); // works fine
// countAndDescribe(60)  // Errors out

// We have made the interface Lengthy, and extended it to the T type. It suggests that:
//  The argument to be put in countAndDescribe() function, must have a length property
