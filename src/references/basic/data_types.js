/* DataTypes:

JavaScript provides different data types to hold different types of values. 
There are two types of data types in JavaScript.
    - Primitive data type { undefined, null, string, number, boolean }
    - Non-primitive (reference) data type { Object, Array, String, Number, Boolean, Date, Error, RegExp }

# The "typeof" Operator:
It finds the type of a JavaScript variable.
Getting object type by constructor name:

# The "instanceOf" Operator:
To find whether an object was constructed by a certain constructor or, one inheriting from it,
you can use the 'instanceof' command.
Finding an object's class:
Note that primitive values are not considered instances of any class:

Whereas instanceof also catches instances of subclasses, using obj.constructor does not.
Every value in JavaScript besides 'null' and 'undefined' also has a "constructor" property storing the function that was used to construct it. 
This even works with primitives.

Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
*/
'use strict';

console.log('\n\n<------ data_types.js ----->');

const tag = 'DataTypes';

{
    log(tag, 'type_coercion');

    console.log("'5' + 5: ", '5' + 5);  // 55
    console.log("5 + '5': ", 5 + '5');  // 55
    console.log("'5' - 5: ", '5' - 5);  // 0
    console.log("5 - '5': ", 5 - '5');  // 0
    console.log("'5' == 5: ", '5' == 5);    // true
    console.log("true == '1': ", true == '1');  // true
    console.log("true + 12: ", true + 12);  // 13
};

{
    log(tag, 'typeof');

    let und;
    let str = 'John';
    let num = 3.14;
    let obj = { a: 'a' };
    let arrObj = ['John'];
    let dateObj = new Date();
    let regxObj = /w3schools/i;
    let errObj = new Error();
    let fn = () => { return 'fn' };

    console.log('typeof str: ', typeof str);  // string
    console.log('Object.prototype.toString.call(str): ', Object.prototype.toString.call(str));  // [object String]

    console.log('typeof num: ', typeof num);      // number
    console.log('Object.prototype.toString.call(num): ', Object.prototype.toString.call(num));    // [object Number]
    console.log('typeof NaN: ', typeof NaN);            // number
    console.log('Object.prototype.toString.call(NaN): ', Object.prototype.toString.call(NaN));  // [object Number]
    console.log('typeof Infinity: ', typeof Infinity);  // number
    console.log('Object.prototype.toString.call(Infinity): ', Object.prototype.toString.call(Infinity));    // [object Number]

    console.log('typeof true: ', typeof true);      // boolean
    console.log('Object.prototype.toString.call(true): ', Object.prototype.toString.call(true));    // [object Boolean]
    console.log('typeof false: ', typeof false);    // boolean
    console.log('Object.prototype.toString.call(false): ', Object.prototype.toString.call(false));  // [object Boolean]

    console.log('typeof undefined: ', typeof undefined);    // undefined
    console.log('Object.prototype.toString.call(undefined): ', Object.prototype.toString.call(undefined));  // [object Undefined]
    console.log('typeof und: ', typeof und);                // undefined
    console.log('Object.prototype.toString.call(und): ', Object.prototype.toString.call(und));  // [object Undefined]

    console.log('typeof null: ', typeof null);  // object
    console.log('Object.prototype.toString.call(null): ', Object.prototype.toString.call(null));    // [object Null]
    console.log('typeof obj: ', typeof obj);    // object
    console.log('Object.prototype.toString.call(obj): ', Object.prototype.toString.call(obj));  // [object Object]
    console.log('typeof arrObj: ', typeof arrObj);    // object
    console.log('Object.prototype.toString.call(arrObj): ', Object.prototype.toString.call(arrObj));  // [object Array]
    console.log('typeof dateObj: ', typeof dateObj);  // object
    console.log('Object.prototype.toString.call(dateObj): ', Object.prototype.toString.call(dateObj));    // [object Date]
    console.log('typeof regxObj: ', typeof regxObj);  // object
    console.log('Object.prototype.toString.call(regxObj): ', Object.prototype.toString.call(regxObj));    // [object RegExp]
    console.log('typeof errObj: ', typeof errObj);    // object
    console.log('Object.prototype.toString.call(errObj): ', Object.prototype.toString.call(errObj));  // [object Error]

    console.log('typeof fn: ', typeof fn);    // function
    console.log('Object.prototype.toString.call(fn): ', Object.prototype.toString.call(fn));    // [object Function]
};

