const array=[[1,2,3],[4,5],[6],{'user':'jash'},[[2,4,5],[5,4]]]
function addArray(...array){
    const res=array.flat(Infinity)
    return res;
}
console.log(addArray(array))
