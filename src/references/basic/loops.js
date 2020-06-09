/* Loop
Synchronous Iteration of items

# while: loops through a block of code while a specified condition is true
A standard while loop will execute until the condition given is false.

# do/while: also loops through a block of code while a specified condition is true
A do...while loop will always execute at least once, regardless of whether the condition is true or false.

# For Loops:
 - for - loops through a block of code a number of times
 - forEach
 - forIn - loops through the properties(keys) of an object
 - forOf - loops through the values of an iterable object

# Continuing a Loop:
When you put the "continue" keyword in a loop, execution jumps to the update expression.

# Breaking a Loop:
When you put the "break" keyword in a loop, looping stops.

# Break and continue labels:
Break and continue statements can be followed by an optional label which works like some kind of a goto statement, resumes execution from the label referenced position.

*/
'use strict';

console.log('\n\n<------ loops.js ----->');

const tag = 'Loop';

const str = 'abcde';
console.log('str: ', str);

const namesArray = ['Bob', 'Alejandro', 'Zandra', 'Anna', 'Bob']; // has duplicates
console.log('namesArray: ', namesArray); // o/p -> (5) ["Bob", "Alejandro", "Zandra", "Anna", "Bob"]

const namesSet = new Set(namesArray); // has unique names; no duplicates
console.log('namesSet: ', namesSet); // o/p -> Set(4) {"Bob", "Alejandro", "Zandra", "Anna"}

const namesMap = new Map();
namesMap.set(100, 'Bob');
namesMap.set(101, 'Alejandro');
namesMap.set(102, 'Zandra');
namesMap.set(103, 'Anna');
console.log('namesMap: ', namesMap); // o/p -> Map(4) {100 => "Bob", 101 => "Alejandro", 102 => "Zandra", 103 => "Anna"}

const friendsArray = ['Jane', 'Doe', 'John', 'Smith', 'Waddern'];
console.log('friendsArray: ', friendsArray); // o/p ->   (5) ["Jane", "Doe", "John", "Smith", "Waddern"]

const friendObject = {
  name: 'Jane',
  age: 23,
  profession: 'Athelete',
  salary: 20000,
};
console.log('friendObject: ', friendObject); // o/p -> {name: "Jane", age: 23, profession: "Athelete", salary: 20000}
const friendObjectKeys = Object.keys(friendObject); // return all the keys
console.log('friendObjectKeys: ', friendObjectKeys); // o/p -> (3) ["name", "age", "profession", "salary"]

/* 
    for loop:
     - loops through a block of code a number of times
*/
{
  log(tag, 'for_loop');
  {
    log(tag, 'a_for_loop_array');

    for (let i = 0; i < friendsArray.length; i++) {
      const friend = friendsArray[i];

      if (friend === 'Doe') continue; // skip 'Doe' and continue looping
      if (friend === 'Smith') break; // stop and exit the loop

      console.log(`index: ${i}, friend: ${friend}`); // o/p[0] -> index: 0, friend: Jane
    }
  }

  {
    log(tag, 'b_for_loop_object');

    for (let i = 0; i < friendObjectKeys.length; i++) {
      const key = friendObjectKeys[i];
      const value = friendObject[key];

      console.log(`index: ${i}, key: ${key}, value: ${value}`); // o/p[0] -> index: 0, key: name, value: Jane
    }
  }
}

/*
    forEach loop:
*/
{
  log(tag, 'forEach_loop');
  {
    log(tag, 'a_forEach_loop_array');

    friendsArray.forEach((friend, i) => {
      // if (friend === 'Doe') continue; // Illegal continue statement
      // if (friend === 'Smith') break;  // Illegal break statement

      console.log(`index: ${i}, friend: ${friend}`); // o/p[0] -> index: 0, friend: Jane
    });
  }

  {
    log(tag, 'b_forEach_loop_object');

    friendObjectKeys.forEach((key, i) => {
      const value = friendObject[key];

      console.log(`index: ${i}, key: ${key}, value: ${value}`); // o/p[0] -> index: 0, key: name, value: Jane
    });
  }
}

