// * Inheritance, overriding properties and the protected keyword
// In the Department class, we might need more specific information on certain departments.
// Example
// In the IT department, may have additional methods for Administrators, only available in IT department
// In the Accounting department, may have additional methods for Reports

// when we use extend word to inherit class methods and properties.
// It iherits all the methods && properties, including the constroctor. If you don't give it, its own.

// super keyword => super()
// when ever you use a constructor in a class that extends from another class, you need to use super.
// super calls the constructor of the base class.
// super takes the arguments of the parent constructor.

// We want to add our own addEmployee() method in AccountingDepartment.
// We need to access the emploees array in parent class, and its private.
// private values are only accessible in their class.
// We need to use protected keyword, it should grant us access && still make emploees array protected
// protected values are on their class && the classes that extends their class.

// we have override addEmployee in the AccountingDepartment class

class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    this.id = id;
    this.name = name;
  }

  describe() {
    console.log(`This is ${this.name} departmnet, ID: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("001", ["Onesmus", "John"]);

const accounting = new AccountingDepartment("002", ["The night walker", "The utopia"]);
accounting.addReport("Added just now");
accounting.printReports();

accounting.addEmployee("Muna");

accounting.printEmployees();
