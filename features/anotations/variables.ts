;('Type Anotation => Code we add to tell TypeScript what type of value a variable will refer to ')
;('Type Anotation --> We Develpores tell TypeScript the type')

//! Primitive Values
let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

//! built in objects
let now: Date = new Date()

//! Array
let colors: string[] = ['red', 'blue', 'green']
let myNumbers: number[] = [1, 2, 3, 4]
let booleans: boolean[] = [true, false, true]

//! Classes
class Car {}
let carOne: Car = new Car()

//! Object literal
let point: { x: number; y: number; z: string } = {
    x: 10,
    y: 20,
    z: 'String',
}

//! Function
//* მივანიჭებთ ფუნქციის ანოტაციას, და მის ფრჩხილებში ჩავწერთ იმ არგუმენტებს რასაც ამ ფუნქციიდან ვიღებთ
//* შემდეგ ვწერთ აროუს და ამ ეროუს მივანიჭებთ void ს , რადგან არაფერს არ ვარეთარნებთ ამ შემთხვევაში

// * (i:number) => void ეს არის ფუნქციის აღწერილობა

let logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// !When to use annotations
// * 1) Functions that returns "any" types
const json = '{"x": 10, "y":20}'
const coordinates = JSON.parse(json)

// ! Type Any - ნიშნავს რომ ტაიპსკრიპტს არ აქვს იდეა თუ რომელი ტიპისაა ესათუის ცვლადი
// * Fixing The "ANY" type anotation
const json2 = '{"x": 10, "y":20}'
const coordinate2s: { x: number; y: number } = JSON.parse(json)

// * 2) When we declare variables in one line and initializate it later
let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}

// * 3) Variables Whose type cannot be inferred correctly
let numbers = [-10, -2, 12]
let numberAboveZero: boolean | number = false

// * | --> ეს ნიშნავს რომ ან ბოლიენი იქნება ან ციფრი

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}
