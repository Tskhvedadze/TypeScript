/*

* ვეუბნებით ტაიპსცრიპტს თუ რასახის არგუმენტები უნდა გადავცეთ და ასევე რასახის მნიშვნელობა 
* უნდა დააბრუნოს ამ ფუნქციამ

*/

const add = (a: number, b: number): number => {
    return a + b
}

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: number): number {
    return a * b
}

// ! Void ნიშნავს რომ ეს ფუქნცია არაფერს არ დაარეთარნებს

const logger = (message: string): void => {
    console.log(message)
}

// ! Never არაფერს არ დაარეთარნებს Error ის გარდა

const throwError = (message: string): never => {
    throw new Error(message)
}

// ! Destructuring With Anotations
const forcast = {
    date: new Date(),
    weather: 'Synny',
}

const logWeather = ({
    date,
    weather,
}: {
    date: Date
    weather: string
}): void => {
    console.log(date)
    console.log(weather)
}
logWeather(forcast)
