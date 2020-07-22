/* Complexity:

*/
'use strict';

console.log('\n\n<------ complexity.js ----->');

const tag = 'Complexity';

{
  log(tag, 'time_complexity');

  {
    log(tag, 'a_constant_time_complexity_O(1)');

    const getFirstValue = (list) => {
      return list[0];
    };

    let arr = ['big', 'fat', 'steak'];
    console.log('getFirstValue(arr): ', getFirstValue(arr)); // big
  }

  {
    log(tag, 'b_logarithmic_time_complexity_O(1)');

    const binarySearch = (list, x) => {
      let start = 0,
        end = list.length - 1;

      while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (list[mid] === x) {
          return true;
        } else if (list[mid] < x) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }

      return false;
    };

    let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log('binarySearch(sortedArr, 3): ', binarySearch(sortedArr, 3)); // true
  }
}
