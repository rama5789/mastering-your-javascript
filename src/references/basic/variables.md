# Scope :
* __Scope__ determines the *__accessibility__ (visibility)* of a __variable__.
* Variables defined inside a __Scope__ are not accessible (visible) from outside the __Scope__.
* Variables created inside a __Scope__ starts when __Scope__ starts, and deleted when the __Scope__ is completed.

## Types of Scope :
### Local Scope :
* Local Scope Types: 
    * __Block__ Scope
    * __Function__ Scope
* A JavaScript __Local variable__ is declared *inside a block or function*. It has __Function Scope__. It is accessible within the block or function only. 
* __Local variables__ are created when a function starts, and deleted when the function is completed.
### Global Scope :
* A JavaScript __Global variable__ is declared *outside a function* or declared with __window object__. It has __Global Scope__. It is is accessible from any function.
* In a web browser, __Global variables__ are deleted when the browser window (or tab) closes.
* __Undeclared__ variables are *automatically global*.
* In __Strict Mode__, __Undeclared__ variables are *__not__ automatically global*.

```javascript
// global scope
window.wv1 = 'global_var';
var v = 'global_var';
let l = 'global_let';
const c = 'global_const';

// function scope
function fn(){
    window.wv2 = 'global_var';
    var v = 'function_var';
    let l = 'function_let';
    const c = 'function_const';

    // block scope
    {
        window.wv3 = 'global_var';
        var v = 'block_var'; // accessible outside the block scope
        let l = 'block_let';
        const c = 'block_const';
    }
}
```
# Variables :
* A JavaScript __variable__ is simply a name of __storage location__.

# Declaring Variables :
* __Before ES6__ there were only one way of defining your variables: with the __var__ keyword. 
* *If you did not define them, they would be assigned to the __global(window) object__*. 
* Unless you were in __strict mode__, then you would get an ERROR if your variables were __undefined__.
* __Now, with ES6__, there are 3 ways of defining your variables: __var, let, and const__.

## var :
```javascript
var x = 5.6;
```
* If you use var __outside__ of a __function__, it belongs to the __Global Scope__.
* If you use var __inside__ of a __function__, it belongs to that __Function Scope__.
* If you use var __inside__ of a __block__, i.e. a for loop, the variable is still *accessible outside of that loop block*. 
* var has a __Function Scope__, not a __Block Scope__.

## let :
```javascript
let x = 5.6;
```
* let has a __Block Scope__.
* *let is the block scoped version of var*, and is limited to the block (or expression) where it is defined.
* If you use let inside of a block, i.e. a for loop, the variable is only *accessible inside of that loop block*.

## const :
```javascript
const x = 5.6;
```
* const has a __Block Scope__.
* const is a variable that once it has been created, its *value can never change* i.e. it can not be re-assigned.
* const does NOT define a __constant value__. It defines a __constant reference__ to a value. Hence, __works only__ when the variable is a primitive type, not an object type.

# Types of Variables :
```javascript
// Number Types
var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myFloat = 5.5; // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22; // 64-bit floating-point number
var myNotANumber = NaN;
var NaN_Example = 0/0; // NaN: Division by Zero is not possible
var myInfinity = Infinity;

// Boolean Types
var myBoolean = true; // 1-bit true/false (0 or 1)
var myBoolean2 = false;

// Undefined Types
window.alert(aNotDeclaredVariable); // undefined: variable is not yet declared
var aNotDefinedVariable; // undefined: variable is declared but, not yet defined to anything

// Object Types
var myNull = null; // null: variable is declared with an null or empty value.

var myEmptyArray = [];
var myStringArray = ["apple", "orange", "strawberry"];
var myNumberArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var myRandomArray = [2, "any type works", undefined, null, true, 2.51];

var myEmptyObject = {};
var myUserObject = {
    firstname: "John", 
    lastname: "Doe", 
    fullname: "John Doe",
    address: {
        street: "NY BackStreet",
        country: "USA"
    }
};
var myObjectArray = [{ x:10 },{ x:11 },{ x:12 }];
```
# Variable Hoisting :
* __Hoisting__ is a mechanism in JavaScript that moves the *declaration of variables and functions to the Top*. 
* So, in JavaScript we can use variables and functions before declaring them.
* __JavaScript Hoisting__ is applicable *only for __declaration__ not __initialization__*. It is required to initialize the variables and functions before using their values.

### JavaScript Variable Hoisting :
```javascript
x = 10;  
console.log(x); // 10
console.log(y); // undefined

var x;      // hoisted
var y = 15; // hoisted

// let, const variables aren't hoisted
// let x;           // Aren't hoisted
// let x = 10;      // Aren't hoisted
// const x = 10;    // Aren't hoisted
```
### JavaScript Function Hoisting :
```javascript
const x = fn(4,6);  
console.log(x); // 10
  
function fn(a,b) { // hoisted
    return a+b;  
} 

// Anonymous functions aren't hoisted
// const fn = (a,b) => a+b;  // Aren't hoisted
```