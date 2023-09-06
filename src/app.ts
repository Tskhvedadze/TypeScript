/*

const userName1 = "Max";

let age = 29;
age = 30;

const add2 = (n1: number, n2: number = 23): number => n1 + n2;

console.log(add2(23));

const printOutput = (output: string | number) => console.log(output);

printOutput(add2(34));

const hobbies = ["sport", "coocikng"];
const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1, hobbie2);

const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person3 = {
  name2: "Max",
  age2: 40,
};

const { name2, age2 } = person3;

const copiedPerson3 = { ...person3 };

copiedPerson3.age2 = 50;

console.log(person3);

const adds = (...numbers: [number, number, number]) => {
  return numbers.reduce((a, b) => a + b, 0);
};

console.log(adds(1, 2, 4));

let A: number = 10;
let B: number = 20;

console.log(A, B);

[B, A] = [A, B];

console.log(A, B);


// Classes

class Department {
  // public name: string;
  private employees: string[] = [];

  constructor(public readonly name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployes(employe: string) {
    this.employees.push(employe);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  private lastReport: string;
  constructor(name: string, admins: string[]) {
    super(name);
    this.admins = admins;
    this.lastReport = "report";
  }
}

const accounting = new ITDepartment("Accounting", ["Max"]);
accounting.addEmployes("Max");
accounting.addEmployes("Manu");
console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();

*/
