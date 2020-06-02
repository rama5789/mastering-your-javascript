/* Array:
The JavaScript Array class is a "global object" that is used in the construction of arrays; which are high-level, list-like objects.

Arrays are "list-like objects" whose prototype has methods to perform "traversal and mutation"
operations.
*/
'use strict';

console.log('\n\n<------ array.js ----->');

/* 
    Array Properties:
    - length 
*/

/* Array.length: number of elements in that array

The value of the length property is an integer with a positive sign and a value less than 2 to the 32nd power (2^32) = 4294967296.

*/
const x1 = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log('\nx1.length: ', x1.length);  // o/p-> 4

// const x2 = new Array(4294967296);    // 2 to the 32nd power = 4294967296 
// console.log('\nx2.length: ', x2.length);   // o/p-> RangeError: Invalid array length 

// const x3 = new Array(-100);  // negative sign
// console.log('\nx3.length: ', x3.length);   // o/p-> RangeError: Invalid array length 

const x4 = [];
x4.length = Math.pow(2, 32) - 1;    // set array length less than 2 to the 32nd power 
console.log('\nx4.length: ', x4.length);  // o/p-> 4294967295

const x5 = [1, 2, 3];
console.log('\nx5.length: ', x5.length);    // o/p-> 3
console.log('x5: ', x5);    // o/p-> [ 1, 2, 3 ]
x5.length = 5;  // set array length to 5 while currently 3.
console.log('x5.length: ', x5.length);  // o/p-> 5
console.log('x5: ', x5);    // o/p-> [ 1, 2, <3 empty items> ]
x5.length = 1;  // set array length to 1 while currently 3.
console.log('x5.length: ', x5.length);  // o/p-> 1
console.log('x5: ', x5);    // o/p-> [ 1, 2, <3 empty items> ]

/*
    Array Methods:
-
*/