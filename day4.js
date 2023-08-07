// destructuring
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

// date time

let today = new Date();
console.log(today.getDate());

// json and it method Json.parse
let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let data = JSON.parse(text);

console.log(data.employees[0].firstName);

// setInterval(()=>{
//     console.log("setInterval")
// },5000);

// setTimeout(()=>{
//     console.log("setTimeOut")
// },3000);

// let val const
// scope of var is in global execution
// scope of let and const is out of global execution in isolation variable is accesable after assignment

// spread
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]

const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

// error handling

try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}

// coustom error

class CheckCondition extends Error {
  constructor(msg) {
    super(msg);
    this.name="CheckCondition";
  }
}

try {
  if (10 != 20) throw new CheckCondition("10 is not equal to 20");
} catch ({ name, message }) {
    console.log(name); // "TypeError"
    console.log(message); // "oops"
}
