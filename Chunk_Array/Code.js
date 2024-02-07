/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    return arr.reduce((acc, cur) => {
        if (acc.length == 0 || acc.at(-1).length == size) {
            acc.push([]);
        }
        acc.at(-1).push(cur);
        return acc;
    }, []);
};
