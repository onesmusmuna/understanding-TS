// When we hover on person1, will see the object type infered by TS
// They describe the type of object being used
const person1 = {
  name: "Onesmus",
  age: 21,
};

// we can assign a type
const person2: object = {
  name: "Onesmus",
  age: 21,
};
// this is the same as
const person3: {} = {
  name: "Onesmus",
  age: 21,
};

// We can be more specific, by adding key: type;
const person4: {
  name: string;
  age: number;
} = {
  name: "Onesmus",
  age: 21,
};
