/* Constants:

# undefined: window.undefined
"undefined" is the absence of a value in the compiler, like the case of an "unassigned variable".
"undefined" is a "global value" that represents the absence of an assigned value.
Setting a variable to "undefined" means the variable effectively does not exist.

# null:
"null" is used for representing the intentional absence of an object value and is a primitive value. Unlike undefined, it is not a property of the global object.
null is an object that indicates that a variable has been explicitly assigned "no value".

# NaN: window.NaN
NaN stands for "Not a Number." When a mathematical function or operation in JavaScript cannot return a specific number, it returns the value NaN instead.
It is a property of the global object, and a reference to Number.NaN.

# Testing for NaN using isNaN(): 
## window.isNaN()
The global function isNaN() can be used to check if a certain value or expression evaluates to NaN . This function (in
short) first checks if the value is a number, if not tries to convert it, and then checks if the resulting value is NaN .
For this reason, this testing method may cause confusion.

# Infinity and -Infinity:
Infinity is a property of the global object (therefore a global variable) that represents mathematical infinity. It is a reference to Number.POSITIVE_INFINITY.
To get -Infinity you negate Infinity, or get a reference to it in Number.NEGATIVE_INFINITY.

Note that Number.EPSILON represents the different between one and the smallest Number greater than one, and thus the smallest possible difference between two different Number values. One reason to use this is due to the nature of how numbers are stored by JavaScript. See Check the equality of two numbers.

## Number.isNaN():
In ECMAScript 6, the Number.isNaN() function has been implemented primarily to avoid the problem of
window.isNaN() of forcefully converting the parameter to a number. Number.isNaN(), indeed, doesn't try to
convert the value to a number before testing. This also means that only values of the type number, that are
also NaN , return true (which basically means only Number.isNaN(NaN) ).

When the Number.isNaN is called with one argument number , the following steps are taken:
1. If Type(number) is not Number, return false.
2. If number is NaN , return true.
3. Otherwise, return false.

*/
'use strict';

console.log('\n\n<------ constants.js ----->');

const tag = 'Constants';

{
    log(tag, 'undefined');

    let u;  // undefined variable
    let o = { a: 'a' }; // o.b doesn't exist;
    function fn() { // returns undefined
        return;
        // return undefined; // same as return;
    }
    function fn2(fn2Param) {    // returns undefined
        console.log('fn2Param === undefined: ', fn2Param === undefined);
    }

    console.log('Is undefined a Global variable?: ', window.hasOwnProperty(undefined));  // true
    console.log('window.undefined: ', window.undefined);    // undefined
    console.log('undefined: ', undefined);  // undefined
    console.log('typeof undefined: ', typeof undefined);    // undefined

    console.log('undefined == null: ', undefined == null);  // true
    console.log('undefined === null: ', undefined === null);    // false  

    console.log('undefined == false: ', undefined == false);    // false
    console.log('undefined === false: ', undefined === false);  // false
    console.log('undefined == 0: ', undefined == 0);    // false
    console.log('undefined === 0: ', undefined === 0);  // false

    console.log('u === undefined: ', u === undefined);  // true
    console.log('o.b === undefined: ', o.b === undefined);  // true

    console.log('fn() === undefined: ', fn() === undefined);    // true
    fn2();  // true
    fn2('param1');   // false
};

{
    log(tag, 'null');

    let u1 = null;
    function fn3() {    // returns null 
        return null;
    }

    console.log('Is null a Global variable?: ', window.hasOwnProperty(null));  // false
    console.log('null: ', null);    // null
    console.log('typeof null: ', typeof null);    // object

    console.log('null == undefined: ', null == undefined);  // true
    console.log('null === undefined: ', null === undefined);    // false  

    console.log('null == false: ', null == false);    // false
    console.log('null === false: ', null === false);  // false
    console.log('null == 0: ', null == 0);    // false
    console.log('null === 0: ', null === 0);  // false

    console.log('u1 === null: ', u1 === null);  // true

    console.log('fn3() === null: ', fn3() === null);    // true
};

