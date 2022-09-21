console.log("Hello TypeScript!");
console.log("does this work?!");
console.log("THIS IS THE LAST ONE!");
console.log("another change");
console.log("another last one");

// VARIABLES & PRIMITIVES
let student: string = "Mohammad";
student = "Miles";

let anotherStudent: string;

if (true) {
  anotherStudent = "Terezaaaa";
}

// anotherStudent = 5; // not possible because the type is specified as string

let myNumber: number = 500;

console.log(anotherStudent);

let truthiness: boolean = true;
let myUndefined: undefined = undefined;
let myNull: null = null;
console.log(truthiness);

student = "Paul";
console.log(student.length);
console.log(typeof myNumber);
console.log(typeof myNumber.toString());

let particularNum = 0;

// the ability of TS to automatically figure out the type of the data
// contained in a variable is called TYPE INFERENCE

let iDontKnowWhatThisTypeIs: any = "whatever";
// in doing this we are not going to have any error when we change
// the variable content with a number.
// this effectively shuts off the TS type checkings :/

// FUNCTIONS

const sum = (n1, n2) => {
  return n1 + n2;
};

console.log(sum(4, 5));
console.log(sum("4", "5"));

const additionWithCheck = (n1, n2) => {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return "you didn't pass 2 valid numbers!";
  }
};

console.log(additionWithCheck("4", "5"));

const sumWithTypeScript = (n1: number, n2: number) => {
  return n1 + n2;
};

// console.log(sumWithTypeScript("4", "5")); // not possible, should not compile and throws meaningful errors in the TS console
console.log(sumWithTypeScript(6, 2));

// Union
let mixedVariableType: string | number; // this is called TYPE UNION

mixedVariableType = 50;
mixedVariableType = "another string";
// mixedVariableType = true;

// Type Aliases aka Custom Types
type StringOrNumber = string | number; // typically Aliases start with capital letters

let newVar: StringOrNumber = "50";

// optional parameters - not going to complain if undefined
const sayHi = (name: string, prefix?: string) => {
  return `${prefix || "Hello"} ${name}!`;
};

console.log(sayHi("Tereza", "Hey there"));
console.log(sayHi("Mohammad")); // the question mark on the second arguement
// allows us to invoke sayHi with just ONE arguement if we want to.

// Type Literals
let x: "hello" = "hello";

function alignText(text: string, alignment: "left" | "right" | "center") {
  console.log(text, alignment);
}

alignText("Lorem ipsum", "left");

function randomFunc(a: number | string) {
  if (typeof a === "number") {
    return a.toFixed();
  }
}
// Type intersections
function randomFunc2(a: number[] | string) {
  return a.slice(0, 4);
}

// ARRAYS

let arrayOfStrings: string[] = ["Mohammad", "Tereza", "Miles", "Hatem", "Paul"];

// arrayOfStrings.push(1000); // not allowed
arrayOfStrings.push("Stefano");

let myArray: number[] = [];

myArray.push(1, 2, 3);
// myArray.push("something"); // not going to work
console.log(myArray);

console.log(arrayOfStrings.map(name => name.toUpperCase()).filter(name => name[0] === "S"));

let anotherWayOfDefiningAnArrayOfNumbers: Array<number> = []; // Array<number> is the same as number[] and these <> specify a TYPE ARGUEMENT

let mixedArray: StringOrNumber[] = [];
mixedArray.push("Nazami");
mixedArray.push(100);

console.log(mixedArray);
// mixedArray.push(true); // not present in the alias StringOrNumber

let anotherMixedArray: (string | number | boolean)[] = [1, "s", true, true, "a", 2];
// this one allows for having strings, numbers, booleans in ANY PLACE of your array.
// you cannot possibly know in advance where you can access one of those types

// TUPLE
let verySpecificArray: [number, string, boolean] = [30, "Mohammad", true];
// this enforces the types on that very same position, so the first one MUST BE a number, the second a string and the third necessarily a boolean

// OBJECT
interface Teacher {
  firstName: string;
  lastName: string;
  age: StringOrNumber;
  country: string;
  mainSkill?: string;
}

let epicodeTeacher: Teacher = {
  firstName: "Stefano",
  lastName: "Miceli",
  age: 33,
  country: "Italy",
};
epicodeTeacher.age = "50";

let epicodeTeacher2: Teacher = {
  firstName: "Stefano",
  lastName: "Casasola",
  age: "35",
  country: "Italy",
  mainSkill: "Frontend",
};

let epicodeTeacher3: Teacher = {
  firstName: "Riccardo",
  lastName: "Gulin",
  age: "36",
  country: "Italy",
  mainSkill: "Backend",
};

console.log(epicodeTeacher2.lastName.substring(0, 4));

let bigArrayOfTeachers: Teacher[] = [];

bigArrayOfTeachers.push(epicodeTeacher, epicodeTeacher2, epicodeTeacher3);
bigArrayOfTeachers.push({
  firstName: "Diego",
  lastName: "Banovaz",
  age: "10000",
  country: "Everywhere",
  mainSkill: "Everything",
});
console.log(bigArrayOfTeachers);

interface Human {
  name: string;
  sex: string;
  height: number;
}

interface Employee extends Human {
  specialty: string;
}

let worker: Employee = {
  name: "John",
  sex: "M",
  height: 190,
  specialty: "Soldering",
};

worker.name;

// GENERICS
// generics are type arguements for interfaces! (like Array<string>)
// generics make your interfaces more FLEXIBLE

interface EpicodeUnit<T> {
  unitNumber: number;
  teacher: T;
  topics: string[];
}

let unit2: EpicodeUnit<string> = {
  unitNumber: 2,
  teacher: "Stefano Miceli",
  topics: ["CSS Adv", "Bootstrap", "Flexbox", "AJAX", "Promises"],
};

let unit3: EpicodeUnit<string[]> = {
  unitNumber: 3,
  teacher: ["Stefano Miceli", "Stefano Casasola"],
  topics: ["react", "redux", "typescript"],
};

interface Unit {
  name: string;
  surname: string;
}

let unit4: EpicodeUnit<Unit> = {
  //OR:  EpicodeUnit<{ name: string; surname: string }>
  unitNumber: 4,
  teacher: { name: "Dan", surname: "Abramov" },
  topics: ["the genesis of redux"],
};
