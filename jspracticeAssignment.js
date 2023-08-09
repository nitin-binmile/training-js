// 1.)
function removeDuplicates(inputArray) {
//   // Your code here
    //    const arr=new Set(inputArray);
    const arr=  inputArray.sort();
    console.log(arr)
    const result=[]
    for(x of arr){
        if(result.length===0 || result[result.length-1]!==x) result.push(x);
    }
       return result;
}


const input1 = [1, 2, 3, 2, 4, 3, 5];
const result = removeDuplicates(input1);
console.log(result); 
// // Expected output: [1, 2, 3, 4, 5]







// 2).
function findPrimes(inputArray) {
//   // Your code here
function isPrime(n) {
    // Corner case
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0)
            return false;

    return true;
}
       
      return inputArray.filter((x)=>isPrime(x));
  

}

const input2 = [2, 5, 8, 11, 12, 17, 20, 23];
const primes = findPrimes(input2);
console.log(primes); 
// // Expected output: [2, 5, 11, 17, 23]


// 3).
function transformArray(inputArray) {
//   // Your code here
    return inputArray.map((x)=>x*x);
}

const input3 = [1, 2, 3, 4, 5];
const transformedArray = transformArray(input3);
console.log(transformedArray);
//  // Expected output: [1, 4, 9, 16, 25]

// 4.)
function sortPeopleByAge(peopleArray) {
//   // Your code here
// write custom code for sorting the array

function mergeSort(arr,compare){
    function merge(l,r,compare){
         let mid=Math.floor((l+r)/2);
         let temp=new Array(r-l+1);
         let i=l,j=mid+1;
         let k=0;
         while(i<=mid && j<=r){
             if(compare(arr[i],arr[j])){
                 temp[k++]=arr[i++];
             }else{
                   temp[k++]=arr[j++];
             }
         }
         while(i<=mid){
             temp[k++]=arr[i++];
         }
         while(j<=r){
              temp[k++]=arr[j++];
         }
         
         for(let x=l;x<=r;x++){
               arr[x]=temp[x-l];
         }
    }
    function method(l,r){
        if(l==r) return;
        let mid=Math.floor((l+r)/2);
        method(l,mid);
        method(mid+1,r);
        merge(l,r,compare);
    }
    method(0,arr.length-1);
}

    mergeSort(peopleArray,function(a,b){return a.age<=b.age;});
    
}
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];
sortPeopleByAge(people);


console.log(people);
// // Expected output: [
// //   { name: "Bob", age: 25 },
// //   { name: "Alice", age: 30 },
// //   { name: "Charlie", age: 35 }
// // ]





// 5.)
function filterStudents(studentsArray) {
//   // Your code here
// filter by custom code
const result=[];
for(x of studentsArray){
    if(x.score>=75) result.push(x);
}
return result;
}
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 75 }
];
const highScoringStudents = filterStudents(students);
console.log(highScoringStudents);
// // Expected output: [
// //   { name: "Alice", score: 85 },
// //   { name: "Charlie", score: 75 }
// // ]

// 6.)
function addPrefixToNames(peopleArray) {
  // Your code here
  return peopleArray.map(function(x){
    return {...x,name:`Mr ${x.name}`};
  })
}

const peoplePre = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

const peopleWithPrefix = addPrefixToNames(peoplePre);
console.log(peopleWithPrefix);

// // Expected output: [
// //   { name: "Mr. Alice", age: 30 },
// //   { name: "Mr. Bob", age: 25 },
// //   { name: "Mr. Charlie", age: 35 }
// // ]

// 7.)
function countVowels(str) {
    // use custome code for counting vowels
    function isVowel(ch){
        let vowel="aAeEiIoOuU";
        for(x of vowel) if(x==ch) return false;
        return true;
         
    }
    let ctn=0;
       for(let ch of str){
          if(isVowel(ch)) ctn++;
       }
       return ctn;
      // Your code here
    }
console.log(countVowels("apple"));    // Expected output: 2
console.log(countVowels("banana"));   // Expected output: 3

// 8.)
function titleCase(str) {
  // Your code here
  return str.split(" ").map((x)=>`${x[0].toUpperCase()}${x.slice(1)}`).join(" ")
}

console.log(titleCase("hello world"));    // Expected output: "Hello World"
console.log(titleCase("this is a test")); // Expected output: "This Is A Test"

// 9.)
function countVowels(str) {
  // Your code here
  let ctn=0;
   for(x of str) if("aAeEiIoOuU".includes(x)) ctn++;
   return ctn;
}
console.log(countVowels("apple"));    // Expected output: 2
console.log(countVowels("banana"));   // Expected output: 3

// 10.)
function reverseString(str) {
  // Your code here
  let result="";
  for(let x=str.length-1;x>=0;x--){
    result=result+str[x];
  }
  return result;
}
console.log(reverseString("hello"));   // Expected output: "olleh"
console.log(reverseString("world"));   // Expected output: "dlrow"









