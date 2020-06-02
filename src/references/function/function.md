# Functions :
* Functions in JavaScript provide organized, reusable code to perform a set of actions. 
* Functions simplify the coding process, prevent redundant logic, and make code easier to follow.

# Function Definitions :
* A __function definition__  is also called a __function declaration__, or a __function statement__.
* JavaScript functions are defined with the __function__ keyword.
* You can use a __function declaration__ or a __function expression__.

### Function Declaration :
* __Declared functions__ are __not executed immediately__. They are __"saved for later use"__, and will be executed later, when they are invoked (called upon).
> * __Semicolons__ are used to separate executable JavaScript statements.
> * Since a *function declaration is not an executable statement*, it is not common to end it with a semicolon.
```javascript
function myFn(a, b) { // function declaration
    return a + b; 
}   

const x = myFn(2,3);    // function invocation
console.log(x); // 5

const fnName = myFn.name;   // function name
console.log(fnName); // myFn
```
### Function Expression :
* A __function expression__ can be stored in a __variable__.
* After a __function expression__ has been stored in a __variable__, the __variable__ can be used as a function.
* The function below is actually an __Anonymous function__ (a function without a name). 
* Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
> * The function below ends with a semicolon because it is a part of an executable statement.
```javascript
const myFn = function (a, b) {  // function expression
    return a + b; 
};  
const myArwfn = (a, b) => a + b;  // arrow function expression

const x = myFn(2,3);  // function invocation
console.log(x); // 5

const x2 = myArwfn(3,4);  // function invocation
console.log(x2); // 7
```

### Function Declaration using "Function Constructor" :
* Functions can also be defined with a *built-in JavaScript function constructor* called __Function()__.
```javascript
const myFn = new Function('a', 'b', 'return a + b');    // function construction

// We actually don't have to use the function constructor. The example above is the same as writing:
function myFn2(a, b) { // function declaration
    return a + b; 
} 

const x = myFn(2,3);    // function invocation
console.log(x); // 5
```
# Function Scope :
* When you define a function, it creates a __scope__.
* Everything defined within the function is not accessible by code outside the function.
* __Nested functions__ are possible in JavaScript and the same rules apply.
* When JavaScript tries to resolve a reference of a variable, it starts looking for it in the current scope. If it cannot find that declaration in the current scope, it climbs up one scope to look for it. This process repeats until the declaration has been found. If the __JavaScript parser__ reaches the global scope and still cannot find the reference, a __reference error__ will be thrown.

