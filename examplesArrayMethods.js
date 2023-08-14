// 1. concat()
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray);

// 2. push()
const numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);

// 3. pop()
const fruits = ['apple', 'banana', 'orange'];
const removedFruit = fruits.pop();
console.log(removedFruit);

// 4. unshift()
const colors = ['red', 'green'];
colors.unshift('blue');
console.log(colors);

// 5. shift()
const weekdays = ['Monday', 'Tuesday', 'Wednesday'];
const firstDay = weekdays.shift();
console.log(firstDay);

// 6. splice()
const animals = ['elephant', 'lion', 'tiger'];
animals.splice(1, 1, 'leopard', 'cheetah');
console.log(animals);

// 7. slice()
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.slice(1, 4);
console.log(newArray);

// 8. join()
const elements = ['one', 'two', 'three'];
const joinedString = elements.join(', ');
console.log(joinedString);

// 9. indexOf()
const fruitsArray = ['apple', 'banana', 'orange'];
const index = fruitsArray.indexOf('banana');
console.log(index);

// 10. lastIndexOf()
const repeatedArray = [1, 2, 3, 2, 1];
const lastIndex = repeatedArray.lastIndexOf(2);
console.log(lastIndex);

// 11. reverse()
const originalOrder = [1, 2, 3, 4, 5];
const reversedOrder = originalOrder.reverse();
console.log(reversedOrder);

// 12. sort()
const unorderedArray = [5, 2, 8, 1, 3];
const sortedArray = unorderedArray.sort();
console.log(sortedArray);
const reverseSort=unorderedArray.reverse();
console.log(reverseSort);

// 13. map()
const numbersArray = [1, 2, 3, 4, 5];
const squaredArray = numbersArray.map(num => num ** 2);
console.log(squaredArray);
const cubedArray = numbersArray.map(num => num ** 3);
console.log(cubedArray);

// 14. filter()
const evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numbersArray.filter(num=>num&1);
console.log(oddNumbers);
// 15. reduce()
const sum = numbersArray.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 16. forEach()
fruitsArray.forEach(fruit => console.log(fruit));

// 17. every()
const allPositive = numbersArray.every(num => num > 0);
console.log(allPositive);
const allNegative = numbersArray.every(num=> num < 0);
console.log(allNegative);

// 18. some()
const hasNegative = numbersArray.some(num => num < 2);
console.log(hasNegative);

// 19. find()
const foundNumber = numbersArray.find(num => num > 3);
console.log(foundNumber);

// 20. findIndex()
const foundIndex = numbersArray.findIndex(num => num > 3);
console.log(foundIndex);

// 21. includes()
const includesTwo = numbersArray.includes(2);
console.log(includesTwo);

// 22. isArray()
const isArrayCheck = Array.isArray(numbersArray);
console.log(isArrayCheck);

// 23. fill() very useful for creating arrays with default values
const fillArray = new Array(5).fill(0);
console.log(fillArray);

// 24. flat() very useful for transforming arrays into 1d arrays
const nestedArray = [1, [2, 3], [4, [5, 6,[1,2,3]]]];
const flatArray = nestedArray.flat(3);
console.log(flatArray);

// 25. flatMap() 
const words = ['Hello', 'world'];
const letters = words.flatMap(word => word.split(''));
console.log(letters);

// 26. from()
const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
const convertedArray = Array.from(arrayLike);
console.log(convertedArray);

// 27. keys()
const keysIterator = colors.keys();
for (const key of keysIterator) {
  console.log(key);
}

// 28. values()
const valuesIterator = colors.values();
for (const value of valuesIterator) {
  console.log(value);
}

// 29. entries()
const entriesIterator = colors.entries();
for (const [index, value] of entriesIterator) {
  console.log(`Index: ${index}, Value: ${value}`);
}

// 30. toLocaleString()
const numberArray = [1000, 2000, 3000];
const localizedArray = numberArray.toLocaleString();
console.log(localizedArray);

// 31. toString()
const stringifiedArray = numberArray.toString();
console.log(stringifiedArray);

// 32. copyWithin()
const copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 2, 4);
console.log(copyArray);

// 33. of()
const arrayWithValues = Array.of(1, 2, 3);
console.log(arrayWithValues);

// 34. includes()
const includedCheck = numbersArray.includes(4);
console.log(includedCheck);

// 35. at()
const arrayWithValues2 = [10, 20, 30, 40, 50];
const valuesAtIndexes = Array.of(arrayWithValues2[1], arrayWithValues2[3],arrayWithValues2[4]);
console.log(valuesAtIndexes);

// 36. reverse()
const originalOrder2 = ['a', 'b', 'c'];
const reversedOrder2 = originalOrder2.reverse();
console.log(reversedOrder2);

// 37. shallow copy
const originalOrder3 = ['a', 'b', 'c'];
const reversedOrder3 = originalOrder3;
console.log(reversedOrder3);
reversedOrder3[1]='a';
// reversedOrder3 is changed and due to shallow copying originalOrder3 also changes
console.log(originalOrder3);

// 38 Deep copy
const originalOrder4 = ['a', 'b', 'c'];
const deepCopy = Object.assign([], originalOrder4);
console.log(deepCopy);
deepCopy[1]='a';

// changes are not reflected in original as it deep copy of original
console.log(originalOrder4);

