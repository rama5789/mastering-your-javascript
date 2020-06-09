/* AsyncFunction:
The AsyncFunction constructor creates a new async function object. In JavaScript, 
every "asynchronous function" is actually an "AsyncFunction object".

Note that AsyncFunction is "not a global object". It can be obtained with the following code:
Object.getPrototypeOf(async function(){}).constructor

# Syntax:
new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
*/
'use strict';

console.log('\n\n<------ async_function.js ----->');

const tag = 'AsyncFunction';

// Creating an async function from an AsyncFunction() constructor
let AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

// returns a promise
function resolveAfter2Seconds(x) {
  log(tag, 'resolveAfter2Seconds');
  console.log('input: ', x);

  return new Promise((resolve, reject) => {
    // if (x === 5) throw Error("Input can't be 5");  // setTimeout() won't be triggered (Good Coding)
    // if (x === 5) reject("Input can't be 5");  // setTimeout() will be triggered (Dangerous Coding)

    setTimeout(() => {
      log(tag, 'resolveAfter2Seconds.setTimeout');

      if (x === 5) reject("Input can't be 5");
      // setTimeout() will be triggered (Good Coding)
      else resolve(x);
    }, 2000);
  });
}
// returns synchronously
function resolveImmediately(x) {
  log(tag, 'resolveImmediately');
  console.log('input: ', x);

  if (x === 5) throw Error("Input can't be 5");
  return x;
}

const functionArgs = ['x1', 'x2'];

// Method - 1 (Asynchronous code inside)
const functionBody1a = `
    log(tag,'asyncFunc1a');

    return await resolveAfter2Seconds(x1) + await resolveAfter2Seconds(x2);
`;
let asyncFunc1a = new AsyncFunction(functionArgs, functionBody1a);
asyncFunc1a(15, 5)
  .then((result) => {
    console.log('asyncFunc1a__Result: ', result);
  })
  .catch((error) => {
    console.log('asyncFunc1a__Error: ', error);
  });

// Method - 2   (Asynchronous code inside)
async function asyncFunc1b(x1, x2) {
  log(tag, 'asyncFunc1b');

  return (await resolveAfter2Seconds(x1)) + (await resolveAfter2Seconds(x2));
}
asyncFunc1b(25, 5)
  .then((result) => {
    console.log('asyncFunc1b__Result: ', result);
  })
  .catch((error) => {
    console.log('asyncFunc1b__Error: ', error);
  });

// Method - 1   (Synchronous code inside)
const functionBody2 = `
        log(tag,'asyncFunc2a');

        return resolveImmediately(x1) + resolveImmediately(x2);
    `;
let asyncFunc2a = new AsyncFunction(functionArgs, functionBody2);
asyncFunc2a(35, 5)
  .then((result) => {
    console.log('asyncFunc2a__Result: ', result);
  })
  .catch((error) => {
    console.log('asyncFunc2a__Error: ', error);
  });

// Method - 2   (Synchronous code inside)
async function asyncFunc2b(x1, x2) {
  log(tag, 'asyncFunc2b');

  return resolveImmediately(x1) + resolveImmediately(x2);
}
asyncFunc2b(45, 5)
  .then((result) => {
    console.log('asyncFunc2b__Result: ', result);
  })
  .catch((error) => {
    console.log('asyncFunc2b__Error: ', error);
  });
