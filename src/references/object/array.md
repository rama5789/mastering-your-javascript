# Array :
The JavaScript __Array class__ is a __global object__ that is used in the construction of arrays; which are high-level, __list-like objects__ and whose prototype has methods to perform __traversal and mutation__ operations.

# Creating an Array :
## Array literal :
```javascript
// Syntax: let array_name = [item1, item2, ...];

const obj = {x: 1};

let emptyArr = [];
let arr = [1, 2, 3];    // similar values/objects
let arr2 = [1, 'a', true, obj, arr];  // dissimilar values/objects
```
## Array constructor :
* There is no need to use the JavaScript's built-in array constructor new Array().
* Use [] instead.
```javascript
// Syntax: let array_name = new Array(item1, item2, ...);

const obj = {x: 1};

let emptyArr = new Array();
let arr = new Array(1, 2, 3);    // similar values/objects
let arr2 = new Array(1, 'a', true, obj, arr);  // dissimilar values/objects
```
# Array-like Objects :
* JavaScript has __Array-like Objects__, which are *Object representations of Arrays with a length property*.
* __Arrays__ use __numbered indexes__, where as, __Objects__ use __named indexes__.
* One key difference between Arrays and Array-like Objects is that *__Array-like Objects__ inherit from __Object.prototype__ instead of __Array.prototype__*. This means that Array-like Objects can't access common Array prototype methods like forEach() , push() , map() , filter() , and slice().
```javascript
let realArray = ['a', 'b', 'c'];
let arrayLikeObject = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

console.log(realArray);                 // (3) ["a", "b", "c"]
console.log(realArray[1]);              // b
console.log(realArray.length);          // 3
console.log(arrayLikeObject);           // {0: "a", 1: "b", 2: "c", length: 3}
console.log(arrayLikeObject[1]);        // b
console.log(arrayLikeObject.length);    // 3
```
# Array Static Methods ( Array.method() ):

## Array.from ( arrayLike [ , mapFn [ , thisArg ] ] ) : 
* Creates a *new, __shallow-copied__ Array* instance from an array-like or iterable object.

## Array.isArray ( value ) :
* Determines whether the passed value is an Array.

## Array.of ( element0 [ , element1 [ , ... [ , elementN ] ] ] ) :
* Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

# Array Instance Methods ( arr.method() | Array.prototype.method.call(arr) ):

## arr.toString () :
* Returns __a string__ representing the specified array and its elements.

## arr.join ( [ separator ] ) :
* Creates and returns __a new string__ by concatenating all of the elements in an array (or an array-like object), separated by commas(default) or a specified separator string.

## arr.pop () :
* Removes the __last element__ from an array and returns that __removed element__. 
* This method changes the length of the array.

## arr.push ( element1 [ , ... [ , elementN ] ] ) :
*  Adds __one or more elements__ to the *end of an array* and returns the __new length__ of the array.

## arr.shift () :
* Removes the __first element__ from an array and returns that __removed element__. 
* This method changes the length of the array.

## arr.unshift( element1 [ , ... [ ,  elementN ] ] ) :
*  Adds __one or more elements__ to the *beginning of an array* and returns the __new length__ of the array.

## arr.splice ( start [ , deleteCount [ , item1 [ , item2 [ , ... ] ] ] ] ) :
* Changes the contents of an array by __removing or replacing existing elements__ and/or adding new elements in place.
* The first parameter defines the position where new elements should be added (spliced in).
* The second parameter defines how many elements should be removed.
* The rest of the parameters define the new elements to be added.
* This method returns an __array with the deleted items__.

## arr.concat ( [ value1 [ , value2 [ , ... [ , valueN ] ] ] ] ) :
* Used to __merge two or more arrays__. 
* This method does not change the existing arrays, but instead returns __a new array__.

## arr.slice ( [ start [ , end ] ] ) :
* Returns a __shallow copy__ of a portion of an array into __a new array__ object selected from start to end (end not included) where start and end represent the index of items in that array.
* The original array will not be modified. 