# Anonymous Function :
* When a function is defined, you give it a name and then invoke it using that name. This is known as a __Named function__.
* When you define a function this way, the JavaScript runtime stores the function in memory and then creates a reference to that function, using the name you've assigned it.
* When a function is defined without a name, it's known as an __Anonymous function__. 
* The function is stored in memory, but the runtime doesn't automatically create a reference to it for you.
```javascript
/* Usages of Anonymous Functions */

// 1. Assigning an Anonymous Function to a Variable
const myAnoFn = function(a, b){ 
    return a + b; 
};

const x = myAnoFn(2, 3);
console.log(x); // 5

// 2. Supplying an Anonymous Function as a Parameter to Another Function
/* 
    Some functions may accept a reference to a function as a parameter. These are sometimes referred to as "dependency injections" or "callbacks", because it allows the function you are calling to "call back" to your code, giving you an opportunity to change the way the called function behaves.

    It would be tedious, sloppy and unnecessary to create a named function, which would clutter your scope with a function "only needed in this one place" and break the natural flow. See the code below.
*/
const nums = [0,1,2];
let doubledNums = nums.map(function(el){ 
    return el * 2; 
});
console.log(doubledNums); // [0,2,4]

// 3. Returning an Anonymous Function From Another Function
function getHashFn(algorithm){
    if ( algorithm === 'sha1' ) return function(value){ /*...*/ };
    else if ( algorithm === 'md5' ) return function(value){ /*...*/ };
}

const value = 'Secret Value';
const hashFn = getHashFn('sha1');
const hashValue = hashFn(value);
console.log(hashValue); // 12S#$G%sfsds$

// 4. Immediately Invoking an Anonymous Function
/* 
    My initialize function is accessible from global scope.
    There is a risk someone could call it again, probably by accident.
*/
function initializeFn(){
    let foo = '';   // foo is safely hidden within initialize, but...
}

initializeFn();
/* 
    Using an anonymous function, and then immediately invoking it, hides my foo variable and guarantees no one else can call it a second time.
*/
(function(){
    let foo = '';
}()); // <--- the parentheses invokes the function immediately

// 5. Self-Referential Anonymous Functions
/* 
    Sometimes it's useful for an anonymous function to be able to refer to itself. 
    For example, the function may need to recursively call itself or add properties to itself.
*/
// Calculate the Fibonacci value for each number in an array:
let result = [1,2,3,4,5,6,7,8].map(function fib(n){
    return (n <= 2) ? 1 : fib(n - 1) + fib(n - 2);
});
console.log(result); // [1, 1, 2, 3, 5, 8, 13, 21]
```
# Function Hoisting :
* __Hoisting__ is JavaScript's default behavior of *moving Declarations to the Top* of the current __Scope__.
* Hoisting applies to __variable declarations__ and to __function declarations__.
* Because of this, *JavaScript functions can be called before they are declared*.
```javascript
const x = myFn(2,3);    // function invocation
console.log(x); // 5

function myFn(a, b) {   // hoisted
    return a + b; 
}

// Function Expressions or Function Declaration using "Function Constructor" aren't hoisted.
// Reason: Named functions are hoisted while Anonymous functions are not.
const myFn2 = function (a, b) {                         // Aren't hoisted
        return a + b;
};
const myFn3 = (a, b) => a + b;                          // Aren't hoisted
const myFn4 = new Function('a', 'b', 'return a + b');   // Aren't hoisted
```
# Self-Invoking Function Expression :
* Sometimes you *don't want to have your function accessible or, stored as a variable*. You can create an __Immediately Invoked Function Expression__ (IIFE).
* __Function expressions__ can be made __Self-invoking__.
* A __Self-invoking expression__ is *invoked (started) automatically, without being called*.
* __Function expressions__ will execute automatically *if the expression is followed by ()*.
* You CANNOT self-invoke a function declaration.
* You have to add parentheses around the function to indicate that it is a __function expression__.
```javascript
// IIFE are not hoisted
(function (a, b) {  // Self Invoking Anonymous Function
    const x = a + b;
    console.log(x); // 5
})(2, 3);

((a, b) => {    // Self Invoking Anonymous Arrow Function
    const x = a + b;
    console.log(x);  // 5
})(2, 3);

// Named IIFE
(function namedIIFE(a,b) {  // Self Invoking Named Function
    throw new Error('Error in IIFE'); // We can now see the error thrown in 'namedIIFE()'
}());
```
## Closures :
* A __closure__ is a function having access to the __parent scope__, even after the parent function has closed. 
* It makes it possible for a function to have __private variables__.
* Any variables declared inside the __IIFE__ are not visible to the outside world.
```javascript
// Without Closure ===>
var counter = 0;    // global variable

function incrementCounter() {
  counter++;
  return counter;
}
function compromiseCounter() {
    counter += 10;
}

console.log(incrementCounter());    // 1
console.log(incrementCounter());    // 2
console.log(incrementCounter());    // 3
compromiseCounter();    // counter value compromised by this function
console.log(counter);   // 13
console.log(incrementCounter());    // 14   // "Unexpected" counter value

// With Closure ===>
var counter2 = 0;    // global variable

const incrementCounter2 = (function () { // IIFE
    var counter2 = 0;    // always private variable

    return function () {    // closure
        counter2++;         // has access to counter2 even after incrementCounter2() got closed
        return counter2;
    }
})();
function compromiseCounter2() {
    counter2 += 10;
}

console.log(incrementCounter2());    // 1
console.log(incrementCounter2());    // 2
console.log(incrementCounter2());    // 3
compromiseCounter2();    // counter value compromised by this function
console.log(counter2);   // 10
console.log(incrementCounter2());    // 4    // "Expected" counter value 
```
# Function "arguments" Object :
* The __arguments__ of a function are maintained in an __array-like object__. 
```javascript
function myConcatFn(separator) {
    console.log(arguments);  // Arguments(4) [", ", "red", "orange", "blue"]
    
    let result = '';
    let i;

    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}

const result = myConcatFn(', ', 'red', 'orange', 'blue');
console.log(result);  // red, orange, blue,
```
# Function Parameters :
* __Function parameters__ are the *names listed* in the __function definition__.
* __Function arguments__ are the *real values passed to* (and received by) the function.
```javascript
function fn(param1, param2, param3, ...) {  // function parameters
  // code to be executed
}

fn(arg1, arg2, arg3, ...);  // function arguments
```
* Parameter Rules:
    * JavaScript function definitions *do not specify data types* for __parameters__.
    * JavaScript functions *do not perform type checking* on the passed __arguments__.
    * JavaScript functions *do not check the number* of __arguments__ received.
