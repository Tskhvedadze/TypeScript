"use strict";
/*

let myName: string = 'Dave'
let meaningOfLife: number
let isLoading: boolean

* Any Data Type
let album: any

album = 'Van Halen'
album = 1984
album = true

* Union Type
let album2: string | number

album2 = 'Van Halen'
album2 = 1984

myName = 'John'
meaningOfLife = 42
isLoading = true

const sum = (a: number, b: string) => {
   return a + b
}

*  UNION types
let postId: string | number
let isActive: number | boolean

* Regex Type
let regex: RegExp = /\w+/g



let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr

let test = []
let bands: string[] = []
bands.push('Van Helen')

* Tuple
let myTuple: [string, number, boolean] = ['Van Halem', 1984, true]

let mixed = ['John', 1, false]

myTuple[1] = 42

 !OBJECTS
let myObj: object
myObj = []

console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'John'

interface Guitarist {
    name?: string
    active: boolean
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [19984, 5150, 'OU812'],
}

let JP: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV'],
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLowerCase()}!`
    }
    return 'Hello'
}

console.log(greetGuitarist(JP))

* Enum

enum Grad {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grad.U)


type stringOrNumber = string | number

type stringOrNumberArr = stringOrNumber[]

type Guitarist = {
    name?: string
    active: boolean
    albums: stringOrNumberArr
}

type userId = stringOrNumber

//* Literal types
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Anny'

userName = 'Anny'

//* Functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number

//* interface mathFunction {
//*(a: number, b: number): number }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

//* optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

//* Default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))

logMsg(sumAll(undefined, 3))

//* Rest Parameters

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'strign'
    if (isNumber(value)) return 'number'

    return createError('This shoul never happen!')
}


type One = string
type Two = string | number
type Three = 'Hello'

let a: One = 'hello'
let b = a as Two
let c = a as Three

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (
    a: number,
    b: number,
    c: 'add' | 'concat',
): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

// * Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

10 as unknown as string

const img = document.querySelector('img')!

const myImg = document.getElementById('#img') as HTMLImageElement

const nextImg = (<HTMLImageElement>(
    document.getElementById('#img')
)) as HTMLImageElement

//* Classes

class Coder {
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript',
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello , I'm ${this.age} Years old`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)

console.log(Dave.getAge())

//* console.log(Dave.age)
//* console.log(Dave.lang)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)

console.log(Sara.getLang())

//? console.log(Sara.age)
//? console.log(Sara.lang)

interface Musician {
    name: string
    intrumnet: string
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    intrumnet: string

    constructor(name: string, instruments: string) {
        this.name = name
        this.intrumnet = instruments
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.intrumnet}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')

console.log(Page.play('strums'))

// * ////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Steve.id)
console.log(Amy.id)
console.log(John.id)
console.log(Peeps.count)

//* ////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (
            Array.isArray(value) &&
            value.every((el) => typeof el === 'string')
        ) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()

MyBands.data = ['Neil Young', 'Led Zep']

console.log(MyBands.data)

MyBands.data = [...MyBands.data, 'ZZ Top']

console.log(MyBands.data)

MyBands.data = ['Van Halen']


*/
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza'])
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
