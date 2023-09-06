/*

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;

function add3(a: number, b: number): number;
function add3(a: string, b: string): string;
function add3(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add3("Max", "Schwarzmuler");
result.split(" ");
console.log(result);

type UnnownEmployee = Employee & Admin;

function printEmpolyeeInformation(emp: UnnownEmployee) {
  console.log(`Name ${emp.name}`);

  if ("privileges" in emp) {
    console.log(`Privileges ${emp.privileges}`);
  }

  if ("startDate" in emp) {
    console.log(`Start Date ${emp.startDate}`);
  }
}

printEmpolyeeInformation(e1);

class Car {
  drive() {
    console.log("Drving a car");
  }
}

class Truck {
  drive() {
    console.log("Drving a truck");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving @ speed ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

const para = <HTMLElement>document.getElementById("message-output");

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Maximilian",
};

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My Own Company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = 0;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);

*/
