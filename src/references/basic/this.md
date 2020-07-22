# "this" Keyword :

- The **this** keyword is a **reference variable** that refers to the **current object**.
- The **this** keyword _refers to the **object** it belongs to_.
- It has different values depending on where it is used:
  - **Alone**, **this** refers to the **global object**.
  - In a **function**, in _default mode_, **this** refers to the **global object**.
  - In a **function**, in _strict mode_, **this** is **undefined**.
  - In a **method**, **this** refers to the **owner object**.
  - In an **event**, **this** refers to the **element** _that received the **event**_.
  - Methods like bind(), call(), and apply() can refer **this** to **any object**.

### this Alone (Global Context) :

- When **used alone**, _the **owner** is the Global object_, so **this** refers to the **Global object**.
- In a **browser window**, the **Global object** is **[object Window]**.
- In **global context**, variables are declared outside the function. Here, **this** refers to the **window object**.

```javascript
'use strict';

window.gwv = 'gwv';
this.gtv = 'gtv'; // "this" refers to "window" object

console.log(this); // window object
console.log(gwv); // gwv
console.log(gtv); // gtv
```

### this in a Function :

- In Default Mode :
  - In a JavaScript function, the _**owner** of the function_ is the **default binding** for **this**.
  - So, in a function, **this** refers to the **Global object** **[object Window]**.
- In Strict Mode :
  - JavaScript strict mode _does NOT allow_ **default binding**.
  - So, in a function, in strict mode, **this** is **undefined**.

```javascript
'use strict';

function myFn() {
  return this;
}

const x = myFn();

console.log(x); // window object (in default mode)
console.log(x); // undefined (in strict mode)
```

### this in an Object Method :

- In an **object method**, **this** refers to the **object** which is the _**owner** of the method_.

```javascript
// Here, "this" is the person object. (The person object is the "owner" of the methods)
const person = {
  /* object properties */
  id: 101,
  firstName: 'John',
  lastName: 'Doe',
  /* object methods */
  fullName: function () {
    // <= es5 style
    return 'Mr. ' + this.firstName + ' ' + this.lastName;
  },
  fullName2: () => {
    // 'this' is not accessible in arrow functions
    return 'Sire. ' + this.firstName + ' ' + this.lastName;
  },
  fullName3() {
    // >= es6 style
    return 'Boss. ' + this.firstName + ' ' + this.lastName;
  },
};

console.log(person.fullName()); // Mr. John Doe
console.log(person.fullName2()); // Sire. undefined undefined
console.log(person.fullName3()); // Boss. John Doe
```

### this in Event Handlers :

- The _change in the state of an **object**_ is known as an **Event**.
- In HTML, there are various **events** which represents that _some activity is performed by the user or by the browser_. When javascript code is included in HTML, js react over these events and allow the execution. This _process of reacting over the **events**_ is called **Event Handling**. Thus, js handles the HTML events via **Event Handlers**.
- In HTML **event handlers**, **this** refers to the **HTML element** that _received the event_.

```javascript
const btnEl = document.createElement('button');
btnEl.innerHTML = 'Click to Remove Me!';
btnEl.onclick = function () {
  // event handler function
  this.style.display = 'none'; // 'this' refers to btnEl
};

const rootDivEl = document.getElementById('root');
rootDivEl.after(btnEl);
```

### this using (bind, call, apply) Methods :

- When you take a **reference** to a **method** in JavaScript, it usually _doesn't remember the **object** it was originally attached to_.
- If the **method** needs to refer to that **object** as **"this"** it won't be able to, and calling it will probably cause a crash.
- You can use the **.bind() method** on a function to create a wrapper that includes the value of **this** and any number of **leading arguments**.

  ```javascript
  const monitor = {
    threshold: 5,
    check(value) {
      if (value > this.threshold) {
        this.display(`Value(${value}) is too High!`);
      }
    },
    display(message) {
      alert(message);
    },
  };

  // The value of `this` is implied by the method call syntax
  monitor.check(7); // Value(7) is too High!

  const badCheck = monitor.check;
  /* 
      The value of `this` is "window object" and this.threshold is "undefined". 
      So, value > this.threshold is false in Default mode and it throws error 
      in Strict mode.
  */
  badCheck(15); // TypeError: Cannot read property 'threshold' of undefined

  const check = monitor.check.bind(monitor);
  // The value of "this" was explicitly bound to the function.
  check(15); // Value(15) is too High!

  const check8 = monitor.check.bind(monitor, 8);
  // We also bound the argument to "8" here. It can't be re-specified.
  check8(); // Value(8) is too High!
  ```

- Functions have two built-in methods **call and apply** which allow the programmer to supply **arguments** and the **this** variable differently.
- This is useful, because functions that operate on one object (the object that they are a property of) can be re-purposed to operate on another, **compatible object**.

  ```javascript
  const obj = {
    a: 1,
    b: 2,
    set(a, b) {
      this.a = a;
      this.b = b;
    },
  };
  const myObj = {};

  obj.set(3, 7); // normal syntax
  obj.set.call(obj, 3, 7); // equivalent to the above
  obj.set.apply(obj, [3, 7]); // equivalent to the above; note that an array is used
  console.log(obj); // {a: 3, b: 7, set: ƒ}

  // myObj.set(5, 4); // TypeError: myObj.set is not a function
  obj.set.call(myObj, 5, 4); // success; `this` in set() is re-routed to myObj instead of obj
  obj.set.apply(myObj, [5, 4]); // same as above; note the array
  console.log(myObj); // {a: 5, b: 4}
  ```

```javascript
'use strict';

const person = {
  id: 101,
  firstName: 'John',
  lastName: 'Doe',
  getBio(skillLevel = 'good', profession = 'Fielder') {
    return `${this.firstName} is a ${skillLevel} ${profession}`;
  },
};
// create similar person objects
const person1 = { firstName: 'Virat' };

console.log(person.getBio()); // John is a good Fielder

/* 
    person.getBio makes use of the "context(this)". When the function is called as person.getBio(), the context gets passed automatically, and so it correctly logs "John is a good Fielder". When assigning the function to a "variable(unboundGetBio)" though, it loses its "context". See below.
*/
const unboundGetBio = person.getBio;
console.log(unboundGetBio()); // Default mode => // Boss. undefined undefined
console.log(unboundGetBio()); // Strict mode => // TypeError: Cannot read property 'firstName' of undefined

console.log(unboundGetBio); // function definition string
console.log(unboundGetBio.bind(person)); // function definition string
console.log(unboundGetBio.bind(person1)); // function definition string

const boundGetBio = unboundGetBio.bind(person)();
const boundGetBio1 = unboundGetBio.bind(person1)('great', 'Batsman');
console.log(boundGetBio); // John is a good Fielder
console.log(boundGetBio1); // Virat is a great Batsman

const calledGetBio = unboundGetBio.call(person);
const calledGetBio1 = unboundGetBio.call(person1, 'great');
console.log(calledGetBio); // John is a good Fielder
console.log(calledGetBio1); // Virat is a great Fielder

const appliedGetBio = unboundGetBio.apply(person);
const appliedGetBio1 = unboundGetBio.apply(person1, [undefined, 'Batsman']);
console.log(appliedGetBio); // John is a good Fielder
console.log(appliedGetBio1); // Virat is a good Batsman
```
