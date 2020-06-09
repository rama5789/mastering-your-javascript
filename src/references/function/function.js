/* Function:

*/
'use strict';

console.log('\n\n<------ function.js ----->');

const tag = 'Function';

{
  log(tag, 'function_definitions');
  {
    log(tag, 'a_function_declaration');

    function myFn(a, b, c) {
      // function definition | declaration
      console.log('myFn.arguments: ', arguments); // Arguments(2) [4, 6]
      console.log('myFn.arguments.length: ', arguments.length); // 2 -> -> counts received arguments

      return a + b;
    }

    const x = myFn(4, 6);
    console.log('x: ', x); // 10

    // function properties
    console.log('myFn.name: ', myFn.name); // myFn -> function name
    console.log('myFn.length: ', myFn.length); // 3 -> counts function parameters
    console.log('myFn.toString(): ', myFn.toString()); // "function definition" string
    console.log('myFn: ', myFn); // "function definition" string

    // function prototype
    console.log('myFn.prototype: ', myFn.prototype); // {constructor: ƒ}
    console.log('myFn.__proto__: ', myFn.__proto__); // ƒ () { [native code] }
    console.log('myFn.constructor: ', myFn.constructor); // ƒ Function() { [native code] }

    // typeof
    console.log('typeof myFn: ', typeof myFn); // function
    console.log(
      'Object.prototype.toString.call(myFn): ',
      Object.prototype.toString.call(myFn)
    ); // [object Function]

    // instanceof
    console.log(
      'myFn instanceof [Number, Array]: ',
      myFn instanceof Number,
      myFn instanceof Array
    ); // false false
    console.log(
      'myFn instanceof [Object, Function]: ',
      myFn instanceof Object,
      myFn instanceof Function
    ); // true true
    console.log(
      'myFn.constructor === [Object, Function]: ',
      myFn.constructor === Object,
      myFn.constructor === Function
    ); // false true
    console.log(
      'Function.constructor === [Object, Function]: ',
      Function.constructor === Object,
      Function.constructor === Function
    ); // false true
  }

  {
    log(tag, 'b_function_expression');

    const myFn = function (a, b) {
      return a + b;
    };
    const myArrowfn = (a, b) => a + b;

    const x = myFn(4, 6);
    const x2 = myArrowfn(4, 11);

    console.log('x: ', x); // 10
    console.log('x2: ', x2); // 15
  }

  {
    log(tag, 'c_function_constructor');

    const myFn = new Function('a', 'b', 'return a + b');

    const x = myFn(4, 6);
    console.log('x: ', x); // 10
  }
}

{
  log(tag, 'function_hoisting');

  const x = myFn(4, 6);
  console.log('x: ', x); // 10

  // const myFn = new Function('a', 'b', 'return a + b');    // o/p -> ReferenceError: myFn is not defined
  // const myFn = (a, b) => a + b;   // o/p -> ReferenceError: myFn is not defined
  /* const myFn = function (a, b) {  // o/p -> ReferenceError: myFn is not defined
        return a + b;
    }; */
  function myFn(a, b) {
    return a + b;
  }
}

{
  log(tag, 'function_self_invoking_function');

  (function (a, b) {
    // anonymous function
    const x = a + b;
    console.log('x: ', x); // 10
  })(4, 6);

  ((a, b) => {
    // anonymous arrow function
    const x = a + b;
    console.log('x: ', x); // 10
  })(4, 6);

  (function namedIIFE() {
    // named function
    console.log('Error inside IIFE');
    // throw new Error('Error inside IIFE');
  })();

  {
    log(tag, 'a_closure');
    {
      log(tag, 'a_without_closure');

      let counter = 0; // global variable

      function incrementCounter() {
        counter++;
        return counter;
      }
      function compromiseCounter() {
        counter += 10;
      }

      console.log('incrementCounter(): ', incrementCounter()); // 1
      console.log('incrementCounter(): ', incrementCounter()); // 2
      console.log('incrementCounter(): ', incrementCounter()); // 3
      compromiseCounter(); // counter value compromised
      console.log('counter(global): ', counter); // 13
      console.log('incrementCounter(): ', incrementCounter()); // 14 // Unexpected
    }

    {
      log(tag, 'b_with_closure');

      let counter = 0; // global variable

      const incrementCounter = (function () {
        // IIFE
        let counter = 0; // always private variable

        return function () {
          // closure
          counter++;
          return counter;
        };
      })();
      function compromiseCounter() {
        counter += 10;
      }

      console.log('incrementCounter(): ', incrementCounter()); // 1
      console.log('incrementCounter(): ', incrementCounter()); // 2
      console.log('incrementCounter(): ', incrementCounter()); // 3
      compromiseCounter(); // counter value compromised
      console.log('counter(global): ', counter); // 10
      console.log('incrementCounter(): ', incrementCounter()); // 4 // Expected
    }
  }
}

