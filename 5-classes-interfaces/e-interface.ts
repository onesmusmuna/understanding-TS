// An interface describes the structure of an object.
// We create it using the interface keyword.
// we DO NOT have default values in an interface.
// We can use interface as a type.

//*   interface

interface Example1 {
  name: string;
  age: number;

  greet(): void;
}

//*   type

type Example2 = {
  name: string;
  age: number;

  greet(): void;
};

//! The question is: WHY do we need an interface, since the same thing is being done by type

//? interface and type are not exactly the same.
// interface can ONLY be used to describe the structure of an object
// tye is used to store a lot of things, including union types

//? when defining object types, you normally see interfaces. The are more clearer.

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: 21;

  constructor(name) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const user1 = new Person("Onesmus");

user1.greet("Morning");
