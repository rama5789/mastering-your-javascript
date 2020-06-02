/* AsyncAwait:

*/
'use strict';

console.log('\n\n<------ async_await.js ----->');

const tag = 'AsyncAwait';

{
    log(tag, 'promise_chaining_using_async_await');

    const doubleNum = (num) => new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('Err: Number must be provided');
        }, 2000);
    });

    // promise chaining using async await (synchronous style)
    const processData = async () => {
        try {
            let result;

            result = await doubleNum(2);
            console.log('doubleNum [data]: ', result);    // 4

            result = await doubleNum(result);
            console.log('doubleNum [data2]: ', result);  // 8

            result = await doubleNum(result + 'a');
            console.log('doubleNum [data3]: ', result);  // (won't come here)

            return result;
        } catch (err) {
            console.log('doubleNum [err]: ', err);  // Err: Number must be provided

            throw new Error('Caught and Re-Thrown: ' + err);
        }
    };

    processData()
        .then(result => {
            console.log('result: ', result);
        })
        .catch(error => {
            console.log('error', error);    // Error: Caught and Re-Thrown: Err: Number must be provided at processData (async_await.js:37)
        });
    console.log('async processData() called');
};