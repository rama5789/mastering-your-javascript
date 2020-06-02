/* Callback:

*/
'use strict';

console.log('\n\n<------ callback.js ----->');

const tag = 'Callback';

{
    log(tag, 'get_data_and_error');

    const getData = (x, y, cbFn) => {
        setTimeout(() => {
            // callback can run multiple times (which is a DANGEROUS Behaviour)
            // To mitigate this Behaviour, Promises came as an Alternate.                  
            cbFn(null, x + y, x - y);
            cbFn(null, null, x - y);
            cbFn(undefined, x + y, undefined);
            cbFn(new Error('xyErr'), undefined, undefined);
        }, 2000);
    };

    getData(2, 3, (err, addResult) => {
        console.log('getData [err, addResult]: ', err, addResult);
        // null 5
        // null null
        // undefined 5
        // Error: xyErr at setTimeout (callback.js:20) undefined
    });

    getData(4, 5, (err, addResult, subResult) => {
        console.log('getData2 [err, addResult, subResult]: ', err, addResult, subResult);
        // null 9 -1
        // null null -1
        // undefined 9 undefined
        // Error: xyErr at setTimeout (callback.js:20) undefined undefined
    });
};

{
    log(tag, 'callback_hell');

    const doubleNum = (num, cbFn) => {
        setTimeout(() => {
            typeof num === 'number' ? cbFn(undefined, num * 2) : cbFn('Err: Number must be provided');
        }, 2000);
    };

    // callback hell (callback nesting)
    // Another reason, for Promises to come.
    doubleNum(2, (err, data) => {
        if (err) {
            console.log('doubleNum [err]: ', err);
        } else {
            console.log('doubleNum [data]: ', data);    // 4
            doubleNum(data, (err2, data2) => {
                if (err2) {
                    console.log('doubleNum2 [err2]: ', err2);
                } else {
                    console.log('doubleNum2 [data2]: ', data2); // 8
                    doubleNum(data2 + 'a', (err3, data3) => {
                        if (err3) {
                            console.log('doubleNum3 [err3]: ', err3);   // Err: Number must be provided   
                        } else {
                            console.log('doubleNum3 [data3]: ', data3);
                        }
                    });
                }
            });
        }
    });
};