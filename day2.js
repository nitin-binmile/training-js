// iteratable

for (let x of [1, 2, 3, 4, 5, 6]) {
  console.log(x);
}

// map and set
// map
const mp = new Map();
mp.set("name", "nitin kukreti");
mp.set("company", "binmile");
mp.set("tech", "full stack developer (React+Node)");

console.log(mp);

// map is iteratable

for (let x of mp) {
  console.log(x);
}

// seting propery in a map

// wrong way its work but key will not support methods of map

const wrong = new Map();

wrong["car"] = "BMW";
wrong["bank"] = "hdfc";
// showing
console.log(wrong);

// not iteratable
for (let x of wrong) {
  console.log(x);
}

// not support feature of map like has

console.log(wrong.has("car")); // showing false but it actual has it

// right way to create and use map

const right = new Map();

right.set("car", "BMW");
right.set("bank", "hdfc");
//showing
console.log(right);

// also iteratable
for (let x of right) console.log(x);
//support feature of map
console.log(right.has("car")); // its showing true
console.log(right.has("lo")); // its not preset so it showibg false
// set
const myset = new Set();
myset.add(1); //adding 1
myset.add(2); //adding 2
console.log(myset);
myset.add(2); // adding 2 but its already exists
console.log(myset);
myset.delete(2);
console.log(myset);

// alert, prompt, confirm
// alert
// window.alert("he") only work in browser
// promt
// prompt("hi") only work in browser
// confirm
// confirm("fsdf") only work in browser

// comparisons
// === stict equality
const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

// == lose equality
const nums = 0;
const bigs = 0n;
const strs = "0";
const objs = new String("0");

console.log(nums == strs); // true
console.log(bigs == nums); // true
console.log(strs == bigs); // true

console.log(nums == objs); // true
console.log(bigs == objs); // true
console.log(strs == objs); // true

// Nullish coalescing Operator
// it return its right side operand if left side operand is null otherwise it return its left side operand
const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

// loops while and for
// while
let x = 5;
while (x--) {
  console.log("while ", x);
}
// for
for (let x = 0; x < 5; x++) console.log("for ", x);

// switch statment
const choice = "car";
switch (choice) {
  case "name":
    console.log("ram");
    break;
  case "car":
    console.log("BMW");
    break;
  default:
    console.log("no key match");
}
