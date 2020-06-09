/* Array:

*/
'use strict';

console.log('\n\n<------ array.js ----->');

const tag = 'Array';

{
  log(tag, 'array_construction');

  const obj = { x: 1 };

  let emptyArr = []; // array literal
  let emptyArr2 = new Array(); // array constructor
  let emptyArr3 = new Array(3);
  let arr = [1, 2, 3];
  let arr2 = new Array(1, 2, 3);
  let arr3 = [1, 'a', true, obj, arr];

  console.log('emptyArr: ', emptyArr); // []
  console.log('emptyArr2: ', emptyArr2); // []
  console.log('emptyArr3: ', emptyArr3); // [empty × 3]
  console.log('arr: ', arr); // [1, 2, 3]
  console.log('arr2: ', arr2); // [1, 2, 3]
  console.log('arr3: ', arr3); // [1, "a", true, {…}, Array(3)]

  // array properties
  console.log('arr.length: ', arr.length); // 3
  console.log('arr.toString(): ', arr.toString()); // 1,2,3

  // inherited properties
  console.log('Array.prototype: ', Array.prototype); // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
  console.log('arr.__proto__: ', arr.__proto__); // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
  console.log(
    'Array.prototype === arr.__proto__: ',
    Array.prototype === arr.__proto__
  ); // true

  console.log('Array.constructor: ', Array.constructor); // ƒ Function()
  console.log(
    'Array.constructor === Function: ',
    Array.constructor === Function
  ); // true
  console.log('Array: ', Array); // ƒ Array()
  console.log('arr.constructor: ', arr.constructor); // ƒ Array()
  console.log(
    'arr.constructor === Array.constructor: ',
    arr.constructor === Array.constructor
  ); // false
  console.log('arr.constructor === Array: ', arr.constructor === Array); // true
  console.log('arr.constructor === Object: ', arr.constructor === Object); // false

  // typeof
  console.log('typeof Array: ', typeof Array); // function
  console.log('typeof arr: ', typeof arr); // object
  console.log(
    'Object.prototype.toString.call(arr): ',
    Object.prototype.toString.call(arr)
  ); // [object Array]

  // instanceof
  console.log(
    'arr instanceof [Number, String]: ',
    arr instanceof Number,
    arr instanceof String
  ); // false false
  console.log(
    'arr instanceof [Object, Array, Function]: ',
    arr instanceof Object,
    arr instanceof Array,
    arr instanceof Function
  ); // true true false
}

{
  log(tag, 'array_like_objects');

  let realArray = ['a', 'b', 'c'];
  let arrayLikeObject = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    length2: Object.keys(this).length,
  };
  let arrayLikeObject_Properties_Count = Object.keys(arrayLikeObject).length;

  console.log('realArray: ', realArray);
  console.log('realArray[1]: ', realArray[1]); // b
  console.log('realArray.length: ', realArray.length); // 3

  console.log('arrayLikeObject: ', arrayLikeObject);
  console.log('arrayLikeObject[1]: ', arrayLikeObject[1]); // b
  console.log('arrayLikeObject.length: ', arrayLikeObject.length); // 3
  console.log('arrayLikeObject.length2: ', arrayLikeObject.length2); // 202
  console.log(
    'arrayLikeObject_Properties_Count: ',
    arrayLikeObject_Properties_Count
  ); // 5
}

{
  log(tag, 'array_instance_properties');

  {
    log(tag, 'a_array.length');

    console.log('Array.prototype.length: ', Array.prototype.length); // 0

    const arr1 = ['shoes', 'shirts', 'socks', 'sweaters'];
    console.log('arr1.length: ', arr1.length); // 4

    // RangeError: Invalid array length
    // const arr2 = new Array(4294967296);  // 2 to the 32nd power (2^32) = 4294967296
    // const arr3 = new Array(-100);    // negative sign

    const arr4 = [];
    arr4.length = Math.pow(2, 32) - 1; // set array length less than (2^32)
    console.log('arr4.length: ', arr4.length); // 4294967295

    const arr5 = [1, 2, 3];
    console.log('arr5.length: ', arr5.length); // 3
    console.log('arr5: ', arr5); // [ 1, 2, 3 ]
    arr5.length = 5;
    console.log('arr5.length: ', arr5.length); // 5
    console.log('arr5: ', arr5); //  [1, 2, 3, empty × 2]
    arr5.length = 1;
    console.log('arr5.length: ', arr5.length); // 1
    console.log('arr5: ', arr5); //  [ 1 ]
  }
}

