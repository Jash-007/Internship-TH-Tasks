/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let a=[]
    let a1=[]
    for(var i=0;i<=arr.length-1;i=i+size){
    a1=arr.slice(i,i+size)
    a.push(a1);
    }
    return a;
};
