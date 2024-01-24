/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
   
    let i=0
    while(i<=arr.length-1){
        arr[i]=fn(arr[i],i);
        i++;
    }
    return arr;
};
