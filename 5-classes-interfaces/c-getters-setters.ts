// Getters and setters
// These are accessor properties, denoted by get and set
// When accessing the get method, we dont use parenthesis to call it
// eg security.numberOfEmployees

class Department {
  private _employees: string[] = [];

  get numberOfEmployees() {
    if (this._employees.length === 0) return "No emplooyess";

    return this._employees.length;
  }

  constructor(private name: string) {
    this.name = name;
  }

  addEmployee(name: string) {
    this._employees.push(name);
  }
}

const security = new Department("Security");

security.addEmployee("Wafula");
security.addEmployee("Njoro");
security.addEmployee("Njoro");
security.addEmployee("Njoro");

console.log(security.numberOfEmployees); // 4