{
  log(tag, 'function_arguments');

  function myConcatFn(separator) {
    console.log('arguments: ', arguments); // o/p -> Arguments(4) [", ", "red", "orange", "blue"]
    console.log('separator: ', separator); // o/p -> ,

    let result = '';
    let i;

    for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
    }
    return result;
  }

  const result = myConcatFn(', ', 'red', 'orange', 'blue');
  console.log('result: ', result); // o/p -> red, orange, blue,
}

{
  log(tag, 'function_parameters');
  {
    log(tag, 'a_function_default_parameters');

    function myFn(a, b) {
      b = typeof b !== 'undefined' ? b : 3;
      return a + b;
    }
    function myFn2(a, b = 4) {
      // default param
      return a + b;
    }

    const x = myFn(2);
    const x2 = myFn2(3);

    console.log('x: ', x); // 5
    console.log('x2: ', x2); // 7
  }

  {
    log(tag, 'b_function_rest_parameters');

    const arr = [1, 2, 3];
    function* generateNumbers() {
      yield 4;
      yield 5;
      yield 6;
    }

    function myFn(multiplier, ...args) {
      // rest params
      return args.map((x) => multiplier * x);
    }

    const x = myFn(2, ...arr, ...generateNumbers(), 7, 8); // spread args
    console.log('x: ', x); // [2, 4, 6, 8, 10, 12, 14, 16]
  }
}

