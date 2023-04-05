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

*/
