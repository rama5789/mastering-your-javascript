/* Object:
The Object class represents one of JavaScript's "data types". It is used to store various
"keyed collections" and more complex entities. Objects can be created using the "Object()
constructor" or the "object initializer / literal syntax".

Nearly all objects in JavaScript are instances of Object.

# Constructor:
 - Object()
    Creates a new Object object. It is a wrapper for the given value.

# Static methods:
 - Object.assign()
    Copies the values of all enumerable own properties from one or more source objects to a target object.

 - Object.create()
    Creates a new object with the specified prototype object and properties.

 - Object.is()
    Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).

 - Object.entries()
    Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
 - Object.fromEntries()
    Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).
 - Object.keys()
    Returns an array containing the names of all of the given object's own enumerable string properties.
 - Object.values()
    Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

 - Object.freeze()
    Freezes an object. Other code cannot delete or change its properties.
 - Object.isFrozen()
    Determines if an object was frozen.
 - Object.seal()
    Prevents other code from deleting properties of an object.
 - Object.isSealed()
    Determines if an object is sealed.
 - Object.preventExtensions()
    Prevents any extensions of an object.
 - Object.isExtensible()
    Determines if extending of an object is allowed.

 - Object.defineProperty()
    Adds the named property described by a given descriptor to an object.
 - Object.defineProperties()
    Adds the named properties described by the given descriptors to an object.

 - Object.getOwnPropertyDescriptor()
    Returns a property descriptor for a named property on an object.
 - Object.getOwnPropertyDescriptors()
    Returns an object containing all own property descriptors for an object.

 - Object.getOwnPropertyNames()
    Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
 - Object.getOwnPropertySymbols()
    Returns an array of all symbol properties found directly upon a given object.

 - Object.getPrototypeOf()
    Returns the prototype (internal [[Prototype]] property) of the specified object.
 - Object.setPrototypeOf()
    Sets the object's prototype (its internal [[Prototype]] property).

# Instance properties:
 - Object.prototype.constructor
    Specifies the function that creates an object's prototype.
 - Object.prototype.__proto__
    Points to the object which was used as prototype when the object was instantiated.
 - Object.prototype.__noSuchMethod__
    Allows a function to be defined that will be executed when an undefined object member is called as a method.

# Instance methods:
 - Object.prototype.__defineGetter__()
    Associates a function with a property that, when accessed, executes that function and returns its return value.
 - Object.prototype.__defineSetter__()
    Associates a function with a property that, when set, executes that function which modifies the property.

 - Object.prototype.__lookupGetter__()
    Returns the function associated with the specified property by the __defineGetter__() method.
 - Object.prototype.__lookupSetter__()
    Returns the function associated with the specified property by the __defineSetter__() method.

 - Object.prototype.hasOwnProperty()
    Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

 - Object.prototype.isPrototypeOf()
    Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.

 - Object.prototype.propertyIsEnumerable()
    Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.

 - Object.prototype.toLocaleString()
    Calls toString().
 - Object.prototype.toString()
    Returns a string representation of the object.

 - Object.prototype.watch()
    Adds a watchpoint to a property of the object.
 - Object.prototype.unwatch()
    Removes a watchpoint from a property of the object.

 - Object.prototype.valueOf()
    Returns the primitive value of the specified object.

# Object prototypes:
How prototypes help JavaScript in achieving the concepts of Object-Oriented Programming?

# Classes:
JavaScript classes, introduced in ECMAScript 2015, are primarily "syntactical sugar over JavaScript's existing prototype-based inheritance". The class syntax "does not" introduce a new object-oriented inheritance model to JavaScript.
Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

# Hoisting: (pulling up "function declarations")
An important difference between "function declarations and class declarations" is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

const p = new Rectangle(); // ReferenceError
class Rectangle {}

const p = new Rectangle(); // No Error
function Rectangle() {}

*/
'use strict';

console.log('\n\n<------ object.js ----->');

const tag = 'Object';

/* 
    Creating Objects
*/
log(tag, 'create__Empty_Object');
let o1 = new Object();
let o2 = new Object(undefined);
let o3 = new Object(null);
console.log('o1: ', o1);
console.log('o2: ', o2);
console.log('o3: ', o3);

log(tag, 'create__Boolean_Object');
// equivalent to o = new Boolean(true)
let o4 = new Object(true);
// equivalent to o = new Boolean(false)
let o5 = new Object(Boolean());
console.log('o4: ', o4);
console.log('o5: ', o5);