/* 
    forIn loop:
     - loops through the "index" of an array | "properties" of an object

    Warning:
     - for...in is intended for iterating over object keys, not array indexes. 
     - Using it to loop through an array is generally discouraged.
     - It also "includes properties from the prototype", so it may be necessary to check if
    the key is within the object using hasOwnProperty . If any attributes in the object are defined by the defineProperty/defineProperties method and set the param enumerable: false, those attributes will be inaccessible.

    Note: AVOID USING forIn loop
*/
{
  log(tag, 'forIn_loop');
  {
    log(tag, 'a_forIn_loop_array');

    for (const i in friendsArray) {
      // DON't USE
      const friend = friendsArray[i];

      if (friend === 'Doe') continue;
      if (friend === 'Smith') break;

      console.log(`index: ${i}, friend: ${friend}`); // o/p[0] -> index: 0, friend: Jane
    }
  }

  {
    log(tag, 'b_forIn_loop_object');

    // make key: `salary` of friendObject Inaccessible
    Object.defineProperty(friendObject, 'salary', {
      enumerable: false,
    });
    for (const key in friendObject) {
      const value = friendObject[key];

      // check if the key of friendObject Accessible
      if (friendObject.hasOwnProperty(key)) {
        console.log(`key: ${key}, value: ${value}`); // o/p[0] -> key: name, value: Jane
      } else {
        console.log(`key is not owned by friendObject`);
      }
    }
  }
}

/* 
    forOf loop:
     - loops through the "values" of an array or an "iterable" object like Arrays, Strings, Maps, Sets, NodeLists etc.
     - loops through the ["index", "values"] of an array or an "iterable" object using entries() method
*/
{
  log(tag, 'forOf_loop');
  {
    log(tag, 'a_forOf_loop_string');

    for (let chr of str) {
      if (chr === 'b') continue;
      if (chr === 'd') break;

      console.log(`chr: ${chr}`); // o/p[0] -> chr: a
    }
  }

  {
    log(tag, 'b_forOf_loop_set');

    for (let name of namesSet) {
      if (name === 'Alejandro') continue;
      if (name === 'Anna') break;

      console.log(`name: ${name}`); // o/p[0] -> name: Bob
    }
    for (let [key, name] of namesSet.entries()) {
      if (name === 'Alejandro') continue;
      if (name === 'Anna') break;

      console.log(`key: ${key}, name: ${name}`); // o/p[0] -> key: Bob, name: Bob
    }
  }

  {
    log(tag, 'c_forOf_loop_map');

    for (const [key, name] of namesMap) {
      // for (const [key, name] of namesMap.entries()) {  // same as above

      if (name === 'Alejandro') continue;
      if (name === 'Anna') break;

      console.log(`key: ${key}, name: ${name}`); // o/p[0] -> key: 100, name: Bob
    }
  }

  {
    log(tag, 'd_forOf_loop_array');

    for (const friend of friendsArray) {
      // index not available

      if (friend === 'Doe') continue;
      if (friend === 'Smith') break;

      console.log(`friend: ${friend}`); // o/p[0] -> friend: Jane
    }
    for (const [i, friend] of friendsArray.entries()) {
      if (friend === 'Doe') continue;
      if (friend === 'Smith') break;

      console.log(`index: ${i}, friend: ${friend}`); // o/p[0] -> index: 0, friend: Jane
    }
  }

  {
    log(tag, 'e_forOf_loop_object');

    for (const key of friendObjectKeys) {
      const value = friendObject[key];

      console.log(`key: ${key}, value: ${value}`); // o/p[0] -> key: name, value: Jane
    }
    for (const [i, key] of friendObjectKeys.entries()) {
      const value = friendObject[key];

      console.log(`index: ${i}, key: ${key}, value: ${value}`); // o/p[0] -> index: 0, key: name, value: Jane
    }
  }
}
