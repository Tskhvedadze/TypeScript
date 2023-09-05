function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result " + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 4;
// combineValues = printResult;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(2, 4, (result) => {
  console.log(result);
});
