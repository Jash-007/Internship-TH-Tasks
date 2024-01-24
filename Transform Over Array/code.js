/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let res=[]
    let i=0
    while(i<=arr.length-1){
        res[i]=fn(arr[i],i);
        i++;
    }
    return res;
};
Updated code with single array
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
