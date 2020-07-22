# Scope :

- **Scope** determines the _**accessibility** (visibility)_ of a **variable**.
- Variables defined inside a **Scope** are not accessible (visible) from outside the **Scope**.
- Variables created inside a **Scope** starts when **Scope** starts, and deleted when the **Scope** is completed.

## Types of Scope :

### Local Scope :

- Local Scope Types:
  - **Block** Scope
  - **Function** Scope
- A JavaScript **Local variable** is declared _inside a block or function_. It has **Function Scope**. It is accessible within the block or function only.
- **Local variables** are created when a function starts, and deleted when the function is completed.

### Global Scope :

- A JavaScript **Global variable** is declared _outside a function_ or declared with **window object**. It has **Global Scope**. It is is accessible from any function.
- In a web browser, **Global variables** are deleted when the browser window (or tab) closes.
- **Undeclared** variables are _automatically global_.
- In **Strict Mode**, **Undeclared** variables are _**not** automatically global_.

```javascript
// global scope
window.wv1 = 'global_var';
var v = 'global_var';
let l = 'global_let';
const c = 'global_const';

// function scope
function fn() {
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

- A JavaScript **variable** is simply a name of **storage location**.

# Declaring Variables :

- **Before ES6** there were only one way of defining your variables: with the **var** keyword.
- _If you did not define them, they would be assigned to the **global(window) object**_.
- Unless you were in **strict mode**, then you would get an ERROR if your variables were **undefined**.
- **Now, with ES6**, there are 3 ways of defining your variables: **var, let, and const**.

## var :

```javascript
var x = 5.6;
```

- If you use var **outside** of a **function**, it belongs to the **Global Scope**.
- If you use var **inside** of a **function**, it belongs to that **Function Scope**.
- If you use var **inside** of a **block**, i.e. a for loop, the variable is still _accessible outside of that loop block_.
- var has a **Function Scope**, not a **Block Scope**.

## let :

```javascript
let x = 5.6;
```

- let has a **Block Scope**.
- _let is the block scoped version of var_, and is limited to the block (or expression) where it is defined.
- If you use let inside of a block, i.e. a for loop, the variable is only _accessible inside of that loop block_.

## const :

```javascript
const x = 5.6;
```

- const has a **Block Scope**.
- const is a variable that once it has been created, its _value can never change_ i.e. it can not be re-assigned.
- const does NOT define a **constant value**. It defines a **constant reference** to a value. Hence, **works only** when the variable is a primitive type, not an object type.

# Types of Variables :

```javascript
// Number Types
var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myFloat = 5.5; // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22; // 64-bit floating-point number
var myNotANumber = NaN;
var NaN_Example = 0 / 0; // NaN: Division by Zero is not possible
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
var myStringArray = ['apple', 'orange', 'strawberry'];
var myNumberArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var myRandomArray = [2, 'any type works', undefined, null, true, 2.51];

var myEmptyObject = {};
var myUserObject = {
  firstname: 'John',
  lastname: 'Doe',
  fullname: 'John Doe',
  address: {
    street: 'NY BackStreet',
    country: 'USA',
  },
};
var myObjectArray = [{ x: 10 }, { x: 11 }, { x: 12 }];
```

# Variable Hoisting :

- **Hoisting** is a mechanism in JavaScript that moves the _declaration of variables and functions to the Top_.
- So, in JavaScript we can use variables and functions before declaring them.
- **JavaScript Hoisting** is applicable _only for **declaration** not **initialization**_. It is required to initialize the variables and functions before using their values.

### JavaScript Variable Hoisting :

```javascript
x = 10;
console.log(x); // 10
console.log(y); // undefined

var x; // hoisted
var y = 15; // hoisted

// let, const variables aren't hoisted
// let x;           // Aren't hoisted
// let x = 10;      // Aren't hoisted
// const x = 10;    // Aren't hoisted
```

### JavaScript Function Hoisting :

```javascript
const x = fn(4, 6);
console.log(x); // 10

function fn(a, b) {
  // hoisted
  return a + b;
}

// Anonymous functions aren't hoisted
// const fn = (a,b) => a+b;  // Aren't hoisted
```
