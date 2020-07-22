# Array :

- The JavaScript **Array class** is a **global object** that is used in the construction of arrays; which are high-level, **list-like objects** and whose prototype has methods to perform **traversal and mutation** operations.
- The **Array class** inherited properties and methods of **Function class** and **Object class**.

# Creating an Array :

## Array literal :

```javascript
// Syntax: let array_name = [item1, item2, ...];

const obj = { x: 1 };

let emptyArr = [];
let arr = [1, 2, 3]; // similar values/objects
let arr2 = [1, 'a', true, obj, arr]; // dissimilar values/objects
```

## Array constructor :

- There is no need to use the JavaScript's built-in array constructor new Array().
- Use [] instead.

```javascript
// Syntax: let array_name = new Array(item1, item2, ...);

const obj = { x: 1 };

let emptyArr = new Array();
let arr = new Array(1, 2, 3); // similar values/objects
let arr2 = new Array(1, 'a', true, obj, arr); // dissimilar values/objects
```

# Array-like Objects :

- JavaScript has **Array-like Objects**, which are _Object representations of Arrays with a length property_.
- **Arrays** use **numbered indexes**, where as, **Objects** use **named indexes**.
- One key difference between Arrays and Array-like Objects is that _**Array-like Objects** inherit from **Object.prototype** instead of **Array.prototype**_. This means that Array-like Objects can't access common Array prototype methods like forEach() , push() , map() , filter() , and slice().

```javascript
let realArray = ['a', 'b', 'c'];
let arrayLikeObject = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

console.log(realArray); // (3) ["a", "b", "c"]
console.log(realArray[1]); // b
console.log(realArray.length); // 3
console.log(arrayLikeObject); // {0: "a", 1: "b", 2: "c", length: 3}
console.log(arrayLikeObject[1]); // b
console.log(arrayLikeObject.length); // 3
```

# Array Static Methods ( Array.method() ) :

## Array.from ( arrayLike [ , mapFn [ , thisArg ] ] ) :

- Creates a _new, **shallow-copied** Array_ instance from an array-like or iterable object.

## Array.isArray ( value ) :

- Determines whether the passed value is an Array.

## Array.of ( element0 [ , element1 [ , ... [ , elementN ] ] ] ) :

- Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

# Array Instance Methods ( arr.method() | Array.prototype.method.call(arr) ) :

## arr.toString () :

- Returns **a string** representing the specified array and its elements.

## arr.join ( [ separator ] ) :

- Creates and returns **a new string** by concatenating all of the elements in an array (or an array-like object), separated by commas(default) or a specified separator string.

## arr.pop () :

- Removes the **last element** from an array and returns that **removed element**.
- This method changes the length of the array.

## arr.push ( element1 [ , ... [ , elementN ] ] ) :

- Adds **one or more elements** to the _end of an array_ and returns the **new length** of the array.

## arr.shift () :

- Removes the **first element** from an array and returns that **removed element**.
- This method changes the length of the array.

## arr.unshift ( element1 [ , ... [ , elementN ] ] ) :

- Adds **one or more elements** to the _beginning of an array_ and returns the **new length** of the array.

## arr.splice ( start [ , deleteCount [ , item1 [ , item2 [ , ... ] ] ] ] ) :

- Changes the contents of an array by **removing or replacing existing elements** and/or adding new elements in place.
- The first parameter defines the position where new elements should be added (spliced in).
- The second parameter defines how many elements should be removed.
- The rest of the parameters define the new elements to be added.
- This method returns an **array with the deleted items**.

## arr.concat ( [ value1 [ , value2 [ , ... [ , valueN ] ] ] ] ) :

- Used to **merge two or more arrays**.
- This method does not change the existing arrays, but instead returns **a new array**.

## arr.slice ( [ start [ , end ] ] ) :

- Returns a **shallow copy** of a portion of an array into **a new array** object selected from start to end (end not included) where start and end represent the index of items in that array.
- The original array will not be modified.

## arr.forEach ( callback ( currentValue [ , index [ , array ] ] ) [ , thisArg ] ) :

- Executes a provided function once for each array element. Returns undefined.

## arr.reverse () :

- Reverses **the array**. The first array element becomes the last, and the last array element becomes the first.

## arr.map ( callback ( currentValue [ , index [ , array ] ] ) [ , thisArg ] ) :

- Creates **a new array** populated with the results of calling a provided function on every element in the calling array.

## arr.filter ( callback ( currentValue [ , index , [ array ] ] ) [ , thisArg ] ) :

- Creates **a new array** with all _elements that pass the test_ implemented by the provided function.

## arr.reduce ( callback ( accumulator, currentValue [ , index [ , array ] ] ) [ , initialValue ] ) :

- Executes a reducer function (that you provide) on each element of the array, resulting in (**reduce** it to) a **single output value**.
- This method works _from left-to-right_ in the array.

## arr.reduceRight ( callback ( accumulator, currentValue [ , index [ , array ] ] ) [ , initialValue ] ) :

- Same as arr.reduce()
- This method works _from right-to-left_ in the array.

## arr.every ( callback ( currentValue [ , index [ , array ] ] ) [ , thisArg ] ) :

- Tests whether _all elements in the array pass the test_ implemented by the provided function.
- It returns **a boolean value**.

## arr.some ( callback ( currentValue [ , index [ , array ] ] ) [ , thisArg ] ) :

- Tests whether _at least one element in the array pass the test_ implemented by the provided function.
- It returns **a boolean value**.

## arr.indexOf ( valueToFind [ , fromIndex ] ) :

- Returns the **first occurrence index** at which a given element can be found in the array, or _-1 if it is not present_.

## arr.lastIndexOf ( valueToFind [ , fromIndex ] ) :

- Returns the **last occurrence index** at which a given element can be found in the array, or _-1 if it is not present_.
- The array is **searched backwards**, starting at fromIndex.

## arr.includes ( valueToFind [ , fromIndex ] ) :

- Determines whether an array includes a certain value among its entries, returning **true or false** as appropriate.

## arr.find ( callback ( currentValue [ , index [ , array ] ] ) [ , thisArg ] ) :

- Returns **the value** of the **first element occurrence** in the provided array that satisfies the provided function.

## arr.findIndex ( callback ( currentValue [ , index [ , array ] ] ) [ , thisArg ] ) :

- Returns **the index** of the **first element occurrence** in the provided array that satisfies the provided function, or _-1 if it is not present_.
