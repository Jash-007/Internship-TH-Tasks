/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const a = []
    for (var i = 0; i <= arr.length - 1; i = i + size) {
        a.push(arr.slice(i, i + size));
    }
    return a;
};