{
    log(tag, 'Infinity');

    console.log('Is Infinity a Global variable?: ', window.hasOwnProperty(Infinity));  // true
    console.log('window.Infinity: ', window.Infinity);    // Infinity
    console.log('typeof Infinity: ', typeof Infinity);    // number

    console.log('Infinity: ', Infinity);  // Infinity
    console.log('-Infinity: ', -Infinity);  // -Infinity
    console.log('Infinity + Infinity: ', (Infinity + Infinity));  // Infinity
    console.log('Infinity - Infinity: ', (Infinity - Infinity));  // NaN
    console.log('Infinity * Infinity: ', (Infinity * Infinity));  // Infinity
    console.log('Infinity / Infinity: ', (Infinity / Infinity));  // NaN

    console.log('1 / 0: ', (1 / 0));  // Infinity
    console.log('-(1 / 0): ', -(1 / 0));  // -Infinity
    console.log('1 / Infinity: ', (1 / Infinity));  // 0

    console.log('Number.POSITIVE_INFINITY: ', Number.POSITIVE_INFINITY);    // Infinity
    console.log('Number.NEGATIVE_INFINITY: ', Number.NEGATIVE_INFINITY);    // -Infinity

    console.log('Math.pow(2, 1023): ', Math.pow(2, 1023));  // 8.98846567431158e+307
    console.log('Math.pow(2, 1024): ', Math.pow(2, 1024));  // Infinity
    console.log('Number.MAX_VALUE: ', Number.MAX_VALUE);    // 1.7976931348623157e+308
    console.log('Number.MAX_VALUE * 2: ', (Number.MAX_VALUE * 2));    // Infinity
    console.log('Number.MAX_SAFE_INTEGER: ', Number.MAX_SAFE_INTEGER);  // 9007199254740991
    console.log('Number.MAX_SAFE_INTEGER * Math.pow(2, 971): ', Number.MAX_SAFE_INTEGER * Math.pow(2, 971));    // 1.7976931348623157e+308
    console.log('Number.MAX_SAFE_INTEGER * Math.pow(2, 972): ', Number.MAX_SAFE_INTEGER * Math.pow(2, 972));

    console.log('Number.MIN_VALUE: ', Number.MIN_VALUE);    // 5e-324
    console.log('Number.MIN_SAFE_INTEGER: ', Number.MIN_SAFE_INTEGER);  // -9007199254740991
    console.log('Number.EPSILON: ', Number.EPSILON);    // 2.220446049250313e-16

    console.log('0 === 0: ', 0 === 0);  // true
    console.log('0 === -0: ', 0 === -0);  // true
    console.log('Infinity === Infinity: ', Infinity === Infinity);    // true
    console.log('-Infinity === Infinity: ', -Infinity === Infinity);    // false
    console.log('Infinity === Number.POSITIVE_INFINITY: ', Infinity === Number.POSITIVE_INFINITY);  // true
    console.log('-Infinity === Number.NEGATIVE_INFINITY: ', -Infinity === Number.NEGATIVE_INFINITY);  // true
};

