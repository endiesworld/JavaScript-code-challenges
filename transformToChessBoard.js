// write a function for row operation
function rowOperation(arr, firstIndex=1, secondIndex=2){
    let arrayCopy = [...arr] ;
    let firstElement = arr[firstIndex] ;
    let secondElement = arr[secondIndex] ;
    arrayCopy[firstIndex] = secondElement ;
    arrayCopy[secondIndex] = firstElement  ;
    return arrayCopy ;
}
let myArray = [[1,0,1,0],[1,0,1,0], [0,1,0,1], [0,1,0,1]]
console.log(rowOperation(myArray))

function colunmOperation(arr, col1, col2){
    let arrayCopy = [...arr] ;
    let colLength = arr[0].length ;
    let rowLenth = arr.length ;
}