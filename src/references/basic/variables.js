/* Variables:

* Warning:
Do NOT create global variables unless you intend to. 
Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.

# Value = undefined:
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.
A variable declared without a value will have the value "undefined".
{ 
    var x; 
    // value of x is undefined
}

# Re-Declaring JavaScript Variables:
If you re-declare a JavaScript variable, it will not lose its value.
The variable carName will still have the value "Volvo" after the execution of these statements:
{ 
    var carName = "Volvo";
    var carName; 
    // value of carName is Volvo
}

*/
'use strict';

console.log('\n\n<------ variables.js ----->');

const tag = 'Variables';

// method call
// fn();   // o/p -> ReferenceError: gwv is not defined

/* Variable Declarations at Top */
// Global Scope
window.gwv = 'global_window_var';
// guv = 'global_undeclared_var';  // ['use strict' ON] ReferenceError: guv is not defined
var gdv; // declared but not defined
var gv = 'global_var';
let gl = 'global_let';
const gc = 'global_const';
// gc = 'cannot assign';   // o/p -> TypeError: Assignment to constant variable.

btm_gdv2 = 'btm_global_declared_var2'; // declared at bottom

// method call
// fn();   // we can call this method here

// Block Scope
{
  log(tag, 'blockScope');

  var bdv;
  var bv = 'block_var';
  let bl = 'block_let';
  const bc = 'block_const';

  // Global Scoped Variables ---->
  console.log('gwv: ', gwv); // o/p -> global_window_var
  // console.log('guv: ', guv);  // o/p -> global_undeclared_var
  console.log('gdv: ', gdv); // o/p -> undefined
  console.log('gv: ', gv); // o/p -> global_var
  console.log('gl: ', gl); // o/p -> global_let
  console.log('gc: ', gc); // o/p -> global_const

  // Block Scoped Variables ---->
  console.log('bdv: ', bdv); // o/p -> undefined
  console.log('bv: ', bv); // o/p -> block_var
  console.log('bl: ', bl); // o/p -> block_let
  console.log('bc: ', bc); // o/p -> block_const
}

// Function Scope
function fn() {
  var fdv;
  var fv = 'function_var';
  let fl = 'function_let';
  const fc = 'function_const';

  // Block Scope
  {
    log(tag, 'function_BlockScope');

    var fbdv;
    var fbv = 'fn_block_var';
    let fbl = 'fn_block_let';
    const fbc = 'fn_block_const';

    // Global Scoped Variables ---->
    console.log('gwv: ', gwv); // o/p -> global_window_var
    // console.log('guv: ', guv);  // o/p -> global_undeclared_var
    console.log('gdv: ', gdv); // o/p -> undefined
    console.log('gv: ', gv); // o/p -> global_var
    console.log('gl: ', gl); // o/p -> global_let
    console.log('gc: ', gc); // o/p -> global_const

    // Block Scoped Variables ---->
    console.log('bdv: ', bdv); // o/p -> undefined
    console.log('bv: ', bv); // o/p -> block_var
    // console.log('bl: ', bl);    // o/p -> ReferenceError: bl is not defined
    // console.log('bc: ', bc);    // o/p -> ReferenceError: bc is not defined

    // Function Scoped Variables ---->
    console.log('fdv: ', fdv); // o/p -> undefined
    console.log('fv: ', fv); // o/p -> function_var
    console.log('fl: ', fl); // o/p -> function_let
    console.log('fc: ', fc); // o/p -> function_const

    // Function Block Scoped Variables ---->
    console.log('fbdv: ', fbdv); // o/p -> undefined
    console.log('fbv: ', fbv); // o/p -> fn_block_var
    console.log('fbl: ', fbl); // o/p -> fn_block_let
    console.log('fbc: ', fbc); // o/p -> fn_block_const
  }

  log(tag, 'functionScope');

  // Global Scoped Variables ---->
  console.log('gwv: ', gwv); // o/p -> global_window_var
  // console.log('guv: ', guv);  // o/p -> global_undeclared_var
  console.log('gdv: ', gdv); // o/p -> undefined
  console.log('gv: ', gv); // o/p -> global_var
  console.log('gl: ', gl); // o/p -> global_let
  console.log('gc: ', gc); // o/p -> global_const

  // Block Scoped Variables ---->
  console.log('bdv: ', bdv); // o/p -> undefined
  console.log('bv: ', bv); // o/p -> block_var
  // console.log('bl: ', bl);    // o/p -> ReferenceError: bl is not defined
  // console.log('bc: ', bc);    // o/p -> ReferenceError: bc is not defined

  // Function Scoped Variables ---->
  console.log('fdv: ', fdv); // o/p -> undefined
  console.log('fv: ', fv); // o/p -> function_var
  console.log('fl: ', fl); // o/p -> function_let
  console.log('fc: ', fc); // o/p -> function_const

  // Function Block Scoped Variables ---->
  console.log('fbdv: ', fbdv); // o/p -> undefined
  console.log('fbv: ', fbv); // o/p -> fn_block_var
  // console.log('fbl: ', fbl);    // o/p -> ReferenceError: fbl is not defined
  // console.log('fbc: ', fbc);    // o/p -> ReferenceError: fbc is not defined
}

