
const firstName: string = "Evelyn";
let age: number = 21;
let isTrue: boolean = false;

let salary = BigInt(156545652165451316548);
let salary1: number = 100;
console.log(salary);
console.log(salary1);

// number non assignalbe a BigInt() example

//salary = salary1 // Type 'number' is not assignable to type 'bigint'


// Type primitif Null or undefined 

let name: null = null;
let ages: null = null;
let isHuman: unknown;


isHuman = true;
// ages = 18; // Type '18' is not assignable to type 'null'
// name = "Evelyne"; // return Type '"Evelyne"' is not assignable to type 'null'

let forTest: unknown;

forTest = true;
forTest = "Hello world";

console.log(forTest)