* Parameter Types: 
    * Default Parameters 
    * Rest Parameters

### Default Parameters :
* In JavaScript, __parameters__ of functions default to __undefined__. 
* However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.
* With __default parameters__, a manual check in the function body is no longer necessary. 
```javascript
// Without default parameters
function myFn(a, b) {
    b = typeof b !== 'undefined' ?  b : 1;

    return a + b;
}

const x = myFn(2);
console.log(x); // 3

// With default parameters
function myFn2(a, b = 2) {
    return a + b;
}

const x2 = myFn2(2);
console.log(x2); // 4
```
### Rest Parameters :
* The __rest parameters__(or, remaining parameters) syntax allows us to *represent an indefinite number* of __arguments__ as an array.
* The functions with an *unknown number of "arity" or "arguments"* are called __variadic functions__.
```javascript
function myFn(multiplier, ...args) {
  return args.map(x => multiplier * x);
}

const arr = myFn(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```
# Currying :
* __Currying__ is the transformation of *a function of "n" arity or arguments* into *a sequence of "n" functions taking only one argument*.
* When the values of some arguments are available before others, you can use currying to decompose a function into a series of functions that complete the work in stages, as each value arrives.
```javascript
// regular function
const myFn = (l, w, h) => l * w * h;

// curried function
function myFn2(l) {
    return function(w) {
        return function(h) {
            return l * w * h;
        }
    }
}

// curried arrow function
const myFn3 = l => w => h => l * w * h;

const x = myFn(2, 3, 5);
console.log(x); // 30

const x2 = myFn2(2)(3)(5);
console.log(x2); // 30
```
# Object Constructor Function :
* __Constructor functions__ are functions designed to construct a __new object__. 
* Within a constructor function, the keyword __"this"__ *refers to a newly created __object__* which values can be assigned to. 
* Constructor functions __return__ this __new object__ automatically.
* Constructor functions are invoked using the __"new"__ keyword.
* Constructor functions have a __"prototype" property__ which *points to an object whose properties are __automatically inherited__ by all objects created with that constructor*.
* __Objects__ created by constructor functions have a **"dunder proto" or "\_\_proto__" property**, pointing to the same object that is pointed by Constructor function's __"prototype" property__.
* It means, **Function.prototype === object1.\_\_proto__ === object2.\_\_proto__ === ... so on**.
* This approach of inheriting properties using prototype property is known as __Prototypal Inheritance__.
* An __alternative__ to Constructor functions is to use __Class__ for creating objects.
* __Objects__ created by constructor functions have a __"constructor" property__ on their __prototype__, which points to the function used to create them.
* __Objects__ created by constructor functions are __instances__ of the *constructor function* by the __instanceof__ operator.
```javascript
function Person(firstName, lastName) {  // Constructor function (for creating objects)
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = 'male'; // default value
}
// properties to be inherited by all Person objects
Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
};
Person.prototype.fullName2 = () => {    // "this" is not accessible here for some reason
    return this.firstName + ' ' + this.lastName;    // always returns -> undefined undefined
};

// create new Person objects
const person1 = new Person('Virat', 'Kohli');
const person2 = new Person('Sachin', 'Tendulkar');

// private and inherited property values
console.log(person1.firstName);  // Virat
console.log(person1.gender);    // male
console.log(person1.fullName());    // Virat Kohli
console.log(person1.fullName2());  // undefined undefined

person1.firstName = 'Anushka';
person1.gender = 'female';
person1.fullName = function () {    // locally overrides Person.prototype.fullName for person1 object only
    return 'Mrs. ' + this.firstName + ' ' + this.lastName;
};
console.log(person1.firstName);  // Anushka
console.log(person1.gender);    // female
console.log(person1.fullName());    // Mrs. Anushka Kohli
console.log(person2.fullName());    // Sachin Tendulkar

person1.__proto__.fullName = function () {    // globally overrides Person.prototype.fullName for all objects (VERY DANGEROUS BEHAVIOUR)
    return 'Sire. ' + this.firstName + ' ' + this.lastName;
};
console.log(person1.fullName());    // Mrs. Anushka Kohli
console.log(person2.fullName());    // Sire. Sachin Tendulkar
/* 
    person1:
        - firstName: "Anushka"
        - lastName: "female"
        - gender: "female"
        - fullName: ƒ ()    // accessible by only person1 object
        - __proto__: Object     // pointing to same object as Person.protoype
            - fullName: ƒ ()    // accessible by all Person objects
            - fullName2: () => {…}  
            - constructor: ƒ Person(firstName, lastName)    // same as Person function definition
            - __proto__: Object
                - constructor: ƒ Object()
*/
```
# Higher Order Function :
* In general, *functions that operate on other functions*, either by taking them as arguments or by returning them (or both), are called __Higher-order functions__.

