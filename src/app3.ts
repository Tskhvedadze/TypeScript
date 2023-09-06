const names: Array<string> = ["Max", "Manuel"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

// promise.then((res) => console.log(res));

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max" }, { age: 30, names: ["Max", "Jhon"] });
console.log(mergeObj);

function personObj<T>(personInfo: T) {
  return personInfo;
}

const p_1 = personObj({ firstName: "Max", lastName: "Schwarzmuller", age: 30 });
console.log(p_1.firstName);

const p_2 = personObj(["Max", "Schwarzmuller", { age: 30 }]);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  let decriptionText = "Got no value";
  if (element.length === 1) {
    decriptionText = `Got ${element.length} element.`;
  } else if (element.length > 1) {
    decriptionText = `Got ${element.length} elements.`;
  }
  return [element, decriptionText];
}

console.log(countAndPrint("Hi there!"));
console.log(countAndPrint(["sport", "coocking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(
  extractAndConvert(
    {
      name: "Max",
    },
    "name"
  )
);

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}
