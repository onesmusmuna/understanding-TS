// constructor
// It is a method that is executed when the object is being created

// class Department {
//   name: string;

//   constructor(n: string) {
//     this.name = n;
//   }
// }

//const accounting = new Department("Accounting");
//console.log(accounting); //Department {name: "Accounting"}

//* ==========================================  this key word  ==========================================
// The this, in describe method, is used to add type safty.
// So that, accountingCopy.describe, will not work.

// class Department {
//   name: string;

//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(this: Department) {
//     console.log(`${this.name} Department`);
//   }
// }

// const accounting = new Department("Accounting");
// accounting.describe();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe();

//* ===============================  Private and public access modifiers  ===============================
// Since name and emploees can easily be changed by the following statements:
// accounting.name = "Agriculture";
// accounting.employees.push("Zack");
// we need to protect them, so that the are only accessible in the class.
// And the only way the get in || out, is through a defined method.
// Hence we use the private word. public is the default

// class Department {
//   private name: string;
//   private employees: string[] = [];

//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(this: Department) {
//     console.log(`${this.name} Department`);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployees() {
//     console.log(this.employees);
//   }
// }

// const accounting = new Department("Accounting");
// accounting.addEmployee("Onesmus");

// //accounting.employees.push("Zack");
// //accounting.name = "Agriculture";
// accounting.describe(); // Agriculture Department ... before adding private word

// accounting.printEmployees();

//* ===============================  Shorthand Initialization && readonly  ==============================
// As you can see the shorthand
// readonly, introduced by TS
// Below it means, we can never change the id

class Department {
  constructor(private readonly id: string, private name: string) {
    this.id = id;
    this.name = name;
  }
}
