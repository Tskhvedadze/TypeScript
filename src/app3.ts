// const names: Array<string> = ["Max", "Manuel"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// // promise.then((res) => console.log(res));

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: "Max" }, { age: 30, names: ["Max", "Jhon"] });
// console.log(mergeObj);

// function personObj<T>(personInfo: T) {
//   return personInfo;
// }

// const p_1 = personObj({ firstName: "Max", lastName: "Schwarzmuller", age: 30 });
// console.log(p_1.firstName);

// const p_2 = personObj(["Max", "Schwarzmuller", { age: 30 }]);

// interface Lengthy {
//   length: number;
// }

// function countAndPrint<T extends Lengthy>(element: T) {
//   let decriptionText = "Got no value";
//   if (element.length === 1) {
//     decriptionText = `Got ${element.length} element.`;
//   } else if (element.length > 1) {
//     decriptionText = `Got ${element.length} elements.`;
//   }
//   return [element, decriptionText];
// }

// console.log(countAndPrint("Hi there!"));
// console.log(countAndPrint(["sport", "coocking"]));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return obj[key];
// }

// console.log(
//   extractAndConvert(
//     {
//       name: "Max",
//     },
//     "name"
//   )
// );

// interface CourseGoal {
//   title: string;
//   description: string;
//   completeUntil: Date;
// }

// function createCourseGoal(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   let courseGoal: Partial<CourseGoal> = {};
//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUntil = date;

//   return courseGoal as CourseGoal;
// }

function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const p = new constructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person1 {
  name: string;

  constructor() {
    this.name = "Max";
    console.log("Creating person object..");
  }
}

const pers = new Person1();
console.log(pers);

function Log(target: any, propName: string | symbol) {
  console.log("Property decorator!");
  console.log(target, propName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accssesor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

class Product {
  @Log
  title: string;
  private _price: number;

  // @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price ");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  const adjDecriptos: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boudnFn = originalMethod.bind(this);
      return boudnFn;
    },
  };

  return adjDecriptos;
}

class Printer {
  message = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button")!;

button.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [props: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNum(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNum
  price: string;

  constructor(t: string, p: string) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");

courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again");
    return;
  }
  console.log(createdCourse);
});
