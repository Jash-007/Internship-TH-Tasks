/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let result = arr.slice();
    for (let i = 0; i < result.length; i++) {
        result[i] = fn(result[i], i);
    }
    return result;
};