{
    log(tag, 'instanceOf');

    let num = 1.23, str = 'John', bool = true;    // primitive types are not instance of any class
    // let obj = new Object();
    let obj = {};
    let numObj = new Number(num);
    let strObj = new String(str);
    let boolObj = new Boolean(bool);
    // let arrObj = new Array();
    let arrObj = [];
    let dateObj = new Date();
    let errObj = new Error();
    let regxObj = /w3schools/i;
    let fn = () => { return 'fn' };

    {
        log(tag, 'a_instanceOf');

        console.log('Number instanceof Object: ', Number instanceof Object);    // true
        console.log('String instanceof Object: ', String instanceof Object);    // true
        console.log('Boolean instanceof Object: ', Boolean instanceof Object);    // true
        console.log('Object instanceof Object: ', Object instanceof Object);    // true
        console.log('Array instanceof Object: ', Array instanceof Object);    // true
        console.log('Date instanceof Object: ', Date instanceof Object);    // true
        console.log('Error instanceof Object: ', Error instanceof Object);    // true
        console.log('RegExp instanceof Object: ', RegExp instanceof Object);    // true
        console.log('Function instanceof Object: ', Function instanceof Object);    // true

        console.log('\nnum instanceof Number: ', num instanceof Number);    // false
        console.log('str instanceof String: ', str instanceof String);  // false
        console.log('bool instanceof Boolean: ', bool instanceof Boolean);  // false
        console.log('Number(num) instanceof Number: ', Number(num) instanceof Number);  // false
        console.log('String(str) instanceof String: ', String(str) instanceof String);  // false
        console.log('Boolean(bool) instanceof Boolean: ', Boolean(bool) instanceof Boolean);   // false

        console.log('\nobj instanceof Object: ', obj instanceof Object);    // true
        console.log('numObj instanceof [Object, Number]: ', numObj instanceof Object, numObj instanceof Number);    // true true
        console.log('strObj instanceof [Object, String]: ', strObj instanceof Object, strObj instanceof String);    // true true
        console.log('boolObj instanceof [Object, Boolean]: ', boolObj instanceof Object, boolObj instanceof Boolean);   // true true
        console.log('arrObj instanceof [Object, Array]: ', arrObj instanceof Object, arrObj instanceof Array);  // true true
        console.log('dateObj instanceof [Object, Date]: ', dateObj instanceof Object, dateObj instanceof Date);    // true true
        console.log('errObj instanceof [Object, Error]: ', errObj instanceof Object, errObj instanceof Error);    // true true
        console.log('regxObj instanceof [Object, RegExp]: ', regxObj instanceof Object, regxObj instanceof RegExp);    // true true
        console.log('fn instanceof [Object, Function]: ', fn instanceof Object, fn instanceof Function);    // true true
    };

    {
        log(tag, 'b_constructor');

        // console.log('undefined.constructor; ', undefined.constructor);   // TypeError: Cannot read property 'constructor' of undefined
        // console.log('null.constructor; ', null.constructor);    // TypeError: Cannot read property 'constructor' of null

        console.log('Number.constructor; ', Number.constructor);    // ƒ Function() 
        console.log('String.constructor; ', String.constructor);    // ƒ Function() 
        console.log('Boolean.constructor; ', Boolean.constructor);  // ƒ Function() 
        console.log('Object.constructor; ', Object.constructor);    // ƒ Function() 
        console.log('Array.constructor; ', Array.constructor);  // ƒ Function() 
        console.log('Date.constructor; ', Date.constructor);  // ƒ Function() 
        console.log('Error.constructor; ', Error.constructor);  // ƒ Function() 
        console.log('RegExp.constructor; ', RegExp.constructor);    // ƒ Function() 
        console.log('Function.constructor; ', Function.constructor);    // ƒ Function() 

        console.log('\nNumber.constructor === Function: ', Number.constructor === Function); // true
        console.log('String.constructor === Function: ', String.constructor === Function); // true
        console.log('Boolean.constructor === Function: ', Boolean.constructor === Function); // true
        console.log('Object.constructor === [Object, Function]: ', Object.constructor === Object, Object.constructor === Function); // false true
        console.log('Array.constructor === Function: ', Array.constructor === Function); // true 
        console.log('Date.constructor === Function: ', Date.constructor === Function); // true
        console.log('Error.constructor === Function: ', Error.constructor === Function); // true
        console.log('RegExp.constructor === Function: ', RegExp.constructor === Function); // true 
        console.log('Function.constructor === Function: ', Function.constructor === Function); // true 

        console.log('\nnum.constructor; ', num.constructor);    // ƒ Number() 
        console.log('str.constructor; ', str.constructor);    // ƒ String() 
        console.log('bool.constructor; ', bool.constructor);  // ƒ Boolean() 
        console.log('obj.constructor; ', obj.constructor);    // ƒ Object() 
        console.log('numObj.constructor; ', numObj.constructor);    // ƒ Number() 
        console.log('strObj.constructor; ', strObj.constructor);    // ƒ String()
        console.log('boolObj.constructor; ', boolObj.constructor);    // ƒ Boolean() 
        console.log('arrObj.constructor; ', arrObj.constructor);  // ƒ Array() 
        console.log('dateObj.constructor; ', dateObj.constructor);  // ƒ Date() 
        console.log('errObj.constructor; ', errObj.constructor);    // ƒ Error() 
        console.log('regxObj.constructor; ', regxObj.constructor);    // ƒ RegExp() 
        console.log('fn.constructor; ', fn.constructor);    // ƒ Function() 

        console.log('\nnum.constructor === [Object, Number]: ', num.constructor === Object, num.constructor === Number);  // false true
        console.log('str.constructor === [Object, String]: ', str.constructor === Object, str.constructor === String);  // false true
        console.log('bool.constructor === [Object, Boolean]: ', bool.constructor === Object, bool.constructor === Boolean);  // false true
        console.log('obj.constructor === Object: ', obj.constructor === Object);    // true
        console.log('numObj.constructor === [Object, Number]: ', numObj.constructor === Object, numObj.constructor === Number);  // false true
        console.log('strObj.constructor === [Object, String]: ', strObj.constructor === Object, strObj.constructor === String);  // false true
        console.log('boolObj.constructor === [Object, Boolean]: ', boolObj.constructor === Object, boolObj.constructor === Boolean);  // false true
        console.log('arrObj.constructor === [Object, Array]: ', arrObj.constructor === Object, arrObj.constructor === Array);  // false true
        console.log('dateObj.constructor === [Object, Date]: ', dateObj.constructor === Object, dateObj.constructor === Date);  // false true
        console.log('errObj.constructor === [Object, Error]: ', errObj.constructor === Object, errObj.constructor === Error);  // false true
        console.log('regxObj.constructor === [Object, RegExp]: ', regxObj.constructor === Object, regxObj.constructor === RegExp);  // false true 
        console.log('fn.constructor === [Object, Function]: ', fn.constructor === Object, fn.constructor === Function);  // false true 
    };

    {
        log(tag, 'c_constructor_usage');

        /* function isNumber(value) {
            if (value === undefined || value === null) return false;

            return value.constructor === Number;
        } */

        function isNumber(value) {  // isNumber => isStrictNumber
            if (value === undefined || value === null) return false;

            const numObjValue = new Number(value).valueOf();
            // console.log('numObjValue: ', numObjValue);

            // discarding all values which results NaN
            if (Number.isNaN(numObjValue)) return false;

            return true;
        }

        function isBoolean(value) {
            if (value === undefined || value === null) return false;

            return value.constructor === Boolean;
        }

        console.log('isNumber(1.23): ', isNumber(1.23)); // true
        console.log('isNumber(Number("1.23")): ', isNumber(Number('1.23'))); // true
        console.log('isNumber(Number("John")): ', isNumber(Number('John'))); // false
        console.log('isNumber(new Number("1.23")): ', isNumber(new Number('1.23'))); // true
        console.log('isNumber(new Number("John")): ', isNumber(new Number('John'))); // false
        console.log('isNumber("1.23"): ', isNumber('1.23')); // true
        console.log('isNumber("John"): ', isNumber('John')); // false
        console.log('isNumber(NaN): ', isNumber(NaN)); // false
        console.log('isNumber(obj): ', isNumber(obj)); // false
        console.log('\n');

        console.log('isBoolean(true): ', isBoolean(true)); // true
        console.log('isBoolean(Boolean("true")): ', isBoolean(Boolean('true'))); // true
        console.log('isBoolean(Boolean("John")): ', isBoolean(Boolean('John'))); // true
        console.log('isBoolean(new Boolean("true")): ', isBoolean(new Boolean('true'))); // true
        console.log('isBoolean(new Boolean("John")): ', isBoolean(new Boolean('John'))); // true
        console.log('isBoolean("true"): ', isBoolean('true')); // false
        console.log('isBoolean("John"): ', isBoolean('John')); // false
        console.log('isBoolean(1): ', isBoolean(1)); // false
        console.log('isBoolean(obj): ', isBoolean(obj)); // false
    };
};