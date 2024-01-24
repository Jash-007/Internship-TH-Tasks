/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const res = {}
    return function (...args) {
        if (args in res) return res[args];
        else {
            const r = fn(...args);
            res[args] = r;
            return r;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