{
    log(tag, 'NaN');

    console.log('Is NaN a Global variable?: ', window.hasOwnProperty(NaN));  // true
    console.log('window.NaN: ', window.NaN);
    console.log('NaN: ', NaN);    // NaN
    console.log('typeof NaN: ', typeof NaN);    // number <WTF?>

    console.log('0 / 0: ', (0 / 0));    // NaN
    console.log('[1] * 2: ', [1] * 2);  // 2
    console.log('[1] * [2]: ', [1] * [2]);  // 2
    console.log('[1, 2] * [2]: ', [1, 2] * [2]);    // NaN
    console.log('"a" + "b": ', "a" + "b");    // ab
    console.log('"a" - "b": ', "a" - "b");    // NaN
    console.log('"a" * "b": ', "a" * "b");    // NaN
    console.log('"a" / "b": ', "a" / "b");    // NaN
    console.log('Infinity - Infinity: ', Infinity - Infinity);  // NaN
    console.log('Infinity / Infinity: ', (Infinity / Infinity));  // NaN
    console.log('Math.floor("a"): ', Math.floor("a"));  // NaN
    console.log('Math.sqrt(-1): ', Math.sqrt(-1));  // NaN

    // Don't check for NaN using the equality operator. Use isNaN() instead.
    console.log('NaN == NaN: ', NaN == NaN);  // false
    console.log('NaN === NaN: ', NaN === NaN);    // false

    // NEVER USE this. I BEG you.
    log(tag, 'window.isNaN()');
    console.log('NEVER USE window.isNaN()....');

    // Satisfies as NaN ---->
    console.log('window.isNaN(): ', window.isNaN());
    console.log('isNaN(): ', isNaN());    // true
    console.log('isNaN(undefined): ', isNaN(undefined));    // true

    console.log('isNaN(NaN): ', isNaN(NaN));    // true

    console.log('isNaN("10$"): ', isNaN("10$"));    // true
    console.log('isNaN("hello"): ', isNaN("hello"));    // true

    console.log('isNaN({}): ', isNaN({}));    // true
    console.log('isNaN({ x: "a" }): ', isNaN({ x: "a" }));  // true

    console.log('isNaN([1, 2]): ', isNaN([1, 2]));    // true
    console.log('isNaN(["a", "b"]): ', isNaN(["a", "b"]));  // true

    console.log('isNaN(function(){}): ', isNaN(function () { }));    // true
    console.log('isNaN(function(){ return "a"; }): ', isNaN(function () { return "a"; }));   // true

    // NOT Satisfies as NaN ---->
    console.log('isNaN(1): ', isNaN(1));    // false
    console.log('isNaN(-2e-4): ', isNaN(-2e-4));    // false
    console.log('isNaN(Infinity): ', isNaN(Infinity));    // false

    console.log('isNaN(true): ', isNaN(true));    // false
    console.log('isNaN(false): ', isNaN(false));    // false

    console.log('isNaN(""): ', isNaN(""));    // false
    console.log('isNaN(" "): ', isNaN(" "));    // false
    console.log('isNaN("45.3"): ', isNaN("45.3"));    // false
    console.log('isNaN("1.2e3"): ', isNaN("1.2e3"));    // false
    console.log('isNaN("Infinity"): ', isNaN("Infinity"));    // false

    console.log('isNaN(new Date): ', isNaN(new Date));    // false

    console.log('isNaN(null): ', isNaN(null));    // false
    console.log('isNaN([]): ', isNaN([]));  // false

    // Always USE this. I BEG you again.
    log(tag, 'Number.isNaN()');
    console.log('Always USE Number.isNaN()....');

    // Satisfies as NaN ----> (The one and only)
    console.log('Number.isNaN(NaN): ', Number.isNaN(NaN));    // true

    // NOT Satisfies as NaN ---->
    console.log('Number.isNaN(): ', Number.isNaN());    // false
    console.log('Number.isNaN(undefined): ', Number.isNaN(undefined));    // false

    console.log('Number.isNaN(1): ', Number.isNaN(1));    // false
    console.log('Number.isNaN(-2e-4): ', Number.isNaN(-2e-4));    // false
    console.log('Number.isNaN(Infinity): ', Number.isNaN(Infinity));    // false

    console.log('Number.isNaN(true): ', Number.isNaN(true));    // false
    console.log('Number.isNaN(false): ', Number.isNaN(false));    // false

    console.log('Number.isNaN(""): ', Number.isNaN(""));    // false
    console.log('Number.isNaN(" "): ', Number.isNaN(" "));    // false
    console.log('Number.isNaN("45.3"): ', Number.isNaN("45.3"));    // false
    console.log('Number.isNaN("1.2e3"): ', Number.isNaN("1.2e3"));    // false
    console.log('Number.isNaN("Infinity"): ', Number.isNaN("Infinity"));    // false
    console.log('Number.isNaN("10$"): ', Number.isNaN("10$"));    // false
    console.log('Number.isNaN("hello"): ', Number.isNaN("hello"));    // false

    console.log('Number.isNaN(new Date): ', Number.isNaN(new Date));    // false

    console.log('Number.isNaN(null): ', Number.isNaN(null));    // false
    console.log('Number.isNaN({}): ', Number.isNaN({}));    // false
    console.log('Number.isNaN({ x: "a" }): ', Number.isNaN({ x: "a" }));  // false
    console.log('Number.isNaN([]): ', Number.isNaN([]));  // false
    console.log('Number.isNaN([1, 2]): ', Number.isNaN([1, 2]));    // false
    console.log('Number.isNaN(["a", "b"]): ', Number.isNaN(["a", "b"]));  // false

    console.log('Number.isNaN(function(){}): ', Number.isNaN(function () { }));    // false
    console.log('Number.isNaN(function(){ return "a"; }): ', Number.isNaN(function () { return "a"; }));   // false
};
