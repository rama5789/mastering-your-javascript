/* Error:
Error objects are thrown when "runtime errors occur". The Error object can also be used as
a base object for "user-defined exceptions".
See below for standard built-in error types.

# Error types:
 - EvalError
    Creates an instance representing an error that occurs regarding the global function
    eval().
 - InternalError
    Creates an instance representing an error that occurs when an internal error in the
    JavaScript engine is thrown. E.g. "too much recursion".
 - RangeError
    Creates an instance representing an error that occurs when a numeric variable or
    parameter is outside of its valid range.
 - ReferenceError
    Creates an instance representing an error that occurs when de-referencing an invalid
    reference.
 - SyntaxError
    Creates an instance representing a syntax error.
 - TypeError
    Creates an instance representing an error that occurs when a variable or parameter
    is not of a valid type.
 - URIError
    Creates an instance representing an error that occurs when encodeURI() or decodeURI()
    are passed invalid parameters.

# Constructor:
    Error()
        Creates a new Error object.

# Instance properties:
 - Error.prototype.message
    Error message.
 - Error.prototype.name
    Error name.
 - Error.prototype.description
    A non-standard Microsoft property for the error description. Similar to message.
 - Error.prototype.number
    A non-standard Microsoft property for an error number.
 - Error.prototype.fileName
    A non-standard Mozilla property for the path to the file that raised this error.
 - Error.prototype.lineNumber
    A non-standard Mozilla property for the line number in the file that raised this error.
 - Error.prototype.columnNumber
    A non-standard Mozilla property for the column number in the line that raised this error.
 - Error.prototype.stack
    A non-standard Mozilla property for a stack trace.

# Instance methods:
 - Error.prototype.toString()
    Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

*/
'use strict';

console.log('\n\n<------ error.js ----->');

const tag = 'Error';

/* 
   Throwing a generic error
*/
{
  try {
    log(tag, 'try__GenericError');

    // throw Error('Whoops! It is a Generic Error');
    throw new Error('Whoops! It is a Generic Error');
  } catch (e) {
    log(tag, 'catch__GenericError');

    console.log('e instanceof Error: ', e instanceof Error); // o/p-> true

    console.error('e: ', e); // o/p-> Error: Whoops! It is a Generic Error
    console.error('e.name: ', e.name); // o/p-> Error
    console.error('e.message: ', e.message); // o/p-> Whoops! It is a Generic Error
    console.error('e.stack: ', e.stack); // o/p-> Error: Whoops! It is a Generic Error at http://127.0.0.1:5500/src/references/error.js:66:10
  }
}

/* 
   ES5 Custom Error Object
*/
{
  function ES5CustomError(foo, message, fileName, lineNumber) {
    var instance = new Error(message, fileName, lineNumber);
    instance.name = 'ES5CustomError';
    instance.foo = foo;
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
      Error.captureStackTrace(instance, ES5CustomError);
    }
    return instance;
  }

  ES5CustomError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: Error,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ES5CustomError, Error);
  } else {
    ES5CustomError.__proto__ = Error;
  }

  try {
    log(tag, 'try__ES5CustomError');

    throw new ES5CustomError('baz', 'bazMessage');
  } catch (e) {
    log(tag, 'catch__ES5CustomError');

    console.log('e instanceof Error: ', e instanceof Error); // o/p-> true
    console.log('e instanceof ES5CustomError: ', e instanceof ES5CustomError); // o/p-> true

    console.error('e: ', e); // o/p-> Error: bazMessage
    console.error('e.name: ', e.name); // o/p-> ES5CustomError
    console.error('e.foo: ', e.foo); // o/p-> baz
    console.error('e.message: ', e.message); // o/p-> bazMessage
    console.error('e.stack: ', e.stack); // o/p-> ES5CustomError: bazMessage at http://127.0.0.1:5500/src/references/error.js:108:10
  }
}

/*
   ES6 Custom Error Class
*/
{
  class ES6CustomError extends Error {
    constructor(foo = 'bar', loo = 'aaz', ...params) {
      log(tag, 'ES6CustomError__constructor');

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params);

      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ES6CustomError);
      }

      this.name = 'ES6CustomError';
      // Custom debugging information
      this.foo = foo;
      this.loo = loo;
      this.date = new Date();
    }
  }

  try {
    log(tag, 'try__ES6CustomError');

    throw new ES6CustomError('baz', 'aar', 'bazMessage');
  } catch (e) {
    log(tag, 'catch__ES6CustomError');

    console.log('e instanceof Error: ', e instanceof Error); // o/p-> true
    console.log('e instanceof ES6CustomError: ', e instanceof ES6CustomError); // o/p-> true

    console.error('e: ', e); // o/p-> ES6CustomError: bazMessage at http://127.0.0.1:5500/src/references/error.js:142:10
    console.error('e.name: ', e.name); // o/p-> ES6CustomError
    console.error('e.foo: ', e.foo); // o/p-> baz
    console.error('e.loo: ', e.loo); // o/p-> aar
    console.error('e.date: ', e.date); // o/p-> Wed May 20 2020 15:40:05 GMT+0530 (India Standard Time)
    console.error('e.message: ', e.message); // o/p-> bazMessage
    console.error('e.stack: ', e.stack); // o/p-> ES6CustomError: bazMessage at http://127.0.0.1:5500/src/references/error.js:142:10
  }
}