{
  log(tag, 'array_static_methods');

  {
    log(tag, 'a_Array.from()');

    const str = 'abc';
    let arrayLikeObject = {
      0: 'a',
      1: 'b',
      2: 'c',
      length: 3,
    };
    const set = new Set(['a', 'b', 'c']);
    const mapper = new Map([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ]);
    const addFn = (x) => x + x;

    console.log('Array.from(str): ', Array.from(str)); // ["a", "b", "c"]
    console.log('Array.from(arrayLikeObject): ', Array.from(arrayLikeObject)); // ["a", "b", "c"]
    console.log('Array.from(set): ', Array.from(set)); // ["a", "b", "c"]
    console.log('Array.from(mapper): ', Array.from(mapper)); // [Array(2), Array(2), Array(2)]
    console.log('Array.from(mapper.keys()): ', Array.from(mapper.keys())); // [1, 2, 3]
    console.log('Array.from(mapper.values()): ', Array.from(mapper.values())); // ["a", "b", "c"]
    console.log('Array.from(str, addFn): ', Array.from(str, addFn)); // ["aa", "bb", "cc"]
  }

  {
    log(tag, 'b_Array.isArray()');

    console.log('Array.isArray([]): ', Array.isArray([])); // true
    console.log(
      'Array.isArray(Array.prototype): ',
      Array.isArray(Array.prototype)
    ); // true

    console.log('Array.isArray(): ', Array.isArray()); // false
    console.log('Array.isArray(undefined): ', Array.isArray(undefined)); // false
    console.log('Array.isArray("John"): ', Array.isArray('John')); // false
    console.log('Array.isArray(1): ', Array.isArray(1)); // false
    console.log('Array.isArray(true): ', Array.isArray(true)); // false
    console.log('Array.isArray({}): ', Array.isArray({})); // false
    console.log('Array.isArray(null): ', Array.isArray(null)); // false
  }

  {
    log(tag, 'c_Array.of()');

    console.log('Array.of(): ', Array.of()); // []
    console.log('Array.of(1): ', Array.of(1)); // [1]
    console.log('Array.of("abc"): ', Array.of('abc')); // ["abc"]
    console.log('Array.of("a", "b", "c"): ', Array.of('a', 'b', 'c')); // ["a", "b", "c"]
    console.log('Array.of(undefined, null): ', Array.of(undefined, null)); // [undefined, null]
  }
}

{
  log(tag, 'array_instance_methods');

  let arr = ['a', 'b', 'c'];
  let arr2 = [4, 5, 6];
  console.log('arr: ', arr); // ["a", "b", "c"]

  const resetArr = () => {
    arr = ['a', 'b', 'c'];
    return arr;
  };

  let arrToString = Array.prototype.toString;
  console.log('arr.toString(): ', arr.toString()); // a,b,c
  console.log('arrToString.bind(arr)(): ', arrToString.bind(arr)()); // a,b,c
  console.log('arrToString.call(arr): ', arrToString.call(arr)); // a,b,c
  console.log('arrToString.apply(arr): ', arrToString.apply(arr)); // a,b,c

  let arrJoin = Array.prototype.join;
  console.log('arr.join(): ', arr.join()); // a,b,c  // default comma separator
  console.log('arr.join(""): ', arr.join('')); // abc
  console.log('arr.join("-"): ', arr.join('-')); // a-b-c
  console.log('arrJoin.bind(arr)("%"): ', arrJoin.bind(arr)('%')); // a%b%c
  console.log('arrJoin.call(arr, "/"): ', arrJoin.call(arr, '/')); // a/b/c
  console.log('arrJoin.apply(arr, ["*"]): ', arrJoin.apply(arr, ['*'])); // a*b*c

  console.log('arr.pop(): ', arr.pop()); // c  => removed last element
  console.log('arr.pop(): ', arr.pop()); // b
  console.log('arr: ', arr); // ["a"]
  console.log('arr.push("b", "c"): ', arr.push('b', 'c')); // 3 => new length
  console.log('arr: ', arr); // ["a", "b", "c"]

  console.log('arr.shift(): ', arr.shift()); // a  => removed first element
  console.log('arr.shift(): ', arr.shift()); // b
  console.log('arr: ', arr); // ["c"]
  console.log('arr.unshift("a", "b")): ', arr.unshift('a', 'b')); // 3 => new length
  console.log('arr: ', arr); // ["a", "b", "c"]

  arr[2] = 'c1';
  console.log('arr: ', arr); // ["a", "b", "c1"]
  arr[arr.length] = 'd';
  console.log('arr: ', arr); // ["a", "b", "c1", "d"]
  // Using delete leave undefined holes in the array. Use pop() or shift() instead.
  delete arr[arr.length - 1];
  console.log('arr: ', arr); // ["a", "b", "c1", empty]

  console.log('resetArr(): ', resetArr()); // ["a", "b", "c"]
  console.log('arr.splice(1, 2, "b1"): ', arr.splice(1, 2, 'b1')); // ["b", "c"] => removed elements
  console.log('arr: ', arr); // ["a", "b1"]
  console.log(
    'arr.splice(1, 1, "b", "c", "d"): ',
    arr.splice(1, 1, 'b', 'c', 'd')
  ); // ["b1"]
  console.log('arr: ', arr); // ["a", "b", "c", "d"]
  console.log('arr.splice(3, 1): ', arr.splice(3, 1)); // ["d"]
  console.log('arr: ', arr); // ["a", "b", "c"]

  console.log('arr.concat(arr2): ', arr.concat(arr2)); // ["a", "b", "c", 4, 5, 6] => new merged array
  console.log('arr: ', arr); // ["a", "b", "c"]
  console.log('arr2: ', arr2); // [4, 5, 6]

  console.log('arr.slice(1): ', arr.slice(1));  // ["b", "c"]
  console.log('arr.slice(1, arr.length): ', arr.slice(1, arr.length));  // ["b", "c"] => same as above
  console.log('arr.slice(1,2): ', arr.slice(1,2));  // ["b"]
  console.log('arr.slice(0,2): ', arr.slice(0,2));  // ["a", "b"]
  console.log('arr: ', arr); // ["a", "b", "c"]
}