{
  log(tag, 'function_currying');

  function myFn(a, b, c) {
    // un-curried function
    return a + b + c;
  }
  function myFn2(a) {
    // curried function
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  const myFn3 = (a) => (b) => (c) => a + b + c; // curried arrow function

  const x = myFn(2, 3, 5);
  const x2 = myFn2(2)(3)(10);
  const x3 = myFn3(2)(3)(15);

  console.log('x: ', x); // 10
  console.log('x2: ', x2); // 15
  console.log('x3: ', x3); // 20
}

{
  log(tag, 'constructor_function');

  function Person(firstName, lastName) {
    // Constructor function (for creating objects)
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = 'male'; // default value
  }
  // properties to be inherited by all Person objects created via this function
  Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  Person.prototype.fullName2 = () => {
    // "this" is not accessible here
    return this.firstName + ' ' + this.lastName; // return -> undefined undefined
  };

  const person1 = new Person('Virat', 'Kohli'); // new object created
  const person2 = new Person('Sachin', 'Tendulkar');

  // variable type
  console.log('typeof person1: ', typeof person1); // object
  console.log(
    'Object.prototype.toString.call(person1): ',
    Object.prototype.toString.call(person1)
  ); // [object Object]

  // inherited properties
  console.log('person1.prototype: ', person1.prototype); // undefined
  console.log('Person.prototype: ', Person.prototype); // {fullName: ƒ, fullName2: ƒ, constructor: ƒ}
  console.log('person1.__proto__: ', person1.__proto__); // {fullName: ƒ, fullName2: ƒ, constructor: ƒ}
  console.log('person2.__proto__: ', person2.__proto__); // {fullName: ƒ, fullName2: ƒ, constructor: ƒ}
  console.log(
    'Person.prototype === person1.__proto__ === person2.__proto__: ',
    Person.prototype === person1.__proto__,
    person1.__proto__ === person2.__proto__,
    person2.__proto__ === Person.prototype
  ); // true true true

  // function definition
  console.log('Person.toString(): ', Person.toString()); // Person "function definition" string
  console.log('Person: ', Person); // Person "function definition" string
  console.log('person1.constructor: ', person1.constructor); // Person "function definition" string
  console.log('person2.constructor: ', person2.constructor); // Person "function definition" string
  console.log(
    'Person === person1.constructor ===  person2.constructor: ',
    Person === person1.constructor,
    person1.constructor === person2.constructor,
    person2.constructor === Person
  ); // true true true

  console.log(
    'person1 instanceof [Object, Function, Person]: ',
    person1 instanceof Object,
    person1 instanceof Function,
    person1 instanceof Person
  ); // true false true
  console.log(
    'person1.constructor === [Object, Function, Person]: ',
    person1.constructor === Object,
    person1.constructor === Function,
    person1.constructor === Person
  ); // false false true

  // private and inherited property values
  console.log('person1.firstName: ', person1.firstName); // Virat
  console.log('person1.gender: ', person1.gender); // male
  console.log('person1.fullName(): ', person1.fullName()); // Virat Kohli
  console.log('person1.fullName2(): ', person1.fullName2()); // undefined undefined

  person1.firstName = 'Anushka';
  person1.gender = 'female';
  person1.fullName = function () {
    // locally overrides Person.prototype.fullName for person1 object only
    return 'Mrs. ' + this.firstName + ' ' + this.lastName;
  };
  console.log('person1.firstName: ', person1.firstName); // Anushka
  console.log('person1.gender: ', person1.gender); // female
  console.log('person1.fullName(): ', person1.fullName()); // Mrs. Anushka Kohli
  console.log('person2.fullName(): ', person2.fullName()); // Sachin Tendulkar

  person1.__proto__.fullName = function () {
    // globally overrides Person.prototype.fullName for all objects (VERY DANGEROUS BEHAVIOUR)
    return 'Sire. ' + this.firstName + ' ' + this.lastName;
  };
  console.log('person1.fullName(): ', person1.fullName()); // Mrs. Anushka Kohli
  console.log('person2.fullName(): ', person2.fullName()); // Sire. Sachin Tendulkar

  console.log('person1 ', person1);
  console.log('person2 ', person2);
  /* 
        person1:
            - firstName: "Anushka"
            - lastName: "female"
            - gender: "female"
            - fullName: ƒ ()
            - __proto__: Object     // pointing to same object as Person.protoype
                - fullName: ƒ ()
                - fullName2: () => {…}
                - constructor: ƒ Person(firstName, lastName)    // same as Person function definition
                - __proto__: Object
                    - constructor: ƒ Object()
    */
}

{
  log(tag, 'pure_function');

  {
    log(tag, 'a_impure_function');

    const impureFn = (input) => {
      input.a = input.a + 1; // Modifies obj
      return input.a;
    };

    const obj = { a: 0 };
    console.log('obj(pure): ', obj); // {a: 0}

    const x = impureFn(obj);
    console.log('x: ', x); // x:  1
    console.log('obj(impured): ', obj); // {a: 1}
  }

  {
    log(tag, 'b_pure_function');

    const pureFn = (input) => {
      const output = input.a + 1; // Does not modify obj
      return output;
    };

    const obj = { a: 0 };
    console.log('obj(pure): ', obj); // {a: 0}

    const x = pureFn(obj);
    console.log('x: ', x); // x:  1
    console.log('obj(still pure): ', obj); // {a: 0}
  }

  {
    log(tag, 'c_impure_function');

    let a = 1;

    const impureFn = (input) => {
      const output = input * a; // Multiply with variable outside function scope
      return output;
    };

    console.log('impureFn(2)(pure): ', impureFn(2)); // 2

    a++; // a = 2
    console.log('impureFn(2)(impured): ', impureFn(2)); // 4
  }

  {
    log(tag, 'd_pure_function');

    let a = 1;

    const pureFn = (input) => {
      let a = 1;
      const output = input * a; // Multiply with variable inside function scope
      return output;
    };

    console.log('pureFn(2)(pure): ', pureFn(2)); // 2

    a++; // a = 2
    console.log('pureFn(2)(still pure): ', pureFn(2)); // 2
  }
}
