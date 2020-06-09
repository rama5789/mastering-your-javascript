/* Promise:

*/
'use strict';

console.log('\n\n<------ promise.js ----->');

const tag = 'Promise';

{
  log(tag, 'get_data_and_error');

  // const isResolved = true;
  const isResolved = false;

  const getDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve, reject run only once
      if (isResolved) {
        resolve('request resolved');
        resolve('request resolved again'); // This will never run
      } else {
        reject('request rejected');
        reject('request rejected again'); // This will never run
      }
    }, 2000);
  });

  getDataPromise.then(
    (data) => {
      // resolved response
      console.log('getDataPromise [data]: ', data); // request resolved
    },
    (err) => {
      // rejected response
      console.log('getDataPromise [err]: ', err); // request rejected
    }
  );

  getDataPromise
    .then((data) => {
      console.log('getDataPromise2 [data]: ', data); // request resolved
    })
    .catch((err) => {
      // catch all errors
      console.log('getDataPromise2 [err]: ', err); // request rejected
    });
}

{
  log(tag, 'promise_chaining');

  const doubleNum = (num) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        typeof num === 'number'
          ? resolve(num * 2)
          : reject('Err: Number must be provided');
      }, 2000);
    });

  // Promise Chaining an alternate to Callback Hell
  doubleNum(2)
    .then((data) => {
      console.log('doubleNum [data]: ', data); // 4

      return doubleNum(data);
    })
    .then((data2) => {
      console.log('doubleNum [data2]: ', data2); // 8

      return doubleNum(data2 + 'a');
    })
    .then((data3) => {
      console.log('doubleNum [data3]: ', data3); // (won't come here)
    })
    .catch((err) => {
      // catch all errors
      console.log('doubleNum [err]: ', err); // Err: Number must be provided
    });
}
