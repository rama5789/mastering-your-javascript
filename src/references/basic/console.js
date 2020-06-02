/* Console:

*/
'use strict';

console.log('\n\n<------ console.js ----->');

const tag = 'Console';

console.clear();    // Console was cleared

{
    log(tag, 'console.assert()');

    console.assert(true == 1);      // No output
    console.assert('one' === 1);    // Assertion failed: console.assert
    console.assert(NaN === NaN);    // Assertion failed: console.assert
};

{
    log(tag, 'console.time()');

    console.time('Time_Response_In');
    // alert('Click to continue'); // halt
    console.timeEnd('Time_Response_In'); // o/p -> Time_Response_In: 2582.199951171875ms
    // alert('Click one more time');   // halt
    console.timeEnd('Time_Response_In'); // o/p -> Timer 'Time_Response_In' does not exist

    // 100 x 100 = looping 10000 times
    console.time('Time_Loop_In');
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            // nothing to do ...
        }
    }
    console.timeEnd('Time_Loop_In');  // o/p -> Time_Loop_In: 1.89326171875ms
};

{
    log(tag, 'console.log()');

    console.log('%s has %d points', 'Sam', 100);    // o/p -> Sam has 100 points
    console.log('%cHello world!', 'color: blue; font-size: xx-large');  // o/p -> Hello world!
    console.log(
        '%cHello %cWorld%c!!',  // string to be printed
        'color: blue;', // applies color formatting to the 1st substring
        'font-size: xx-large;', // applies font formatting to the 2nd substring
        '/* no CSS rule*/' // does not apply any rule to the remaining substring
    );  // o/p -> Hello world!

    console.info('This is an INFO Message');
    console.warn('This is an WARNING Message');
    console.error('This is an ERROR Message');

    function fnFirst() {
        console.trace('This is a TRACED Message');
    }
    function fnSecond() {
        fnFirst();
    }
    fnSecond();
};

{
    log(tag, 'console.table()');

    const arr = ['Hello', 'world'];
    const obj = { foo: 'bar', bar: 'baz' };
    const objArr = [
        { personId: 101, name: 'Jhon', city: 'Melbourne', phoneNo: '1234567890' },
        { personId: 102, name: 'Amelia', city: 'Sydney', phoneNo: '1234567890' },
    ];

    console.table(arr);
    console.table(obj);
    console.table(objArr);
    console.table(objArr, ['personId', 'name']);
};

{
    log(tag, 'console.count()');

    let v1 = 42.3, v2 = 'Me', v3 = 'You';
    let v4;
    const fn1 = function myfn() { };

    console.count('');  // 1
    console.count("");  // 2

    console.count(v1);  // 42.3: 1
    console.count(v2);  // Me: 1
    console.count(Number(v1));  // 42.3: 2
    console.count(v3);  // You: 1
    console.count(String(v1));  // 42.3: 3
    console.count(v3);  // You: 2
    console.count(v2);  // Me: 2

    console.count(Object);              // [object Function]: 1
    console.count(console.constructor); // [object Function]: 2
    console.count(Number);              // [object Function]: 3
    console.count(function () { });     // [object Function]: 4
    console.count(fn1);                 // [object Function]: 5

    console.count(console);                                 // [object Object]: 1
    console.count(console.__proto__);                       // [object Object]: 2
    console.count(console.constructor.prototype);           // [object Object]: 3
    console.count(console.__proto__.constructor.prototype); // [object Object]: 4
    console.count(Object.getPrototypeOf(console));          // [object Object]: 5

    console.count(window);  // [object Window]: 1
    console.count(document);    // [object HTMLDocument]: 1

    console.count();                    // default: 1
    console.count(undefined);           // default: 2
    console.count(v4);                  // default: 3
    console.count(document.dontExist);  // default: 4

    console.count(null);    // null: 1

    console.count(Number(undefined));   // NaN: 1
    console.count(NaN);                 // NaN: 2
    console.count(NaN + 3);             // NaN: 3

    console.count(1 / 0);           // Infinity: 1
    console.count(String(1 / 0));   // Infinity: 2
};