/* 
    Creating Objects using "constructor function" (ES5 Style)
*/
log(tag, 'create__Person_Object-using-constructor-function');
function PersonA(firstName, lastName) {
  // PersonA constructor function
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

const person1 = new PersonA('Virat', 'Kohli'); // PersonA object 1
const person2 = new PersonA('Sachine', 'Tendulkar'); // PersonA object 2
console.log('person1: ', person1);
console.log('person1.fullName(): ', person1.fullName());
console.log('person2: ', person2);
console.log('person2.fullName(): ', person2.fullName());
/* 
https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b

Every object created using the constructor function will have its own copy of properties and methods. It "doesn’t make sense" to have two instances of function "fullName" that do the same thing. Storing separate instances of function for each object results in wastage of memory.We will see as we move forward, how we can solve this issue.

# Prototypes:
When a "function" is created in JavaScript, the JavaScript engine adds a "prototype property" to the function. This prototype property is an object (called a "prototype object") that has a "constructor property" by default. The constructor property points back to the function on which prototype object is a property. We can access the function’s prototype property using "functionName.prototype".

To access the "prototype property" of the PersonA constructor function, use the below syntax:
    PersonA.prototype
To access the "prototype property" of the PersonA constructor function using it's instance, use the below syntax:
    person1.__proto__

Both person1’s "dunder proto or __proto__" property and PersonA.prototype property is equal.

This shows that person1’s dunder proto property and PersonA.prototype are pointing to the same object.Even person2’s dunder proto property is equal to the PersonA.prototype property and they point to the same object. The person1’s and person2’s dunder proto properties point to "PersonA constructor function’s prototype object".

Note:-
The prototype object of the constructor function is shared among all the objects created using the constructor function.
*/
console.log('PersonA.prototype: ', PersonA.prototype);
console.log('person1.__proto__: ', person1.__proto__);
console.log('person2.__proto__: ', person2.__proto__);
console.log(
  'PersonA.prototype === person1.__proto__: ',
  PersonA.prototype === person1.__proto__
);
console.log(
  'PersonA.prototype === person2.__proto__: ',
  PersonA.prototype === person2.__proto__
);
console.log(
  'person1.__proto__ === person2.__proto__: ',
  person1.__proto__ === person2.__proto__
);

/* 
# Prototype Object:
As a "prototype object" is an object, we can attach properties and methods to the prototype object. Thus, enabling all the objects created using the constructor function to share those properties and methods.

*/
function PersonB(firstName, lastName) {
  // PersonB constructor function
  // properties and methods attached to PersonB instance only
  this.firstName = firstName;
  this.lastName = lastName;
  this.strengths = ['Batting']; // No Bug: Always Use this.
}
// properties and methods attached to prototype object
PersonB.prototype.personType = 'Person';
PersonB.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};
PersonB.prototype.nationalities = ['Indian']; // Bug: Never use this.
console.log('PersonB.prototype: ', PersonB.prototype);

const person3 = new PersonB('Yuvraj', 'Singh'); // PersonB object 1
const person4 = new PersonB('Brett', 'Lee'); // PersonB object 2
console.log('person3: ', person3);
console.log('person3.strengths: ', person3.strengths);
// inherited properties
console.log('person3.personType: ', person3.personType);
console.log('person3.fullName(): ', person3.fullName());
console.log('person3.nationalities: ', person3.nationalities);
console.log('person4: ', person4);
console.log('person4.strengths: ', person4.strengths);
// inherited properties
console.log('person4.personType: ', person4.personType);
console.log('person4.fullName(): ', person4.fullName());
console.log('person4.nationalities: ', person4.nationalities);

person3.personType = 'Cricketer'; // overwriting prototype object's personType property
console.log('person3.personType: ', person3.personType);
console.log('person4.personType: ', person4.personType);

person3.nationalities.push('Australian'); // overwriting prototype object's nationalities property (Buggy)
console.log('person3.nationalities: ', person3.nationalities);
console.log('person4.nationalities: ', person4.nationalities);

person3.strengths.push('Bowling');
console.log('person3.strengths: ', person3.strengths);
console.log('person4.strengths: ', person4.strengths);

/* 
    Creating Objects using "Class" (ES6 Style)
*/
log(tag, 'create__Person_Object-using-class');
class PersonC {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.strengths = ['Batting'];
    this.personType = 'Person';
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  static defaultName() {
    return 'Red John';
  }
}
console.log('PersonC.prototype: ', PersonC.prototype);
console.log('PersonC.defaultName(): ', PersonC.defaultName());

const person5 = new PersonC('David', 'Warner');
const person6 = new PersonC('Mitchell', 'Johnson');
console.log('person5: ', person5);
console.log('person5.fullName(): ', person5.fullName());
// console.log('person5.defaultName(): ', person5.defaultName()); // TypeError: person5.defaultName is not a function
console.log('person6: ', person6);
console.log('person6.fullName(): ', person6.fullName());

person5.personType = 'Cricketer';
person5.strengths.push('Bowling');
console.log('person5: ', person5);
console.log('person6: ', person6);

/* 
   Creating Objects "without new operator"
*/
const restaurant = {
  // properties
  name: 'Taj Palace',
  guestCapacity: 75,
  guestCount: 0,
  // methods
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

log(tag, 'create__Object');
console.log('restaurant: ', restaurant);
restaurant.seatParty(72);
console.log(
  'restaurant.checkAvailability(4): ',
  restaurant.checkAvailability(4)
);
restaurant.removeParty(1);
console.log(
  'restaurant.checkAvailability(4): ',
  restaurant.checkAvailability(4)
);
