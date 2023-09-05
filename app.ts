type Person = {
  name: string;
  age: number;
  hobbies: string[];
  role: [string, number];
};

const person: Person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Coocking"],
  role: ["author", 2],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()) // ERROR!!!
}

person.role.push("admin");
person.role[1] = 10;
