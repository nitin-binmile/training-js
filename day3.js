//  functions
function hello() {
  console.log("Hello");
}
hello();

// function expression

const namaste=function (){
    console.log("namaste");
}
namaste()

// arrow function

const addNumber=(x,y)=>x+y;

console.log(addNumber(1,3))


function myconcat(seprator){
    let result="";
    for(let x=1;x<arguments.length;x++){
         result+=arguments[x]+seprator;
    }
   result=result.slice(0,-1);
   return result;
}

console.log(myconcat(",","ram","shayam"))


const obj = {
  foo: 1,
  // You should not define such a method on your own object,
  // but you may not be able to prevent it from happening if
  // you are receiving the object from external input
  propertyIsEnumerable() {
    return false;
  },
};



obj.propertyIsEnumerable("foo"); // false; unexpected result
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; expected result



const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"



