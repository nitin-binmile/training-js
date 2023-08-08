// callbacks

function doSomething(callback) {
    setTimeout(function() {
      console.log("Task done!");
      callback();
    }, 1000);
  }
  
  function onComplete() {
    console.log("Callback executed.");
  }
  
  doSomething(onComplete);
  

// Promicess

function doSomething() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve("Task done!");
        } else {
          reject("Something went wrong!");
        }
      }, 1000);
    });
  }

  
  doSomething()
    .then(result => console.log(result))
    .catch(error => console.error(error));
  
// Promises Chaining
    function stepOne() {
        return new Promise(resolve => setTimeout(() => resolve("Step One done!"), 1000));
      }
      
      function stepTwo(result) {
        return new Promise(resolve => setTimeout(() => resolve(result + " Step Two done!"), 1000));
      }
      
      stepOne()
        .then(stepTwo)
        .then(finalResult => console.log(finalResult));
      
// error handling in Promices

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = false;
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data!");
        }
      }, 1000);
    });
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async / Await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function doSomething() {
    await delay(1000);
    console.log("Task done!");
  }
  
  doSomething();

  
  // Object Constructor and Prototype

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
  
  const person1 = new Person('nitin', 23);
  person1.sayHello();
  