# Pure Functions :
* A basic __principle of functional programming__ is that it avoids changing the application state (__statelessness__) and variables outside its scope (__immutability__).
* __Pure functions__ are functions that:
    1. with a given input, always return the same output.
    2. they do not rely on any variable outside their scope.
    3. they do not modify the state of the application (__no side effects__).
> Pure functions must not change any variable outside their scope.
```javascript
// Impure function
const impureFn = (input) => {
    input.a = input.a + 1;  // Modifies obj which is out of it's scope
    return input.a;
};

const obj = { a: 0 };
console.log(obj);   // {a: 0}   // pure object

const x = impureFn(obj);
console.log(x); // x:  1
console.log(obj);   // {a: 1}   // object is impured by impureFn()

// Pure function
const pureFn = (input) => {
    const output = input.a + 1; // Does not modify obj which is out of it's scope
    return output;
};

const obj2 = { a: 0 };
console.log(obj2);  // {a: 0}   // pure object

const x2 = pureFn(obj2);
console.log(x2);    // x:  1
console.log(obj2);  // {a: 0}   // object is still pure like honey
```
> Pure functions must not rely on variables outside their scope.
```javascript
// Impure function
let a = 1;

const impureFn = (input) => {
    const output = input * a;  // Multiply with variable outside function scope
    return output;
};

console.log(impureFn(2));   // 2
a++; // a = 2
console.log(impureFn(2));   // 4    // output is impured by variable 'a'

// Pure function
let a2 = 1;

const pureFn = (input) => {
    let a = 1;
    const output = input * a;   // Multiply with variable inside function scope
    return output;
};

console.log(pureFn(2)); // 2
a2++; // a = 2
console.log(pureFn(2)); // 2    // output is still pure like honey
```