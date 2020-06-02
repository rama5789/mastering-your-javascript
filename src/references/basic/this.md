# "this" Keyword :  
* The __this__ keyword is a __reference variable__ that refers to the __current object__.
* The __this__ keyword *refers to the __object__ it belongs to*.
* It has different values depending on where it is used:
    * __Alone__, __this__ refers to the __global object__.
    * In a __function__, in *default mode*, __this__ refers to the __global object__.
    * In a __function__, in *strict mode*, __this__ is __undefined__.
    * In a __method__, __this__ refers to the __owner object__.
    * In an __event__, __this__ refers to the __element__ *that received the __event__*.
    * Methods like bind(), call(), and apply() can refer __this__ to __any object__.

### this Alone (Global Context) :
* When __used alone__, *the __owner__ is the Global object*, so __this__ refers to the __Global object__.
* In a __browser window__, the __Global object__ is __[object Window]__.
* In __global context__, variables are declared outside the function. Here, __this__ refers to the __window object__.
```javascript
'use strict';

window.gwv = 'gwv';
this.gtv = 'gtv';    // "this" refers to "window" object

console.log(this);  // window object
console.log(gwv);   // gwv
console.log(gtv);   // gtv
```
### this in a Function :
* In Default Mode :
    * In a JavaScript function, the *__owner__ of the function* is the __default binding__ for __this__.
    * So, in a function, __this__ refers to the __Global object__ __[object Window]__.
* In Strict Mode :
    * JavaScript strict mode *does NOT allow* __default binding__.
    * So, in a function, in strict mode, __this__ is __undefined__.
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
* In an __object method__, __this__ refers to the __object__ which is the *__owner__ of the method*.
```javascript
// Here, "this" is the person object. (The person object is the "owner" of the methods)
const person = {
    /* object properties */
    id: 101,
    firstName: 'John',
    lastName: 'Doe',
    /* object methods */
    fullName: function () { // <= es5 style
        return 'Mr. ' + this.firstName + ' ' + this.lastName;
    },
    fullName2: () => {  // 'this' is not accessible in arrow functions
        return 'Sire. ' + this.firstName + ' ' + this.lastName;
    },
    fullName3() {   // >= es6 style
        return 'Boss. ' + this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName()); // Mr. John Doe
console.log(person.fullName2());    // Sire. undefined undefined
console.log(person.fullName3());    // Boss. John Doe
```
### this in Event Handlers :
* The *change in the state of an __object__* is known as an __Event__.
* In HTML, there are various __events__ which represents that *some activity is performed by the user or by the browser*. When javascript code is included in HTML, js react over these events and allow the execution. This *process of reacting over the __events__* is called __Event Handling__. Thus, js handles the HTML events via __Event Handlers__.
* In HTML __event handlers__, __this__ refers to the __HTML element__ that *received the event*.
```javascript
const btnEl = document.createElement('button');
btnEl.innerHTML = 'Click to Remove Me!';
btnEl.onclick = function () {   // event handler function
    this.style.display = 'none';    // 'this' refers to btnEl
};

const rootDivEl = document.getElementById('root');
rootDivEl.after(btnEl);
```
### this using (bind, call, apply) Methods :
*  When you take a __reference__ to a __method__ in JavaScript, it usually *doesn't remember the __object__ it was originally attached to*. 
* If the __method__ needs to refer to that __object__ as __"this"__ it won't be able to, and calling it will probably cause a crash.
* You can use the __.bind() method__ on a function to create a wrapper that includes the value of __this__ and any number of __leading arguments__.
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
        }
    };

    // The value of `this` is implied by the method call syntax
    monitor.check(7);   // Value(7) is too High!

    const badCheck = monitor.check;
    /* 
        The value of `this` is "window object" and this.threshold is "undefined". 
        So, value > this.threshold is false in Default mode and it throws error 
        in Strict mode.
    */
    badCheck(15);   // TypeError: Cannot read property 'threshold' of undefined

    const check = monitor.check.bind(monitor);
    // The value of "this" was explicitly bound to the function.
    check(15);  // Value(15) is too High!

    const check8 = monitor.check.bind(monitor, 8);
    // We also bound the argument to "8" here. It can't be re-specified.
    check8();   // Value(8) is too High!
    ```
* Functions have two built-in methods __call and apply__ which allow the programmer to supply __arguments__ and the __this__ variable differently.
* This is useful, because functions that operate on one object (the object that they are a property of) can be re-purposed to operate on another, __compatible object__.
    ```javascript
    const obj = {
        a: 1,
        b: 2,
        set(a, b) {
            this.a = a;
            this.b = b;
        }
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
    }
};
// create similar person objects
const person1 = { firstName: 'Virat' };

console.log(person.getBio());   // John is a good Fielder

/* 
    person.getBio makes use of the "context(this)". When the function is called as person.getBio(), the context gets passed automatically, and so it correctly logs "John is a good Fielder". When assigning the function to a "variable(unboundGetBio)" though, it loses its "context". See below.
*/
const unboundGetBio = person.getBio;
console.log(unboundGetBio());   // Default mode => // Boss. undefined undefined
console.log(unboundGetBio());   // Strict mode => // TypeError: Cannot read property 'firstName' of undefined

console.log(unboundGetBio);                 // function definition string
console.log(unboundGetBio.bind(person));    // function definition string
console.log(unboundGetBio.bind(person1));   // function definition string

const boundGetBio = unboundGetBio.bind(person)();
const boundGetBio1 = unboundGetBio.bind(person1)('great', 'Batsman');
console.log(boundGetBio);   // John is a good Fielder
console.log(boundGetBio1);  // Virat is a great Batsman

const calledGetBio = unboundGetBio.call(person);
const calledGetBio1 = unboundGetBio.call(person1, 'great');
console.log(calledGetBio);  // John is a good Fielder
console.log(calledGetBio1); // Virat is a great Fielder

const appliedGetBio = unboundGetBio.apply(person);
const appliedGetBio1 = unboundGetBio.apply(person1, [undefined, 'Batsman']);
console.log(appliedGetBio);     // John is a good Fielder
console.log(appliedGetBio1);    // Virat is a good Batsman
```