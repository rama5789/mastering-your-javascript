# Console :

# console.time() :
### Measuring time :
* __console.time()__ can be used to *measure how long a task in the code takes to run*.
* Calling __console.time([label])__ starts a __new Timer__. When __console.timeEnd([label])__ is called, the __Elapsed Time__, in milliseconds, since the original .time() call is calculated and logged.
```javascript
console.time('Timer_Response_In');

alert('Click to continue');
console.timeEnd('Timer_Response_In'); // Timer_Response_In: 2582.199951171875ms

alert('Click one more time');
console.timeEnd('Timer_Response_In'); // Timer 'Timer_Response_In' does not exist
```
# console.log() :
### Formatting console output :
```javascript
/* 
    # The full list of format specifiers in JavaScript is:
 Specifier        Output
    %s        Formats the value as a String
    %i or %d  Formats the value as an Integer
    %f        Formats the value as a Floating Point value
    %o        Formats the value as an expandable DOM element
    %O        Formats the value as an expandable JavaScript object
    %c        Applies CSS style rules to the output string as specified by the 2nd parameter
*/
console.log('%s has %d points', 'Sam', 100);    // Sam has 100 points

/* 
    # Advanced Styling:
    When the CSS format specifier ( %c ) is placed at the left side of the string, the print method will accept a second parameter with CSS rules which allow fine-grained control over the formatting of that string:
*/
console.log('%cHello world!', 'color: blue; font-size: xx-large');  // Hello world! // with CSS Style

/* 
    # It is possible to use multiple %c format specifiers:
    - Any substring to the right of a %c has a corresponding parameter in the print method;
    - This parameter may be an empty string, if there is no need to apply CSS rules to that same substring;
    - If two %c format specifiers are found, the 1st (encased in %c ) and 2nd substring will have their rules defined in the 2nd and 3rd parameter of the print method respectively.
    - if three %c format specifiers are found, then the 1st, 2nd and 3rd substrings will have their rules defined in the 2nd , 3rd and 4th parameter respectively, and so on...
*/
console.log(
    "%cHello %cWorld%c!!",  // string to be printed
    "color: blue;", // applies color formatting to the 1st substring
    "font-size: xx-large;", // applies font formatting to the 2nd substring
    "/* no CSS rule*/" // does not apply any rule to the remaining substring
);  // Hello world! // with CSS Style
```
## Other print methods :
* __console.info()__ : small informative icon (i) appears on the left side of the printed string(s) or object(s).
* __console.warn()__ : small warning icon (!) appears on the left side. In some browsers, the background of the log is yellow.
* __console.error()__ : small times icon (⊗) appears on the left side. In some browsers, the background of the log is red.
* __console.trace()__ : outputs the current stack trace or displays the same output as the log method if invoked in the global scope.