// method call
fn();

log(tag, 'globalScope');

// Global Scoped Variables ---->
console.log('gwv: ', gwv); // o/p -> global_window_var
// console.log('guv: ', guv);  // o/p -> global_undeclared_var
console.log('gdv: ', gdv); // o/p -> undefined
console.log('gv: ', gv); // o/p -> global_var
console.log('gl: ', gl); // o/p -> global_let
console.log('gc: ', gc); // o/p -> global_const

// Block Scoped Variables ---->
console.log('bdv: ', bdv); // o/p -> undefined
console.log('bv: ', bv); // o/p -> block_var
// console.log('bl: ', bl);    // o/p -> ReferenceError: bl is not defined
// console.log('bc: ', bc);    // o/p -> ReferenceError: bc is not defined

// Function Scoped Variables ---->
// console.log('fdv: ', fdv);    // o/p -> ReferenceError: fdv is not defined
// console.log('fv: ', fv);    // o/p -> ReferenceError: fv is not defined
// console.log('fl: ', fl);    // o/p -> ReferenceError: fl is not defined
// console.log('fc: ', fc);    // o/p -> ReferenceError: fc is not defined

// Function Block Scoped Variables ---->
// console.log('fbdv: ', fbdv);  // o/p -> ReferenceError: fbdv is not defined
// console.log('fbv: ', fbv);    // o/p -> ReferenceError: fbv is not defined
// console.log('fbl: ', fbl);    // o/p -> ReferenceError: fbl is not defined
// console.log('fbc: ', fbc);    // o/p -> ReferenceError: fbc is not defined

// Bottom Global Scoped Variables ---->
// console.log('btm_gwv: ', btm_gwv);  // o/p -> ReferenceError: btm_gwv is not defined
// console.log('btm_guv: ', btm_guv);  // o/p -> ReferenceError: btm_guv is not defined
console.log('btm_gdv: ', btm_gdv); // o/p -> undefined
console.log('btm_gdv2: ', btm_gdv2); // o/p -> btm_global_declared_var2
console.log('btm_gv: ', btm_gv); // o/p -> undefined
// console.log('btm_gl: ', btm_gl);  // o/p -> ReferenceError: btm_gl is not defined
// console.log('btm_gc: ', btm_gc);  // o/p -> ReferenceError: btm_gc is not defined

/* Variable Declarations at Bottom */
window.btm_gwv = 'btm_global_window_var'; // Won't be hoisted
// btm_guv = 'btm_global_undeclared_var';  // ['use strict' ON] ReferenceError: btm_guv is not defined
var btm_gdv; // hoisted
var btm_gdv2; // hoisted
var btm_gv = 'btm_global_var'; // hoisted
let btm_gl = 'btm_global_let'; // Won't be hoisted
const btm_gc = 'btm_global_const'; // Won't be hoisted

console.log('window (global object): ', window);
