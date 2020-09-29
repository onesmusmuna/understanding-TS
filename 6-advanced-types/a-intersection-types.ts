type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevetedEmployee = Admin & Employee;

const employee1: ElevetedEmployee = {
  name: "Onesmus",
  privileges: ["source code"],
  startDate: new Date(),
};
